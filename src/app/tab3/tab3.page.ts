import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { generateItems } from '../database/generator';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  items : { country: String, city: String}[] = new Array<{ country: String, city: String}>;
  countryInfo:any;
  randNum : number = 0;
  randValue : String = new String;
  selectedQuiz : String = new String;
  userInput : String = new String;

  ngOnInit(): void {
    generateItems(this.items);
    const name = this.randomApi();
    this.searchApi(name);
  }

  constructor(public api : ApiService) {}

  searchApi(country : String) {
    this.api.getInfo(country).subscribe(result=>{
      //console.log(result);
      this.countryInfo=result;
    });
  }

  randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  randomApi() {
    const num = this.randomNum(0,this.items.length-1)
    return this.items[num].country
  }

  randomCity() {
    const num = this.randomNum(0,this.items.length-1)
    this.randValue = this.items[num].city
    this.randNum = num;
    this.selectedQuiz = "City"
  }

  randomCountry() {
    const num = this.randomNum(0,this.items.length-1)
    this.randValue = this.items[num].country
    this.randNum = num;
    this.selectedQuiz = "Country"
  }

  checkCorrect(input : String, index : number) {
    if (this.selectedQuiz == "City") {
      if (this.items[index].country == input) {
        return true;
      } else {
        return false;
      }
    } else {
      if (this.items[index].city == input) {
        return true;
      } else {
        return false;
      }
    }
  }

  buttonCheck () {
    if(this.checkCorrect(this.userInput,this.randNum)) {
      this.randValue = "Correct"
    } else {
      this.randValue = "Incorrect"
    }
  }

}
