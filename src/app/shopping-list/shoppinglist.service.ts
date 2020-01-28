import {Ingredient} from '../shared/ingredients.model';
import {Subject} from 'rxjs';
//import{EventEmitter, Injectable} from'@angular/core';

//@Injectable()
export class ShoppingListService{
    //ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredientChanged = new Subject<Ingredient[]>();
    private ingredients:Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatos',10)
    
      ]

    getIngredient(){
        return this.ingredients.slice();
    }
    //emit the event

    
    addIngredients(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        //this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredientsfromRecipeService(ingredients:Ingredient[]){
        //too many emit
        // for(let ingredient of ingredients){
        //     this.addIngredients(ingredient);
        // }

        this.ingredients.push(...ingredients);
    
        //this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());


    }

}