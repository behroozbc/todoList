import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  ItemForm: FormGroup;
  constructor(fb: FormBuilder, private itemsSerivec: ItemsService, private router: Router) {
    this.ItemForm = fb.group({
      Name: ['', [Validators.required]],
      priority: [2, [Validators.required]]
    });
  }
  submitHandler() {
    this.itemsSerivec.create({ Name: this.ItemForm.controls.Name.value, priority: +this.ItemForm.controls.priority.value, isPin: false });
    this.router.navigate([''])
  }
  ngOnInit(): void {
  }

}
