import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { IItem } from '../IItem';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  items: IItem[];
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items = this.itemsService.getItems();
    this.items.sort((itemA, ItemB) => itemA.priority - ItemB.priority)
  }

}
