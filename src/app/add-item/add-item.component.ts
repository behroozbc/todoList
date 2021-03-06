import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  ItemForm: FormGroup;
  constructor(fb: FormBuilder, private itemsSerivec: ItemsService, private router: Router) {
    this.ItemForm = fb.group({
      Name: ['', [Validators.required]],
      priority: [2, [Validators.required]],
      color:['red',[Validators.required]]
    });
  }
  submitHandler() {
    this.itemsSerivec.create({ Name: this.ItemForm.controls.Name.value,
       priority: +this.ItemForm.controls.priority.value,
       color:this.ItemForm.controls.color.value});
    this.router.navigate([''])
  }

}
