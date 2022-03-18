import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleModalComponent } from './accessible-modal.component';

describe('AccessibleModalComponent', () => {
  let component: AccessibleModalComponent;
  let fixture: ComponentFixture<AccessibleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibleModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
