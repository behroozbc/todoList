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
    this.items.sort((itemA, ItemB) => itemA.priority - ItemB.priority)
    this.items.sort((itemA, ItemB) => (itemA.isPin === ItemB.isPin)? 0 : itemA.isPin? -1 : 1);
    console.log(this.items);
    return this.items;
  }
  pinItem(item:IItem){
    this.items.find(i => i.Name == item.Name && item.priority == i.priority).isPin=true;
  }
  unPinItem(item:IItem){
    this.items.find(i => i.Name == item.Name && item.priority == i.priority).isPin=false;
  }
}
