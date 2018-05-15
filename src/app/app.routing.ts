import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const APP_ROUTES: Routes = [
    { path:'recipe', loadChildren: 'app/recipe/recipe.module#RecipeModule'},
    { path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule'},
    { path: '', component: HomeComponent }
    
];

export const routing = RouterModule.forRoot(APP_ROUTES);
