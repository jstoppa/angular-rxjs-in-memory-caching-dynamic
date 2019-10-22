import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Data, WidgetBase, Toggle } from './models';
import { ApiService } from './api.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'widget-two',
  template: `
    <p><strong> WIDGET TWO </strong></p>
    <span><strong>Id:</strong> {{ data?.id }}</span>
    <p><strong>Data:</strong> {{ data?.title }}</p>
  `,
  styleUrls: ['./widget-two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetTwoComponent implements WidgetBase  {
  _data: Data;
  _toggle: Toggle;
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
  
  getItem(id, forceRefreshFromServer) {
    this.apiService.getItems([id], forceRefreshFromServer);  
  }
}
