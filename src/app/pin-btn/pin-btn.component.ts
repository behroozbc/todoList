import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from '../IItem';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-pin-btn',
  templateUrl: './pin-btn.component.html',
  styleUrls: ['./pin-btn.component.scss']
})
export class PinBtnComponent implements OnInit {
  @Input() item: IItem;
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }
  pinHandler() {
    this.itemsService.pinItem(this.item);
  }
  unPinHandler() {
    this.itemsService.unPinItem(this.item);
  }
}
