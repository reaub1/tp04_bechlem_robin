import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { PanierComponent } from './components/panier/panier.component';

const routes: Routes = [
    { path: 'catalog', component: ProductListComponent },
    { path: 'search', component: ProductSearchComponent },
    { path: 'panier', component: PanierComponent },
    { path: '', redirectTo: '/catalog', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
