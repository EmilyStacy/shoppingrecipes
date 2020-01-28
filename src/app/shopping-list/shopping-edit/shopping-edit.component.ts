import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';
import{ShoppingListService} from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// @Output()shoppingEditForm = new EventEmitter<Ingredient>();
 @ViewChild('nameInput',{static:true}) nameInput:ElementRef;
 @ViewChild('amountInput', {static:true}) amountInput:ElementRef;
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }
  onAddIngredient(){
    
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name,amount);
    this.slService.addIngredients(newIngredient);
    // this.shoppingEditForm.emit(newIngredient);
  }
}
