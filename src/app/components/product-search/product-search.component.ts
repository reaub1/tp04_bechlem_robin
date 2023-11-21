import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  searchTerm: string = '';
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  searchProducts() {
    if (this.searchTerm.trim() === '') {
      // Réinitialisez la liste des produits si le terme de recherche est vide
      this.filteredProducts = [];
      return;
    }

    this.productService.getProducts().subscribe((products) => {
      // Effectuez la recherche dans la liste complète des produits
      this.filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }
}
