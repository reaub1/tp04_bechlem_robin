// panier.state.ts

import { State, Action, StateContext, Selector } from '@ngxs/store';

// Définition des actions
export class AjouterProduit {
  static readonly type = '[Panier] Ajouter Produit';
  constructor(public produit: string) {}
}

export class SupprimerProduit {
  static readonly type = '[Panier] Supprimer Produit';
  constructor(public produit: string) {}
}

// Définition du state
@State<string[]>({
  name: 'panier',
  defaults: []
})
export class PanierState {

  // Sélecteur pour obtenir la liste des produits dans le panier
  @Selector()
  static produits(state: string[]): string[] {
    return state;
  }

  // Gestion de l'action d'ajout de produit
  @Action(AjouterProduit)
  ajouterProduit(ctx: StateContext<string[]>, action: AjouterProduit) {
    const state = ctx.getState();
    ctx.setState([...state, action.produit]);
  }

  // Gestion de l'action de suppression de produit
  @Action(SupprimerProduit)
  supprimerProduit(ctx: StateContext<string[]>, action: SupprimerProduit) {
    const state = ctx.getState();
    const index = state.indexOf(action.produit);
    if (index !== -1) {
      state.splice(index, 1);
      ctx.setState([...state]);
    }
  }
}
