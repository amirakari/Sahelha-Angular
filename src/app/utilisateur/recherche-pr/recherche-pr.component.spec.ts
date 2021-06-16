import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePrComponent } from './recherche-pr.component';

describe('RecherchePrComponent', () => {
  let component: RecherchePrComponent;
  let fixture: ComponentFixture<RecherchePrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchePrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
