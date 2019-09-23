import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTechnicienComponent } from './gestion-technicien.component';

describe('GestionTechnicienComponent', () => {
  let component: GestionTechnicienComponent;
  let fixture: ComponentFixture<GestionTechnicienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionTechnicienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
