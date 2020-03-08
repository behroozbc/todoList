import { Component, OnInit, Input } from '@angular/core';
import { IItem } from '../IItem';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-done-btn',
  templateUrl: './done-btn.component.html',
  styleUrls: ['./done-btn.component.scss']
})
export class DoneBtnComponent implements OnInit {

  @Input() item: IItem;
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }
  doneHandler() {
    this.itemsService.doneItem(this.item);
  }
  notDoneHandler(){
    this.itemsService.notDoneItem(this.item)
  }
}
