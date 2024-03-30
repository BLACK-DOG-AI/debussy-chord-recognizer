import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChordRecognizerMainPageComponent } from './chord-recognizer-main-page.component';
import { ChordRecognizerMainPageContentComponent } from './chord-recognizer-main-page-content/chord-recognizer-main-page-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChordRecognizerMainPageComponent, ChordRecognizerMainPageContentComponent],
  exports: [ChordRecognizerMainPageContentComponent]
})
export class ChordRecognizerMainPageModule { }
