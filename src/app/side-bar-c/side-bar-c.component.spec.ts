import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarCComponent } from './side-bar-c.component';

describe('SideBarCComponent', () => {
  let component: SideBarCComponent;
  let fixture: ComponentFixture<SideBarCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarCComponent]
    });
    fixture = TestBed.createComponent(SideBarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
