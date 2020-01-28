import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
import{ShoppingListService} from './shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[];
  private igchangesub:Subscription;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredient();
    this.igchangesub= this.slService.ingredientChanged.subscribe(
      (ingredients:Ingredient[])=>{this.ingredients = ingredients;}
    )
  }

  ngOnDestroy(){
    this.igchangesub.unsubscribe();
  }
}
