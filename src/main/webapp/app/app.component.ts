import { Component } from '@angular/core';
import { $WebSocket } from 'angular2-websocket/angular2-websocket';

@Component({
  selector: 'my-app',
  template: `
	Counter Value 123 is ---: {{counter}}
	<button type="button" (click)="subscribe($event)">Subscribe to WebSocket</button>
	`
})
export class AppComponent {

  counter: string = 'not known';
  ws: any;
  targetUrl: string = window.location.href.replace('http', 'ws') + 'counter'


  constructor() {
    this.ws = new $WebSocket(this.targetUrl);
  }

  subscribe($event) {
    console.log("trying to subscribe to ws");
    this.ws = new $WebSocket(this.targetUrl);

    this.ws.send("Mario Petrovic is the BOSS");
    this.ws.getDataStream().subscribe(
      res => {
        var count = JSON.parse(res.data).value;
        console.log('Got: ' + count);
        this.counter = count;
      },
      function (e) { console.log('Error: ' + e.message); },
      function () { console.log('Completed'); }
    );
  }
}


