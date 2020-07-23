import { Component, OnDestroy } from "@angular/core";
import { impresions } from "./data";

@Component({
  selector: "chart-impresions",
  template: `
    <ngx-charts-advanced-pie-chart [results]="single" [gradient]="true">
    </ngx-charts-advanced-pie-chart>
  `,
})
export class ChartImpresions {
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
    Object.assign(this, { impresions });
    this.single = impresions;
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
