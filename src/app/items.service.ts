import { Injectable } from '@angular/core';
import { IItem } from './IItem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: IItem[];
  constructor() {
    let request= indexedDB.open('toDoList');
    this.items = [];
    
  }
  create(item: IItem) {
    item.done = false;
    item.isPin = false;
    this.items.push(item);
  }
  getItems() {
    this.items
      .sort((itemA, ItemB) => itemA.priority - ItemB.priority)
      .sort((itemA, ItemB) => (itemA.done === ItemB.done) ? 0 : itemA.done ? 1 : -1)
      .sort((itemA, ItemB) => (itemA.isPin === ItemB.isPin) ? 0 : itemA.isPin ? -1 : 1);
    return this.items;
  }
  pinItem(item: IItem) {
    this.items.find(i => i.Name == item.Name && item.priority == i.priority).isPin = true;
  }
  unPinItem(item: IItem) {
    this.items.find(i => i.Name == item.Name && item.priority == i.priority).isPin = false;
  }
  doneItem(item: IItem) {
    this.items.find(i => i.Name == item.Name && item.priority == i.priority).done = true;
  }
  notDoneItem(item: IItem) {
    this.items.find(i => i.Name == item.Name && item.priority == i.priority).done = false;
  }
}
