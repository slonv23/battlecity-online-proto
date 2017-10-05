package base;

import org.springframework.stereotype.Component;
import org.springframework.context.ApplicationListener;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.ContextClosedEvent;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class AppListener implements ApplicationListener<ApplicationEvent> {
    @Autowired
    GameEngine gameEngine;

    @Autowired
    Dispatcher dispatcher;

    public void onApplicationEvent(ApplicationEvent event){
        if(event instanceof ContextRefreshedEvent){
            System.out.println("Starting server...");

            gameEngine.start();
            dispatcher.start();
        } else if(event instanceof ContextClosedEvent){
            System.out.println("Stopping server...");

            gameEngine.interrupt();
            dispatcher.interrupt();
        }
    }
}