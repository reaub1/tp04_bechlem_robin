import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Produit } from '../shared/models/produit';
import { DelPanier } from '../shared/actions/panier-action';
import { PanierState } from '../shared/states/panier-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{
  constructor(private store: Store) {}

  @Select(PanierState.getListeProduits) liste$!: Observable<Produit[]>;
  ngOnInit() {}

  delPanier(p: Produit): void {
    this.store.dispatch(new DelPanier(p));
  }
}
