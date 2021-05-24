import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluerProduitComponent } from './evaluer-produit.component';

describe('EvaluerProduitComponent', () => {
  let component: EvaluerProduitComponent;
  let fixture: ComponentFixture<EvaluerProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluerProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluerProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
