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
    const baseCost = 315;
    return Math.round(
      this.adults * baseCost +
        (this.assisted * baseCost * 25) / 100 +
        (this.elderly * baseCost * 75) / 100 +
        (this.youngs * baseCost * 0) / 100 +
        ((this.hiring * this.hiringDiscounts["" + year]) / 100) * baseCost
    );
  }
  sumPerHeadAndArea(year: number): number {
    const baseCost = 254;
    return Math.round(
      this.adults * baseCost +
        (this.assisted * baseCost * 0) / 100 +
        (this.elderly * baseCost * 70) / 100 +
        (this.youngs * baseCost * 0) / 100 +
        (this.hasArea ? baseCost / 2 : 0) +
        ((this.hiring * 100) / 100) * baseCost
    );
  }

  sumPerHeadAndAreaWithDiscount(year: number): number {
    const baseCost = 254;
    return Math.round(
      this.adults * baseCost +
        (this.assisted * baseCost * 0) / 100 +
        (this.elderly * baseCost * 70) / 100 +
        (this.youngs * baseCost * 0) / 100 +
        (this.hasArea ? baseCost / 2 : 0) +
        ((this.hiring * this.hiringDiscounts["" + year]) / 100) * baseCost
    );
  }
}
