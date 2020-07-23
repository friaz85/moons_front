import { Component, OnDestroy } from "@angular/core";
import { visits } from "./data";

@Component({
  selector: "chart-visits",
  template: `
    <ngx-charts-advanced-pie-chart
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="true"
    >
    </ngx-charts-advanced-pie-chart>
  `,
})
export class ChartVisits {
  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  };

  constructor() {
    Object.assign(this, { visits });
    this.single = visits;
  }

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }
}
