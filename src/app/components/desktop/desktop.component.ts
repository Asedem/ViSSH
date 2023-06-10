import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  date: Date = new Date();

  ngOnInit(): void {
    this.utcTime();
  }

  utcTime(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
}
