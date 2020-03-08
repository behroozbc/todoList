import { Component, Input } from '@angular/core';
import { IItem } from '../IItem';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-pin-btn',
  templateUrl: './pin-btn.component.html',
  styleUrls: ['./pin-btn.component.scss']
})
export class PinBtnComponent {
  @Input() item: IItem;
  constructor(private itemsService: ItemsService) { }

  pinHandler() {
    this.itemsService.pinItem(this.item);
  }
  unPinHandler() {
    this.itemsService.unPinItem(this.item);
  }
}
