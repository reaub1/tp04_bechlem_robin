import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';

import { NgxsModule } from '@ngxs/store';

import { BrowserModule } from '@angular/platform-browser';
import { CatalogueModule } from './catalogue/catalogue.module';
import { PanierComponent } from './panier/panier.component';
import { StoreModule } from '@ngrx/store';
import { PanierState } from './shared/states/panier-state';

@NgModule({
  imports: [BrowserModule, CatalogueModule, NgxsModule.forRoot([PanierState])],
  declarations: [RootComponent, TetiereComponent, FooterComponent, PanierComponent],
  bootstrap: [RootComponent],
})

export class AppModule {}
