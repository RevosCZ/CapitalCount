import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'mylist';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
  }

  init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    this.storage.create();
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public async set(item: any) {
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.push(item);
    return this.storage.set(STORAGE_KEY,storedData);
  }

  public async get() {
    return this.storage.get(STORAGE_KEY) || [];
  }

  public async remove(index: any) {
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.splice(index, 1);
    return this.storage.set(STORAGE_KEY,storedData);
  }

}