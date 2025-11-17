import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRecipeDetail(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(this.apiUrl + '/' + id);
  }




}
