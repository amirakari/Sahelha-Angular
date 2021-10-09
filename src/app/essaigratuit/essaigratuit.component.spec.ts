import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaigratuitComponent } from './essaigratuit.component';

describe('EssaigratuitComponent', () => {
  let component: EssaigratuitComponent;
  let fixture: ComponentFixture<EssaigratuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssaigratuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssaigratuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
