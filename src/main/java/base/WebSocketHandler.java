package base;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import org.springframework.web.socket.CloseStatus;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;

public class WebSocketHandler extends TextWebSocketHandler {
    /*@Autowired
    DataModel dataModel;

    @Autowired
    MessageProcessor messageProcessor;*/

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage textMessage) throws IOException {
        //String testMessage = textMessage.getPayload();
        session.sendMessage(textMessage);
        //messageProcessor.processMessage(session, testMessage);
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws IOException {
        System.out.println("Connected");
        String sid = session.getId();
        //session.sendMessage(new TextMessage(sid));
        //messageProcessor.sendSessionData(session);
        //dataModel.sessions.put(session.getId(), session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status){
        System.out.println("remove player");
        //dataModel.removePlayer(session.getId());
    }
}