import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeaboComponent } from './listeabo.component';

describe('ListeaboComponent', () => {
  let component: ListeaboComponent;
  let fixture: ComponentFixture<ListeaboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeaboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
