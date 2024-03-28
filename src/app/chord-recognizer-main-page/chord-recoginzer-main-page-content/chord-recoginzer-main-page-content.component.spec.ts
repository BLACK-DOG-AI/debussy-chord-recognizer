/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChordRecoginzerMainPageContentComponent } from './chord-recoginzer-main-page-content.component';

describe('ChordRecoginzerMainPageContentComponent', () => {
  let component: ChordRecoginzerMainPageContentComponent;
  let fixture: ComponentFixture<ChordRecoginzerMainPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordRecoginzerMainPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordRecoginzerMainPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
