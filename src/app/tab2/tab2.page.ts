import { Component, OnInit } from '@angular/core';
import { StorageService } from '../database/database';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  darkMode = false;

  ngOnInit() {
    this.checkAppMode();
  }

  constructor(public storage:StorageService) {}

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark',this.darkMode)
    if(this.darkMode) {
      localStorage.setItem("darkModeActivated", "true")
    } else {
      localStorage.setItem("darkModeActivated", "false")
    }
  }

  checkAppMode() {
    const checkIsDarkMode = localStorage.getItem("darkModeActivated");
    checkIsDarkMode == "true"
      ? (this.darkMode = true)
      : (this.darkMode = false)
    document.body.classList.toggle('dark', this.darkMode)
  }

}
