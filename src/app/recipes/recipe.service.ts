import {Recipe} from './recipe.model';
//import {Subject} from 'rxjs';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
import{ShoppingListService} from '../shopping-list/shoppinglist.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    //recipeSelected = new Subject<Recipe>();
    ingredientSelected = new EventEmitter<Ingredient>();
    //ingredientSelected = new Subject<Ingredient>();
    
    constructor(private slService:ShoppingListService){

    }
    private recipes: Recipe[] = [
        new Recipe('Test','This is a test','https://freesvg.org/img/RecipeBook.png',
        [new Ingredient('test',1),new Ingredient('test2',2)]
        ),
        new Recipe('Chicken','This is a chicken dish','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [new Ingredient('chicken',1), new Ingredient('cilentro',1)]),
      
      ]

    getRecipes(){
        //get an copy
        return this.recipes.slice();
    }

    addToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredientsfromRecipeService(ingredients);
    }

}