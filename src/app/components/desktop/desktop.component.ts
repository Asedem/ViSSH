import {Component, OnInit} from '@angular/core';
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  date: Date = new Date();
  startMenu?: HTMLDivElement;
  startMenuVisibility: boolean = false;

  ngOnInit(): void {
    this.utcTime();
    this.startMenu = document.getElementById('startMenu') as HTMLDivElement;
  }

  utcTime(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  toggleStartMenu() {
    if (this.startMenuVisibility) {
      this.startMenu!.style.display = "none";
    } else {
      this.startMenu!.style.display = "block";
    }
    this.startMenuVisibility = !this.startMenuVisibility;
  }
}
