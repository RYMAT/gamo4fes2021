import { Component, OnInit } from '@angular/core';
import { LIVE_ARCHIVES } from '../../../core/constants/live-archives.constant';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
})
export class TopPageComponent implements OnInit {
  isLoaded = true;
  windowHeight!: number;
  archives = LIVE_ARCHIVES;

  constructor() {}

  ngOnInit(): void {
    this.windowHeight = window.innerHeight;
  }
}
