import { Component, OnInit } from '@angular/core';
import { EdamamRecipe } from 'src/app/models/edamam-recipe';
import { EdamamService } from 'src/app/services/edamam.service';
import { StorageService } from 'src/app/services/storage.service';
import { SearchResult } from 'src/app/models/search-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  working: boolean;
  recipes: EdamamRecipe[];
  query: string;

  constructor(
    private edamam: EdamamService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    let cache: SearchResult = this.storage.searchResult.get();
    if (cache) {
      this.query = cache.query;
      this.recipes = cache.recipes;
    }
  }

  async search() {
    debugger;
    this.working = true;
    try {
      this.recipes = await this.edamam.search(this.query);
    }
    catch (x) {
      this.query = null;
    }
    this.working = false;
  }
}
