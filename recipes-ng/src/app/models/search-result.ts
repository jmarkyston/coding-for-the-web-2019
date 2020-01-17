import { EdamamRecipe } from './edamam-recipe';
import { Query } from '@angular/core';

export class SearchResult {
  query: string;
  recipes: EdamamRecipe[];

  constructor(query: string, recipes: EdamamRecipe[]) {
    this.query = query;
    this.recipes = recipes;
  }
}