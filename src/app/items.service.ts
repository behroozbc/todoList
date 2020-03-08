import { Injectable } from '@angular/core';
import { IItem } from './IItem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: IItem[];
  constructor() {
    this.items = [];
  }
  create(item: IItem) {
    this.items.push(item)
  }
  getItems(){
    console.log(this.items);
    
    return this.items;
  }
}
