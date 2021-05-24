import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueUserComponent } from './boutique-user.component';

describe('BoutiqueUserComponent', () => {
  let component: BoutiqueUserComponent;
  let fixture: ComponentFixture<BoutiqueUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiqueUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiqueUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
