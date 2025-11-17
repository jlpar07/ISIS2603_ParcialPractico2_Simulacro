import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { recipeData } from '../recipeData';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  selected: Boolean = false;
  selectedRecipe!: Recipe;

  constructor(private RecipeService: RecipeServiceService) {}

  getRecipesList(){
    this.RecipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  ngOnInit() {
    this.getRecipesList();
  }

  onSelect(recipe: Recipe) {
    this.selected = true;
    this.selectedRecipe = recipe;
  }
}
