package base;

import base.environment.Fireball;
import base.environment.GameObject;
import base.environment.GamePlayer;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketSession;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public final class GameData {
    static Map<String, WebSocketSession> sessions = new HashMap<>();
    static public Map<String, GamePlayer> players = new HashMap<>();
    static public ArrayList<GameObject> objects = new ArrayList<>();
    static public ArrayList<GameObject> objectsToRemove = new ArrayList<>();
    static public ArrayList<GamePlayer> spawnPool = new ArrayList<>();

    static public double worldH = 54;
    static public double worldW = 80;

    private GameData() {}

    static public boolean hasPlayer(String sid){
        return players.containsKey(sid);
    }

    static public GamePlayer getPlayer(String sid) {
        return players.get(sid);
    }

    static public void removePlayer(String sid) {
        GamePlayer player = players.remove(sid);
        if(!objects.remove(player))
            spawnPool.remove(player);
    }

    static public int spawnPlayer(String sid) {
        GamePlayer newPlayer = new GamePlayer(sid);
        spawnPool.add(newPlayer);
        return newPlayer.id;
    }

    static public void lunchFireball(double xPos, double yPos, int direction) {
        Fireball fireball = new Fireball();
        fireball.xPos = xPos;
        fireball.yPos = yPos;
        fireball.move(direction);
        objects.add(fireball);
    }

    static public void endSpawn(int index) {
        GamePlayer player = spawnPool.remove(index);
        objects.add(player);
        players.put(player.playerId, player);
    }

    static public void addSession(WebSocketSession session) {
        sessions.put(session.getId(), session);
    }

    static public void deleteSession(String sid) {

        sessions.remove(sid);
    }
}
