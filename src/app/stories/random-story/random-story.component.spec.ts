/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RandomStoryComponent } from './random-story.component';

describe('RandomStoryComponent', () => {
  let component: RandomStoryComponent;
  let fixture: ComponentFixture<RandomStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
