import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFldCComponent } from './text-fld-c.component';

describe('TextFldCComponent', () => {
  let component: TextFldCComponent;
  let fixture: ComponentFixture<TextFldCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextFldCComponent]
    });
    fixture = TestBed.createComponent(TextFldCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
