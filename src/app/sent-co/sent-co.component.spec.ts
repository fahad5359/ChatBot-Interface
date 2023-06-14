import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentCoComponent } from './sent-co.component';

describe('SentCoComponent', () => {
  let component: SentCoComponent;
  let fixture: ComponentFixture<SentCoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentCoComponent]
    });
    fixture = TestBed.createComponent(SentCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
