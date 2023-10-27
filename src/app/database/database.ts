import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'my_list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    await this.storage.create();
  }

  getData() {
    return this.storage.get(STORAGE_KEY)
  }

  async setData(item: string) {
    const StoredData = await this.storage.get(STORAGE_KEY) || [];
    StoredData.push(item);
    return this.storage.set(STORAGE_KEY,StoredData);
  }

  async removeItem(index: any) {
    const StoredData = await this.storage.get(STORAGE_KEY) || [];
    StoredData.splice(index, 1);
    return this.storage.set(STORAGE_KEY,StoredData);
  }
}