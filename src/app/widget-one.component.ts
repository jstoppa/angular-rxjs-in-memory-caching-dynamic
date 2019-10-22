import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Data, WidgetBase, Toggle } from './models';
import { ApiService } from './api.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'widget-one',
  template: `
    <div>
        <p><strong> WIDGET ONE </strong></p>
        <span><strong>Id:</strong> {{ _data?.id }}</span>
        <p><strong>Data:</strong> {{ _data?.title }}</p>

    </div>
  `,
  styleUrls: ['./widget-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetOneComponent implements WidgetBase {
  componentName = 'WidgetOneComponent';
  _data: Data;
  _toggle: Toggle;

  constructor(private hostElement: ElementRef){}

  @Input()
  set data(data: any) {
    if (data && data.id && this.hostElement && this.hostElement.nativeElement) {
      this.hostElement.nativeElement.firstElementChild.style.backgroundColor = 'pink';
      setTimeout(() => {
        this.hostElement.nativeElement.firstElementChild.style.backgroundColor = 'aquamarine';
      }, 500);
    }
    this._data = data as Data;
  }

  @Input()
  set toggle(toggle: any) {
    this._toggle = toggle as Toggle;
  }
}
