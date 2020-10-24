import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorybar',
  templateUrl: './categorybar.component.html',
  styleUrls: ['./categorybar.component.css']
})
export class CategorybarComponent implements OnInit {
  categories: string[] = [
    'Clothes',
    'Accessories',
    'Shoes',
    'Sports',
    'Undergarments'
  ];
  constructor() {
  }

  ngOnInit(): void {
  }
}
