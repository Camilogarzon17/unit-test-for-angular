import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';

import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAllSimple().subscribe((products) => {
      this.products = products;
    });
  }

  getFirstImage(images: string[]): string {
    // Verifica si hay imágenes y si hay al menos una imagen
    if (images && images.length > 0) {
      // Elimina los corchetes y comillas extra
      const imageUrl = images[0].replace(/[\[\]"]+/g, '');
      return imageUrl;
    }
    // Si no hay imágenes, devuelve una cadena vacía
    return '';
  }
}
