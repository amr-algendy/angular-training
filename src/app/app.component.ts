import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  oddArr: number[] = [];
  evenArr: number[] = [];

  OnTick(event) {
    event.counter % 2 === 0
      ? this.evenArr.push(event.counter)
      : this.oddArr.push(event.counter);
  }
}
