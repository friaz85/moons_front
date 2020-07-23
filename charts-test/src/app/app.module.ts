import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ChartRevenue } from "../app/charts/chart-renvenue.component";
import { ChartImpresions } from "../app/charts/chart-impresions.component";
import { ChartVisits } from "../app/charts/chart-visits.component";

@NgModule({
  declarations: [AppComponent, ChartRevenue, ChartImpresions, ChartVisits],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
