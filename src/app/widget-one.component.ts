import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Data, WidgetBase } from './models';
import { ApiService } from './api.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'widget-one',
  template: `
    <div>
        <span><strong>Id:</strong> Widget One</span>
        <span><strong>Id:</strong> {{ _data?.id }}</span>
        <p><strong>Data:</strong> {{ _data?.title }}</p>
        <button (click)="getItem(_data?.id, false)">Refresh Data from Cache</button>
        <button (click)="getItem(_data?.id, true)">Refresh Data from Server</button>
    </div>
  `,
  styleUrls: ['./widget-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetOneComponent implements WidgetBase {
  _data: any;
  _toogle: any;
  constructor(private hostElement: ElementRef, private apiService: ApiService ){}

  @Input()
  set data(data: any) {
    if (data && data.id && this.hostElement && this.hostElement.nativeElement) {
      this.hostElement.nativeElement.firstElementChild.style.backgroundColor = 'pink';
      setTimeout(() => {
        this.hostElement.nativeElement.firstElementChild.style.backgroundColor = 'aquamarine';
      }, 500);
    }
    this._data = data;
  }

  @Input()
  set toogle(toogle: any) {

  }

  getItem(id, forceRefreshFromServer) {
    this.apiService.getItems([id], forceRefreshFromServer);  
  }
}
