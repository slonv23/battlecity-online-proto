package base;

import base.environment.Action;
import base.environment.GameObject;
import base.environment.GamePlayer;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonGenerator;
import org.apache.commons.lang3.tuple.Pair;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.io.StringWriter;
import java.util.List;

@Component
public class Dispatcher extends Thread {
    private Thread t;
    private String threadName;
    private long nextTick;

    private JsonFactory jasonFactory;

    Dispatcher(@Value("dispatcherThread") String threadName) {
        System.out.println("Creating " +  threadName);
        this.threadName = threadName;
        this.jasonFactory = new JsonFactory();
    }

    void dispatchGameWorldState(long nextTick) {
        this.nextTick = nextTick;

        synchronized(t) {
            t.notify();
        }
    }

    public String generateMessage() {
        if(GameObject.objectCount == 0)
            return "";

        try {
            StringWriter outputWriter = new StringWriter();

            JsonGenerator generator = jasonFactory.createGenerator(outputWriter);

            generator.writeStartObject();

            generator.writeNumberField("msgType", API.MSG.GAME_STATE);
            generator.writeNumberField("tick", nextTick);
            generator.writeFieldName("objects");

            generator.writeStartArray();
            for (GameObject gameObject : GameData.objects) {
                generator.writeStartObject();
                generator.writeNumberField("id", gameObject.id);
                //System.out.println(gameObject.objectType);
                generator.writeNumberField("type", gameObject.getType());
                generator.writeNumberField("d", gameObject.direction);
                generator.writeFieldName("oldPos");
                generator.writeNull();

                generator.writeFieldName("newPos");
                generator.writeStartObject();
                generator.writeNumberField("x", gameObject.xPos);
                generator.writeNumberField("y", gameObject.yPos);
                generator.writeEndObject();

                if(gameObject instanceof GamePlayer) {
                    generator.writeFieldName("actions");
                    generator.writeStartArray();
                    GamePlayer gamePlayer = (GamePlayer) gameObject;// incomeActions
                    for (Action action : gamePlayer.processedActions) {
                        generator.writeStartObject();
                        generator.writeNumberField("type", action.getId());
                        generator.writeNumberField("offset", action.getInvertedOffset());
                        List<Pair<String, String>> data = action.getActionData();
                        if (data != null) {
                            generator.writeFieldName("data");
                            generator.writeStartObject();
                            for (Pair<String, String> pair : data) {
                                generator.writeStringField(pair.getLeft(), pair.getRight());
                            }
                            //generator.writeFieldName("data");
                            //generator.writeFieldName("data");
                            generator.writeEndObject();
                        }
                        generator.writeEndObject();
                    }
                    generator.writeEndArray();
                }

                generator.writeEndObject();
            }
            generator.writeEndArray();

            generator.writeEndObject();
            generator.close();

            return outputWriter.toString();
        } catch (IOException e){
            e.printStackTrace();
            return ""; // TODO: implement return error
        }
    }

    public void dispatch(String generatedMessage) {
        if(generatedMessage.equals("")) {
            //System.out.println("Nothing to dispatch");
            return;
        }

        //System.out.println("dispatching ... ");

        try {
            for (WebSocketSession session : GameData.sessions.values()) {
                session.sendMessage(new TextMessage(generatedMessage));
            }
        } catch (IOException e){
            e.printStackTrace();
        }
    }

    public void run() {
        try {
            while(!t.isInterrupted()){
                //System.out.println("Dispatching state...");
                dispatch(generateMessage());

                synchronized(t){
                    t.wait();
                }
            }
        } catch (InterruptedException e) {
            t.interrupt();
        }
    }

    public void start() {
        System.out.println("Starting " +  threadName);
        if (t == null) {
            t = new Thread(this, threadName);
            t.start();
        }
    }

    public void interrupt() {
        if (t != null)
            t.interrupt();
    }
}
