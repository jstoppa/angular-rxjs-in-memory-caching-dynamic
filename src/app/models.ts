import { BehaviorSubject } from 'rxjs';
import { Input } from '@angular/core';

export declare interface BehaviorSubjectObject {
  [key: string]: BehaviorSubject<Data>;
}

export declare interface DataCache {
  [key: string]: Data;
}

export interface Data {
  id: number;
  title: string;
}

export interface Toggle {
  id: number;
  title: string;
}

export declare interface WidgetBase {
  componentName: string;
  _data: any;
  _toggle: any;
  
  data(data: any);
  toggle(toogle: any);
}

export interface WidgetConfig {
  apiId: number,
  widgetName: string
}
