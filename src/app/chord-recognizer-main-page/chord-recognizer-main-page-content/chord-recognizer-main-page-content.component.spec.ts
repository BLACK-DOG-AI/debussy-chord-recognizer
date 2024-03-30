/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChordRecognizerMainPageContentComponent } from './chord-recognizer-main-page-content.component';

describe('ChordRecognizerMainPageContentComponent', () => {
  let component: ChordRecognizerMainPageContentComponent;
  let fixture: ComponentFixture<ChordRecognizerMainPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordRecognizerMainPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordRecognizerMainPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
