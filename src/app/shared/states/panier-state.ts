import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { AddPanier, DelPanier } from '../actions/panier-action';
import { PanierStateModel } from './panier-state-model';
import { Produit } from '../models/produit';
@State<PanierStateModel>({
  name: 'produits',
  defaults: {
    produits: [],
  },
})
@Injectable()
export class PanierState {
  @Selector()
  static getNbProduits(state: PanierStateModel) {
    return state.produits??[].length;
  }

  @Selector()
  static getListeProduits(state: PanierStateModel) {
    return state.produits;
  }

  @Action(AddPanier)
  add(
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: AddPanier
  ) {
    const state = getState();
    patchState({
      produits: [...state.produits??[], payload],
    });
  }

  @Action(DelPanier)
  del(
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: DelPanier
  ) {
    const state = getState();
    console.log("AMONG US ඞ");


    patchState({
      produits: (state.produits??[]).filter(
        (x:Produit) => !(payload.ref == x.ref)
        
      ),
    });
  }
}
