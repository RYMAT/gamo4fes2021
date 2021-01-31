import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gamoyon';
  logoUrl: string | null = null;

  constructor(private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    const storageRef = this.storage.storage.ref();
    storageRef.child('images/logo.png').getDownloadURL().then(v => this.logoUrl = v);
    console.log(
      // environment.firebase
      // storageRef.bucket,
    );


  }
}
