import { Component } from '@angular/core';
import { DataService } from '../database/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listData = [];

  constructor(private data: DataService) {
    this.loadData();
  }

  async loadData() {
    this.listData = await this.data.getData();
  }

  async addData() {
    await this.data.setData('Simon');
    this.loadData();
  }

  async removeData(index: number) {
    this.data.removeItem(index);
    this.listData.splice(index,1);
  } 
}
