import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  private apiUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.apiUrl + '/recipe.json');

  }
 
  getRecipesById(id: number): Observable<Recipe>{
    return this.http.get<Recipe>(this.apiUrl + '/' + id + '/recipe.json');
  }

}



