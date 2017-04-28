"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_websocket_1 = require('angular2-websocket/angular2-websocket');
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 'not known';
        this.targetUrl = window.location.href.replace('http', 'ws') + 'counter';
        this.ws = new angular2_websocket_1.$WebSocket(this.targetUrl);
    }
    AppComponent.prototype.subscribe = function ($event) {
        var _this = this;
        console.log("trying to subscribe to ws");
        this.ws = new angular2_websocket_1.$WebSocket(this.targetUrl);
        this.ws.send("Mario Petrovic is the BOSS");
        this.ws.getDataStream().subscribe(function (res) {
            var count = JSON.parse(res.data).value;
            console.log('Got: ' + count);
            _this.counter = count;
        }, function (e) { console.log('Error: ' + e.message); }, function () { console.log('Completed'); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\tCounter Value 123 is ---: {{counter}}\n\t<button type=\"button\" (click)=\"subscribe($event)\">Subscribe to WebSocket</button>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map