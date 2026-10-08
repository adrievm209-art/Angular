import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products = [
  {
    name: 'iPhone 15 Pro',
    price: 999,
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc'
  },
  {
    name: 'MacBook Pro 14"',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3'
  },
  {
    name: 'AirPods Pro',
    price: 249,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1'
  },
  {
    name: 'Apple Watch Series 9',
    price: 399,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12'
  },
  {
    name: 'Sony WH-1000XM5',
    price: 399,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb'
  },
  {
    name: 'Nike Air Max 270',
    price: 150,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
  },
  {
    name: 'Canon EOS R6',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32'
  },
  {
    name: 'Samsung Galaxy S24',
    price: 799,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf'
  },
  {
    name: 'Nike Air Jordan 1',
    price: 180,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3'
  },
  {
    name: 'PlayStation 5',
    price: 499,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db'
  }
];

}
