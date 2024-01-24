import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  data: any[] = [1, 2, 3, 4, 5];

  constructor() {}

  getdata(): any[] {
    return this.data;
  }

  addData(newdata: any): void {
    this.data.push(newdata);
  }
}
