import { Component, Input, AfterViewInit, ChangeDetectionStrategy,
ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetConfig } from './models';

@Component({
  selector: 'container',
  template: `
    <ng-container #target></ng-container>
  `,
  styleUrls: ['./container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements AfterViewInit  {
  @ViewChild('target', { read: ViewContainerRef, static: true }) target: ViewContainerRef;
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef
  ){}

  @Input() widgetConfig: WidgetConfig;
  @Input() data: any;

  ngAfterViewInit() { 
    var factories = Array.from(this.componentFactoryResolver['_factories'].keys());
    var type = <Type<Component>>factories.find((x: any) => x.componentName === this.widgetConfig.widgetName);

    let factory = this.componentFactoryResolver.resolveComponentFactory(type);

    let comp = this.vcRef.createComponent(factory);
    (<any>comp).instance.data = this.data;

    this.target.insert(comp.hostView);
  }
}
