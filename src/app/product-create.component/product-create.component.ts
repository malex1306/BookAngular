import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatError, MatLabel } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';

@Component({
  selector: 'app-product-create',
  imports: [ReactiveFormsModule, MatButton, MatInput, MatFormField, MatError, MatLabel, MatSelect, MatOption],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit{
  constructor(private productsService: ProductsService, private router: Router, private builder: FormBuilder){}
  

  createProduct() {
    this.productsService.addProduct(this.productForm!.value).
    subscribe(() => this.router.navigate(['/products']));
      
  }

  productForm: FormGroup<{
    title: FormControl<string>,
    price: FormControl<number | undefined>,
    category: FormControl<string>
  }> | undefined;

  private buildForm(){
    this.productForm = this.builder.nonNullable.group({
      title: [''],
      price: this.builder.nonNullable.control<number | undefined>(undefined),
      category: ['']
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }
}
