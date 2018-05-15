import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {  ReactiveFormsModule } from '@angular/forms';

import { RecipeComponent } from "./recipe.component";
import { RecipeStartComponent } from "./recipe-start.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item.component";
import { recipeRouting } from "./recipe.routing";


@NgModule({
    declarations: [
    RecipeComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent
],
    imports:[ReactiveFormsModule, CommonModule, recipeRouting]
})

export class RecipeModule {}