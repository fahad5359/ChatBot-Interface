import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecvdMsgCComponent } from './recvd-msg-c.component';

describe('RecvdMsgCComponent', () => {
  let component: RecvdMsgCComponent;
  let fixture: ComponentFixture<RecvdMsgCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecvdMsgCComponent]
    });
    fixture = TestBed.createComponent(RecvdMsgCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
