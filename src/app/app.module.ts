import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';

import { NgxsModule } from '@ngxs/store';

import { BrowserModule } from '@angular/platform-browser';
import { CatalogueModule } from './catalogue/catalogue.module';
import { PanierComponent } from './panier/panier.component';
import { StoreModule } from '@ngrx/store';
import { PanierState } from './shared/states/panier-state';
import { ProduitsComponent } from './produits/produits.component';


import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProduitsComponent},
  { path: 'panier', component: PanierComponent},
  { path: 'produits', component: ProduitsComponent },
];

@NgModule({
  imports: [BrowserModule, CatalogueModule, NgxsModule.forRoot([PanierState]), RouterModule.forRoot(routes)],
  declarations: [AppComponent, TetiereComponent, FooterComponent, PanierComponent],
  bootstrap: [AppComponent],
})

export class AppModule {}
