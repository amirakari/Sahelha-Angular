import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboboutiqueComponent } from './aboboutique.component';

describe('AboboutiqueComponent', () => {
  let component: AboboutiqueComponent;
  let fixture: ComponentFixture<AboboutiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboboutiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
