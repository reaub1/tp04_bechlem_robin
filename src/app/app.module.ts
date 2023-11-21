import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { FormsModule } from '@angular/forms';
import { PanierComponent } from './components/panier/panier.component';

@NgModule({
    declarations: [AppComponent, ProductListComponent, ProductSearchComponent, PanierComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule,FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
