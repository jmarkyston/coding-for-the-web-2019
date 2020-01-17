import { Injectable } from '@angular/core';
import { EdamamRecipe } from '../models/edamam-recipe';
import { HttpService } from './http.service';
import { EdamamSearchResult } from '../models/edamam-search-result';
import { StorageService } from './storage.service';
import { SearchResult } from '../models/search-result';

@Injectable({
  providedIn: 'root'
})
export class EdamamService {

  constructor(
    private http: HttpService,
    private storage: StorageService
  ) { }

  private composeUrl(details: string): string {
    return `https://api.edamam.com/search?app_id=b7c9eb38&app_key=26974d624fcc57a5a027701967b1fcd4&${details}`;
  }

  async search(query: string): Promise<EdamamRecipe[]> {
    let cache: SearchResult = this.storage.searchResult.get();
    if (cache && cache.query === query) {
      return cache.recipes;
    }
    else {
      let url: string = this.composeUrl(`q=${query}`);
      let result = await this.http.get<EdamamSearchResult>(url);
      let recipes: EdamamRecipe[] = result.hits.map(h => h.recipe);
      cache = new SearchResult(query, recipes);
      this.storage.searchResult.set(cache);
      return recipes;
    }
  }
}
