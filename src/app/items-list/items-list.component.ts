import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { IItem } from '../IItem';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  constructor(public itemsService: ItemsService) { }



}
