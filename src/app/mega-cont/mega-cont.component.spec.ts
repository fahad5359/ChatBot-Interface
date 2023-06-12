import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaContComponent } from './mega-cont.component';

describe('MegaContComponent', () => {
  let component: MegaContComponent;
  let fixture: ComponentFixture<MegaContComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MegaContComponent]
    });
    fixture = TestBed.createComponent(MegaContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
