import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeServiceService } from '../recipe-service.service';  //traer el servicio para obtener recetas


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

  constructor(private recipeService: RecipeServiceService) {}

  getRecipesList(){
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  ngOnInit() {   //metodo que se ejecuta al iniciar el componente
    this.getRecipesList();
  }

  onSelect(recipe: Recipe) { //metodo para seleccionar una receta
    this.selectedRecipe = recipe;
    this.selected = true;
  }
}