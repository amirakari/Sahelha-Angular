import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueDonComponent } from './boutique-don.component';

describe('BoutiqueDonComponent', () => {
  let component: BoutiqueDonComponent;
  let fixture: ComponentFixture<BoutiqueDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiqueDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiqueDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
