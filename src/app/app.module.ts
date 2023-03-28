import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { LegendService, DataLabelService, TooltipService, CrosshairService } from '@syncfusion/ej2-angular-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [ DateTimeService, LineSeriesService, LegendService, DataLabelService,
    TooltipService, CrosshairService],
  bootstrap: [AppComponent]
})
export class AppModule { }
