import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from './recipe/recipe.service';
import { ShoppingListService } from './shopping-list';
import { routing } from './app.routing';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    ShoppingListModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
