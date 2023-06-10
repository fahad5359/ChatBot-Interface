import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMsgCComponent } from './sent-msg-c.component';

describe('SentMsgCComponent', () => {
  let component: SentMsgCComponent;
  let fixture: ComponentFixture<SentMsgCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentMsgCComponent]
    });
    fixture = TestBed.createComponent(SentMsgCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
