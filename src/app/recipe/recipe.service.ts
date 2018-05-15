import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Recipe } from './recipe';
import { Ingredient } from "../shared/ingredients";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
	new Recipe('VegCurry', 'Spicy', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1', [
		new Ingredient('Spices', 5),
		new Ingredient('tomato', 3) 
	]),
	new Recipe('Salad', 'loaded', 'http://assets.kraftfoods.com/recipe_images/opendeploy/89935_640x428.jpg', [])
	];
	
  constructor(private http: Http) { }

  getRecipes(){
		return this.recipes; 
	}
	
	getRecipe(id: number) {
		return this.recipes[id];
	}

	deleteRecipe(recipe: Recipe) {
		this.recipes.splice(this.recipes.indexOf(recipe), 1);
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
	}

	editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
		this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
	}

	storeData() {
		const body = JSON.stringify(this.recipes);
		const headers = new Headers({
			'content-type': 'application/json'
		});
		return this.http.post('https://recipebook-e3d1c.firebaseio.com/recipes.json',body,{headers: headers});
	}

	fetchData() {
		
	}
}
