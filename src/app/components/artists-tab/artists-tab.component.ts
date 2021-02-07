import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { queueScheduler, Subject } from 'rxjs';
import { StageArtist } from '../../core/models/artist';
import { STAGE_ARTISTS } from '../../core/constants/stage-artists.constant';
import { STORAGE_BASE_PATH } from '../../core/constants/firebase-storage.constant';
import { format } from 'date-fns';

@Component({
  selector: 'app-artists-tab',
  templateUrl: './artists-tab.component.html',
  styleUrls: ['./artists-tab.component.scss'],
})
export class ArtistsTabComponent implements OnInit, AfterViewInit {
  @ViewChild('artistTabs', { static: false }) artistTabs!: TabsetComponent;

  readonly tabItems: string[] = [
    '2021/02/22',
    '2021/02/23',
    '2021/02/24',
    '2021/02/25',
    '2021/02/26',
    '2021/02/27',
    '2021/02/28',
  ];

  stageArtists$ = new Subject<Required<StageArtist[]>>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // NOTE: ExpressionChangedAfterItHasBeenCheckedError対策
    queueScheduler.schedule(() => {
      const initialStageArtists = this.checkStageArtists();
      if (initialStageArtists && this.artistTabs) {
        const index = this.tabItems.findIndex((tab) => tab === initialStageArtists[0].date) ?? 0;
        this.artistTabs.tabs[index].active = true;
        return;
      }
      this.stageArtists$.next(this.checkStageArtists() ?? [STAGE_ARTISTS[0]]);
    }, 1);
  }

  onSelectedTab(tab: TabDirective): void {
    this.stageArtists$.next(STAGE_ARTISTS.filter((stageArtist: StageArtist) => stageArtist.date === tab.id));
  }

  getThumbUrl(id: number | null): string | null {
    if (id === null) {
      return null;
    }
    return this.getDownloadUrl(`images/artists/${id}.jpg`);
  }

  private getDownloadUrl(path: string): string | null {
    if (!path) {
      return null;
    }
    return `${STORAGE_BASE_PATH}/${encodeURIComponent(path)}?alt=media`;
  }

  // tabに一致する日付が存在するか判定し対応する配列を返す
  private checkStageArtists(): StageArtist[] | null {
    const today = format(new Date(), 'yyyy/MM/dd');
    const tab = this.tabItems.filter((date) => date === today);
    return tab?.length ? STAGE_ARTISTS.filter((stageArtist) => stageArtist.date === today) : null;
  }
}
