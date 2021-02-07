import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsTabComponent } from './artists-tab.component';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [ArtistsTabComponent],
  exports: [ArtistsTabComponent],
  imports: [
    CommonModule,
    TabsModule,
  ]
})
export class ArtistsTabModule {
}
