package vladimir.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.socket.WebSocketSession;

import vladimir.websocket.CounterHandler;


@RestController
@RequestMapping(value = "/rest", produces = "application/json; charset=UTF-8")
public class TestController {
    
    @Autowired
    private CounterHandler counterHandler;

    @RequestMapping(value = "/test", method = RequestMethod.GET, consumes = {MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<String> test() {
        return new ResponseEntity<String>("OK", HttpStatus.OK);
    }
    
    @RequestMapping(value = "/session", method = RequestMethod.GET)
    public ResponseEntity<String> session() {
        CounterHandler a = counterHandler;
        return new ResponseEntity<String>("Session id: "+counterHandler.getSession().getId(), HttpStatus.OK);
    }
    
    @RequestMapping(value = "/sessionList", method = RequestMethod.GET)
    public ResponseEntity<List<String>> sessionList() {
        List lista = new ArrayList();
        for(WebSocketSession ws : counterHandler.getSessionList()){
            lista.add("Session id: " + ws.getId());
        }
        return new ResponseEntity<List<String>>(lista, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/changeSession/{sessionId}", method = RequestMethod.GET)
    public ResponseEntity<String> changeSession(@PathVariable(value = "sessionId") Integer sessionId) {
        counterHandler.setSession(counterHandler.getSessionList().get(sessionId));
        return new ResponseEntity<String>("Session id: "+counterHandler.getSession().getId(), HttpStatus.OK);
    }
    
}
