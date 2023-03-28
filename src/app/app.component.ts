import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public primaryXAxis!: Object;
  public primaryYAxis!: Object;
  public chartData!: Object[];
  public crosshair!: Object;
  public title!: string;
  public tooltip!: Object;
  public marker!: Object;
  ngOnInit(): void {
      this.chartData = [
          { x: new Date(2000 , 2, 11), y: 11, y1: 11, y2: 11, y3: 11, y4: 11 },
          { x: new Date(2001, 9, 14), y: 20, y1: 30, y2: 55, y3: 75, y4: 83 },
          { x: new Date(2002, 2, 11), y: 25, y1: 28, y2: 48, y3: 68, y4: 85 },
          { x: new Date(2003, 9, 16), y: 21, y1: 35, y2: 57, y3: 75, y4: 87 },
          { x: new Date(2004, 2, 7), y: 13, y1: 39, y2: 62, y3: 71, y4: 82 },
          { x: new Date(2005, 9, 7), y: 18, y1: 41, y2: 64, y3: 69, y4: 74 },
          { x: new Date(2006, 2, 11), y: 24, y1: 45, y2: 57, y3: 81, y4: 73 },
          { x: new Date(2007, 9, 14), y: 23, y1: 48, y2: 53, y3: 84, y4: 75 },
          { x: new Date(2008, 2, 6), y: 19, y1: 54, y2: 63, y3: 85, y4: 73 },
          { x: new Date(2009, 9, 6), y: 31, y1: 55, y2: 50, y3: 87, y4: 60 },
          { x: new Date(2010, 2, 11), y: 39, y1: 57, y2: 66, y3: 75, y4: 48 },
          { x: new Date(2011, 9, 11), y: 50, y1: 60, y2: 65, y3: 70, y4: 55 },
          { x: new Date(2012, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
          { x: new Date(2013, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
          { x: new Date(2014, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
          { x: new Date(2015, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
          { x: new Date(2016, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
          { x: new Date(2017, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
          { x: new Date(2018, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
          { x: new Date(2019, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
          { x: new Date(2020, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
          { x: new Date(2021, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
          { x: new Date(2022, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
          { x: new Date(2023, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },

      ];
      this.primaryXAxis = {
          title: 'Years',
          minimum: new Date(2000, 1, 1), maximum: new Date(2023, 2, 11),
          intervalType: 'Years',
          valueType: 'DateTime',
      };
      this.tooltip = { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' };
      this.crosshair = { enable: true, lineType: 'Vertical' };
      this.marker = { visible: true };
      this.title = 'Average Sales per Person';
  }

}






