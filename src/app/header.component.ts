import { Component } from '@angular/core';
import { RecipeService } from './recipe/recipe.service';

@Component({
  selector: 'mp-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { }

  onStore() {
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onFetch() {

  }

}
