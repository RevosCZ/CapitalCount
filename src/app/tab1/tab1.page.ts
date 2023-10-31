import { StorageService} from '../database/database';
import { Component, OnInit } from '@angular/core';
import { generateItems } from '../database/generator';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  countries : Array<string>  = new Array<string>();
  cities : Array<string>  = new Array<string>();
  items : { country: String, city: String}[] = new Array<{ country: String, city: String}>;
  public results = [...this.items];
  public test = [...this.items];


  constructor (public storage:StorageService) {}

  ngOnInit() {
    generateItems(this.items);
    this.results = [...this.items];
    this.test = [...this.items];
  }


  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.test = this.items.filter((d) => d.country.toLowerCase().indexOf(query) > -1);
    if (this.test.length != 0){
      this.results = this.items.filter((d) => d.country.toLowerCase().indexOf(query) > -1);
    }
    else {
      this.results = this.items.filter((d) => d.city.toLowerCase().indexOf(query) > -1);
    }
  }
}
