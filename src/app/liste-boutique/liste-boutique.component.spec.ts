import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBoutiqueComponent } from './liste-boutique.component';

describe('ListeBoutiqueComponent', () => {
  let component: ListeBoutiqueComponent;
  let fixture: ComponentFixture<ListeBoutiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBoutiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
