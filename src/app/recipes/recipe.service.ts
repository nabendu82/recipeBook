import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Hyderabadi Biryani',
            'A really tasty hyderabadi biryani',
            'https://www.maggime.com/sites/default/files/recipes/en/Chicken-Biryani.jpg',
            [new Ingredient('Meat', 1), new Ingredient('Rice', 2)]),
        new Recipe(
            'Beharoz Biryani',
            'A tasty secret biryani for which a war was fought',
            'https://b.zmtcdn.com/data/pictures/chains/6/18365226/526d9d73cdaf6700c056f48af5429de5_featured_v2.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A',
            [new Ingredient('Chicken', 1), new Ingredient('Rice', 3)])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}