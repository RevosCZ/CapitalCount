import { StorageService} from '../database/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  ngOnInit() {
    this.generateItems();
  }
  
  constructor (public storage:StorageService) {}

  public generateItems() {
    this.storage.set("Afghanistan","Kabul");
    this.storage.set("Albania","Tirana");
    this.storage.set("Armenia","Yerevan");
    this.storage.set("Azerbaijan","Baku");
  }

}
