import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  ref: number = 0;
  counter: number = 0;
  status: boolean = false;

  constructor() {}

  @Output() tick = new EventEmitter<{ counter: number }>();

  ngOnInit() {}

  OnStartGame() {
    if (this.status === false) {
      this.ref = setInterval(() => {
        this.tick.emit({ counter: this.counter });
        this.counter += 1;
      }, 1000);
      this.status = true;
    }
  }

  OnStopGame() {
    if (this.status === true) {
      clearInterval(this.ref);
      this.status = false;
    }
  }
}
