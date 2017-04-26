import { Component } from '@angular/core';
import {$WebSocket} from './angular2-websocket';

@Component({
  selector: 'my-app',
  template: `
	Counter Value is ---: {{counter}}
	<button type="button" (click)="subscribe($event)">Subscribe to WebSocket</button>
	`
})
export class AppComponent {

  counter: string = 'not known';
  ws: $Websocket;
  constructor() {
        this.ws = new $WebSocket("ws://192.168.60.18:8091/websocket/counter");

  }

  subscribe($event) {
    console.log("trying to subscribe to ws");
        this.ws = new $WebSocket("ws://192.168.60.18:8091/websocket/counter");

    this.ws.send("Hello");
    this.ws.getDataStream().subscribe(
      res => {
        var count = JSON.parse(res.data).value;
        console.log('Got: ' + count);
        this.counter = count;
      },
      function(e) { console.log('Error: ' + e.message); },
      function() { console.log('Completed'); }
    );
  }
}


