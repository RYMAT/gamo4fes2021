import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('splash', [
      transition('show => change', [
        query('.splash', [
          style({ opacity: 1, transform: 'translateX(calc(-100vw - 200px))' }),
          stagger(-100, [
            animate(
              '900ms cubic-bezier(0.645, 0.045, 0.355, 1)',
              style({ opacity: 1, transform: 'translateX(calc(100vw + 200px))' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  state = 'show';
  splashState = 'change';
  // TODO: topイメージ読み込み完了時にstateを変更
  // logoUrl$ = from(this.storage.storage.ref().child('images/logo.png').getDownloadURL());

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // TODO:
    setTimeout(() => {
      this.splashState = 'change';
    }, 500);
  }

  onDoneSplash(event: any): void {
    this.splashState = 'show';
  }
}
