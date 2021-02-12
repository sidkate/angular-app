import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent implements OnInit {

  public newProduct = {
    title: '',
    img: '',
    price: ''
  };

  public newProductForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.newProductForm = new FormGroup({
      title: new FormControl(this.newProduct.title, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
      img: new FormControl(this.newProduct.img, [Validators.required]),
      price: new FormControl(this.newProduct.price, [Validators.required, Validators.pattern('[0-9]+$'), Validators.min(1)])
    });
  }

  get title() {
    return this.newProductForm.get('title');
  }

  get img() {
    return this.newProductForm.get('img');
  }

  get price() {
    return this.newProductForm.get('price');
  }

  createProduct(): void {
    this.productsService.createProduct({
      id: '', // empty string prevents error about requred field
      title: this.title?.value,
      img: this.img?.value,
      price: +this.price?.value // prefix '+' converts string to number
    }).subscribe(() => {
      this.router.navigate(['/products']); // redirects to /products
    });
  }

}
