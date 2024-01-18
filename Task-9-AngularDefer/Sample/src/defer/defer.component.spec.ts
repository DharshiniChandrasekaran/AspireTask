/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeferComponent } from './defer.component';

describe('DeferComponent', () => {
  let component: DeferComponent;
  let fixture: ComponentFixture<DeferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
