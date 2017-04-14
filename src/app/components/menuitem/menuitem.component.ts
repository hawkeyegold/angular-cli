import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css'],
  inputs: ['itemName']
})
export class MenuItemComponent implements OnInit{
  @Input() itemName: string;
  name: string = "";
  constructor() { this.itemName = "MenuItem"; }

  public click(event:Event):void {
    alert(event.srcElement.innerHTML);
  }

  ngOnInit(){ }
}
