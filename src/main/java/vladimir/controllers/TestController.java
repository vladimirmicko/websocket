package vladimir.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/rest", produces = "application/json; charset=UTF-8")
public class TestController {

	@RequestMapping(value = "/test", method = RequestMethod.GET, consumes = {MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<String> test() {
		return new ResponseEntity<String>("OK", HttpStatus.OK);
	}
	
}