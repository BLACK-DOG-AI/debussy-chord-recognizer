import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent, NavComponent],
  exports: [NavComponent]
})
export class MenuModule { }
