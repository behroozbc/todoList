import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemsListComponent } from './items-list/items-list.component';


const routes: Routes = [
  {
    path:'',
    component:ItemsListComponent
  },
  {
    path:'addItem',
    component:AddItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
