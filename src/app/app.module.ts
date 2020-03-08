import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { PriorityPipe } from './priority.pipe';
import { PinBtnComponent } from './pin-btn/pin-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ItemsListComponent,
    PriorityPipe,
    PinBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
