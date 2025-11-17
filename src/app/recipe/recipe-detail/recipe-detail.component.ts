import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeServiceService } from '../recipe-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  id !: number;
  @Input() recipe!: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeServiceService) {}

  getRecipe(){
    this.recipeService.getRecipeDetail(this.id).subscribe((recipe) => {
      this.recipe = recipe;
    });
  }

  getIngredienteMasUsado(){
    var mayor = 0;
    var ingredienteMasUsado = "";
    for(var ingrediente of this.recipe.ingredientes){
      if(Number(ingrediente.cantidad) > mayor){
        mayor = Number(ingrediente.cantidad);
        ingredienteMasUsado = ingrediente.nombre;
      }
    }
    return ingredienteMasUsado;
  }
  
  ngOnInit(): void {
    if(this.recipe == undefined){
      this.id = Number(this.activatedRoute.snapshot.paramMap.get('id')!);
      if(this.id){
          this.getRecipe();
      }
    }
  }
}
