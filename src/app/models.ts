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

export declare interface WidgetBase {
  _data: any;
  data(data: any);

  _toggle: any;
  toggle(toogle: any): any;

}
