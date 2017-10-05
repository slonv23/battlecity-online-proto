package base;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import org.springframework.web.socket.CloseStatus;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;

public class WebSocketHandler extends TextWebSocketHandler {
    @Autowired
    RequestProcessor requestProcessor;

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage textMessage) throws IOException {
        requestProcessor.processMessage(session, textMessage.getPayload());
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws IOException {
        requestProcessor.onConnect(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status){
        requestProcessor.onDisconnect(session);
    }
}