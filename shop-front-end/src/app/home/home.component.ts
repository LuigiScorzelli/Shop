import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: any = [];

  productsService: any;
  constructor() { 
    this.results = [
      {'title': 'prod1', 'des': 'sajfajsvsa', 'info': 'sahdh'},
      {'title': 'prod2', 'des': 'sajfajsvsa', 'info': 'sahdh'},
      {'title': 'prod3', 'des': 'sajfajsvsa', 'info': 'sahdh'},
      {'title': 'prod4', 'des': 'sajfajsvsa', 'info': 'sahdh'},
      {'title': 'prod5', 'des': 'sajfajsvsa', 'info': 'sahdh'},
      {'title': 'prod6', 'des': 'sajfajsvsa', 'info': 'sahdh'},
      {'title': 'prod7', 'des': 'sajfajsvsa', 'info': 'sahdh'},
      {'title': 'prod8', 'des': 'sajfajsvsa', 'info': 'sahdh'},
    ]
  }

  ngOnInit(): void {
  }

}
