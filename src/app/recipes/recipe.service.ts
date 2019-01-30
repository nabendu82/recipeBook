import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

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

    addIngToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}