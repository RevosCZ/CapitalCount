import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { generateItems, editError } from '../database/generator';
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
  streak : number = 0;
  highestStreak :number = 0;
  textformat : String = new String;

  ngOnInit(): void {
    generateItems(this.items);
    const name = this.randomApi();
    this.searchApi(name);
    this.loadStreaks();
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
    const result = editError(this.items[num].country);
    return result;
  }

  randomCity() {
    const num = this.randomNum(0,this.items.length-1)
    this.randValue = this.items[num].city
    this.randNum = num;
    this.selectedQuiz = "City"
    this.textformat = "text";
  }

  randomCountry() {
    const num = this.randomNum(0,this.items.length-1)
    this.randValue = this.items[num].country
    this.randNum = num;
    this.selectedQuiz = "Country"
    this.textformat = "text";
  }

  checkCorrect(input : String, index : number) {
    if (this.selectedQuiz == "City") {
      if (this.items[index].city.toLowerCase() == "London".toLowerCase()) {
        if (input.toLowerCase() == "England".toLowerCase() || "United Kingdom".toLowerCase()) {
          return true;
        } else {
          return false;
        }
      }
      if (this.items[index].country.toLowerCase() == input.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    } else {
      if (this.items[index].city.toLowerCase() == input.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    }
  }

  buttonCheck () {
    if(this.checkCorrect(this.userInput,this.randNum)) {
      this.randValue = "Correct"
      this.streak++;
      localStorage.setItem("streak",this.streak.toString());
      if(this.highestStreak<this.streak) {
        localStorage.setItem("highestStreak",this.streak.toString())
      }
      this.highestStreak = +localStorage.getItem("highestStreak")!;
      this.textformat = "correct";
    } else {
      this.randValue = "Incorrect"
      this.streak = 0;
      localStorage.setItem("streak",this.streak.toString());
      this.textformat = "incorrect";
    }
  }

  loadStreaks (){
    this.streak = +localStorage.getItem("streak")!;
    this.highestStreak = +localStorage.getItem("highestStreak")!;
  }
}
