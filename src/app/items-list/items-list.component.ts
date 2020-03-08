import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { IItem } from '../IItem';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  colorOption = new FormControl('red');
  constructor(public itemsService: ItemsService) { }
  filterHandler() {
    this.itemsService.colorFilter(this.colorOption.value);
  }
  clearFilterHandler(){
    this.itemsService.colorFilter(null);
  }
}
