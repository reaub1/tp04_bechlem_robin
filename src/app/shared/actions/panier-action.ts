import { Produit } from '../models/produit';

export class AddPanier {
  static readonly type = '[Produit] Add';

  constructor(public payload: Produit) {}
}

export class DelPanier {
  static readonly type = '[Produit] Del';

  constructor(public payload: Produit) {}
}
