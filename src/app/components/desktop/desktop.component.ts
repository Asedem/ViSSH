import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  date: Date = new Date();
  private startMenu?: HTMLDivElement;
  private startMenuVisibility: boolean = false;

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
