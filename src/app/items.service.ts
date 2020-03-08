import { Injectable } from '@angular/core';
import { IItem } from './IItem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  totalItems: IItem[];
  items: IItem[];
  private _color: string;
  constructor() {
    this.totalItems = [];
    this.items = this.totalItems;

  }
  create(item: IItem) {
    item.done = false;
    item.isPin = false;
    this.totalItems.push(item);
  }
  getItems() {
    this.items = this.totalItems;
    this.items
      .sort((itemA, ItemB) => itemA.priority - ItemB.priority)
      .sort((itemA, ItemB) => (itemA.done === ItemB.done) ? 0 : itemA.done ? 1 : -1)
      .sort((itemA, ItemB) => (itemA.isPin === ItemB.isPin) ? 0 : itemA.isPin ? -1 : 1);
    if (this._color != null) {
      this.items = this.items.filter(i => i.color == this._color);
    }
    return this.items;
  }
  pinItem(item: IItem) {
    this.totalItems.find(i => i.Name == item.Name && item.priority == i.priority).isPin = true;
  }
  unPinItem(item: IItem) {
    this.totalItems.find(i => i.Name == item.Name && item.priority == i.priority).isPin = false;
  }
  doneItem(item: IItem) {
    this.totalItems.find(i => i.Name == item.Name && item.priority == i.priority).done = true;
  }
  notDoneItem(item: IItem) {
    this.totalItems.find(i => i.Name == item.Name && item.priority == i.priority).done = false;
  }
  colorFilter(color: string) {
    this._color = color;
  }
}
