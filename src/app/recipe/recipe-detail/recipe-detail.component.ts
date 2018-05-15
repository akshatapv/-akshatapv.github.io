import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingListService } from "../../shopping-list";
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'mp-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  private subscription: Subscription;
  private recipeIndex: number;

  constructor(private sls: ShoppingListService, 
              private router: Router,
              private route: ActivatedRoute,
              private recipeService: RecipeService
            ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        this.recipeIndex = param['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/recipe', this.recipeIndex,'edit']);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipe']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddToShoppingList(){
	this.sls.addItems(this.selectedRecipe.ingredients);
  }
}
