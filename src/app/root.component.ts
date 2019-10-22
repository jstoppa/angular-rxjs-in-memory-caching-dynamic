import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from './api.service';
import { WidgetConfig } from './models';

@Component({
  selector: 'my-app',
  template: `
    <button (click)="getAllItems(false)">Refresh ALL Data from Cache</button>
    <button (click)="getAllItems(true)">Refresh ALL Data from Server</button>
    <div *ngFor="let widget of widgets">
      <div class="widget">
        <container [data]="bsubs[widget] | async" [widgetConfig]="widget"></container>
        <button (click)="getItems(widget?.id, false)">Refresh Data from Cache</button>
        <button (click)="getItem(widget?.id, true)">Refresh Data from Server</button>
      </div>
    </div>
  `,
  styleUrls: ['./root.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootComponent implements AfterViewInit  {
  widgets = [
  {
    apiId: 1,
    widgetName: 'WidgetOneComponent'
  },
  {
    apiId: 1,
    widgetName: 'WidgetTwoComponent'
  },
  {
    apiId: 2,
    widgetName: 'WidgetOneComponent'
  },
  {
    apiId: 3,
    widgetName: 'WidgetTwoComponent'
  },
  {
    apiId: 4,
    widgetName: 'WidgetOneComponent'
  },
  {
    apiId: 4,
    widgetName: 'WidgetTwoComponent'
  }] as WidgetConfig[];

   
  bsubs = this.apiService.getSubjects(this.widgets.map( ({apiId}) => apiId));
  
  constructor(private apiService: ApiService ){}

  ngAfterViewInit() { 
    this.getAllItems(true);
  }

  getAllItems(forceRefreshFromServer: boolean) {
    this.getItems(this.widgets.map( ({apiId}) => apiId), true);
  }
  
  getItems(apiIds: number[], forceRefreshFromServer: boolean) {
    this.apiService.getItems(apiIds, forceRefreshFromServer);  
  }

}
