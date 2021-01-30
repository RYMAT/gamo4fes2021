import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gamoyon';

  ngOnInit(): void {
    console.log(
      environment.APP_FIREBASE_KEY,
      environment.APP_FIREBASE_DOMAIN,
      environment.APP_FIREBASE_PROJECT_ID,
      environment.APP_FIREBASE_STORAGE_BUCKET,
      environment.APP_FIREBASE_SENDER_ID,
    );
  }
}
