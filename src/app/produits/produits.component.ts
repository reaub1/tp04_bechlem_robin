import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CatalogueService } from '../catalogue/catalogue.service';
import { Produit } from '../shared/models/produit';
import { AddPanier } from '../shared/actions/panier-action';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  providers: [CatalogueService],
})
export class ProduitsComponent implements OnInit {
  recherche: string = '';
  produits$: Observable<Produit[]>;

  constructor(private catalogueService: CatalogueService, private store: Store) {
    this.produits$ = this.catalogueService.getProduits();
  }

  ngOnInit() {}

  addPanier(p:Produit) {

    this.store.dispatch(new AddPanier(p));
  }  
}
  
