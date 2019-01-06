import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hyderabadi Biryani', 'A really tasty hyderabadi biryani','https://www.maggime.com/sites/default/files/recipes/en/Chicken-Biryani.jpg'),
    new Recipe('Beharoz Biryani', 'A tasty secret biryani for which a war was fought','https://b.zmtcdn.com/data/pictures/chains/6/18365226/526d9d73cdaf6700c056f48af5429de5_featured_v2.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A')
  ];

  constructor() { }

  ngOnInit() {
  }

}
