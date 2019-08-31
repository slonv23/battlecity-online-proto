package base;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.io.StringWriter;
import java.util.function.Consumer;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonToken;

@Component
public class RequestProcessor {
    static final int SPAWN = 1;
    static final int MOVE = 2;
    static final int STOP = 3;
    static final int FIRE = 4;

    private JsonFactory jasonFactory;

    RequestProcessor(){
        this.jasonFactory = new JsonFactory();
    }

    public void onConnect(WebSocketSession session) {
        GameData.addSession(session);

        try {
            StringWriter outputWriter = new StringWriter();

            JsonGenerator generator = jasonFactory.createGenerator(outputWriter);

            generator.writeStartObject();

            generator.writeStringField("sid", session.getId());
            generator.writeNumberField("serverTime", System.currentTimeMillis());

            generator.writeEndObject();
            generator.close();

            session.sendMessage(new TextMessage(outputWriter.toString()));
        } catch (IOException e){
            e.printStackTrace();
        }
    }

    public void onDisconnect(WebSocketSession session) {
        String sid = session.getId();
        GameData.removePlayer(sid);
        GameData.deleteSession(sid);
    }

    public void processMessage(WebSocketSession session, String message){
        int cid = -1;
        String data = null;

        try {
            JsonParser jsonParser = jasonFactory.createParser(message);

            jsonParser.nextToken();

            while (jsonParser.nextValue() != JsonToken.END_OBJECT) {
                String fieldname = jsonParser.getCurrentName();

                if ("cid".equals(fieldname)) {
                    cid = Integer.parseInt(jsonParser.getText());
                } else if("data".equals(fieldname)){
                    data = jsonParser.getText();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        if(data == null)
            data = "";

        String sid = session.getId();
        if(!GameData.hasPlayer(sid)){
            if(cid == SPAWN){
                spawn(session);

                //System.out.println("Spawning new player...");
            }
            return;
        }

        this.processCommand(sid, cid, data);
    }

    public void spawn(WebSocketSession session) {
        int id;

        synchronized(GameData.class) {
            id = GameData.spawnPlayer(session.getId());
        }

        try {
            StringWriter outputWriter = new StringWriter();

            JsonGenerator generator = jasonFactory.createGenerator(outputWriter);

            generator.writeStartObject();

            generator.writeNumberField("msgType", API.MSG.PLAYER_INFO);
            generator.writeNumberField("id", id);

            generator.writeEndObject();
            generator.close();
            //System.out.println("sending message from spawn...");
            session.sendMessage(new TextMessage(outputWriter.toString()));
        } catch (IOException e){
            e.printStackTrace();
        }
    }

    public void processCommand(String sid, int cid, String data){
        switch (cid) {
            case MOVE:
                startMove(sid, data);
                break;
            case STOP:
                stop(sid);
                break;
            case FIRE:
                fire(sid);
                break;
        }
    }

    public void startMove(String sid, String data){
        synchronized(GameData.class) {
            int direction = Integer.parseInt(data);
            GameData.getPlayer(sid).actionMove(direction);
        }
        /*System.out.println("cmd move");
        synchronized(dataModel) {
            int direction = Integer.parseInt(data);
            GamePlayer player = this.dataModel.players.get(sid);
            player.move(direction);
            Event event = new Event(player.playerId, Event.START_MOVE, Event.TANK);
            event.append("d", direction);
            baseThread.events.add(event.JSON());
        }*/
    }

    public void fire(String sid) {
        synchronized(GameData.class) {
            GameData.getPlayer(sid).actionFire();
        }
    }

    public void stop(String sid){
        synchronized(GameData.class) {
            //int direction = Integer.parseInt(data);
            GameData.getPlayer(sid).actionStop();
        }
        /*System.out.println("cmd stop");
        synchronized(dataModel) {
            GamePlayer player = this.dataModel.players.get(sid);
            player.stop();
            Event event = new Event(player.playerId, Event.STOP, Event.TANK);
            baseThread.events.add(event.JSON());
        }*/
    }
}
