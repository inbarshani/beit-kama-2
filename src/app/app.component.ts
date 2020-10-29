import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  hasArea: boolean = true;
  adults: number = 1;
  assisted: number = 0;
  elderly: number = 0;
  youngs: number = 0;
  hiring: number = 0;

  hiringDiscounts = {
    "2021": 53,
    "2022": 68,
    "2023": 83,
    "2024": 100
  };

  sumPerHead(year: number): number {
    return Math.round(
      this.adults * 314 +
        (this.assisted * 314 * 25) / 100 +
        (this.elderly * 314 * 75) / 100 +
        (this.youngs * 314 * 0) / 100 +
        ((this.hiring * this.hiringDiscounts["" + year]) / 100) * 314
    );
  }
  sumPerHeadAndArea(year: number): number {
    return Math.round(
      this.adults * 257 +
        (this.assisted * 257 * 0) / 100 +
        (this.elderly * 257 * 50) / 100 +
        (this.youngs * 257 * 0) / 100 +
        (this.hasArea ? 128 : 0) +
        ((this.hiring * this.hiringDiscounts["" + year]) / 100) * 257
    );
  }
}
