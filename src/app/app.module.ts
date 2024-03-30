import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChordRecognizerMainPageModule } from './chord-recognizer-main-page/chord-recognizer-main-page.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChordRecognizerMainPageModule,
    MenuModule,
    ChordRecognizerMainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
