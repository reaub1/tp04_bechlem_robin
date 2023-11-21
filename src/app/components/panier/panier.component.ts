// panier.component.ts

import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SupprimerProduit } from '../../state/panier.state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  produits: string[] = ['Produit 1', 'Produit 2', 'Produit 3']; // Ajoutez cette ligne

  constructor(private store: Store) {}

  supprimerProduit(produit: string) {
    this.store.dispatch(new SupprimerProduit(produit));
  }
}
