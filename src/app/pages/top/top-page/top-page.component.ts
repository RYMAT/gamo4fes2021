import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LIVE_ARCHIVES } from '../../../core/constants/live-archives.constant';
import { AngularFireStorage } from '@angular/fire/storage';
import { from } from 'rxjs';
import * as imageLoaded from 'imagesloaded';
import { LoadingService } from '../../../core/services/loading.service';
import { STORAGE_BASE_PATH } from '../../../core/constants/firebase-storage.constant';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
})
export class TopPageComponent implements OnInit {
  isLoaded = false;
  windowHeight!: number;
  archives = LIVE_ARCHIVES;
  // TOP Image
  townImage$ = from(this.storage.storage.ref().child('images/top/town.png').getDownloadURL());
  // Time-Table
  timeTable$ = from(this.storage.storage.ref().child('images/time-table.jpg').getDownloadURL());

  constructor(
    private storage: AngularFireStorage,
    private renderer: Renderer2,
    private el: ElementRef,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.windowHeight = window.innerHeight;

    const els = this.el.nativeElement.querySelectorAll('.bg-image');
    if (!els) {
      this.loadingService.isLoaded.next(true);
      this.isLoaded = true;
      return;
    }
    // 画像の読み込みを監視
    imageLoaded(els, { background: true }).on('done', () => {
      this.loadingService.isLoaded.next(true);
      this.isLoaded = true;
      setTimeout(() => {
        const topPageEl = this.el.nativeElement.querySelector('.top-page-content');
        this.renderer.addClass(topPageEl, 'moving');
      }, 3000);
    });
  }

  onOpenTimeTable(): void {
    const timeTablePath = this.getDownloadUrl('images/time-table.pdf');
    window.open(timeTablePath);
  }

  private getDownloadUrl(path: string): string {
    return `${STORAGE_BASE_PATH}/${encodeURIComponent(path)}?alt=media`;
  }
}
