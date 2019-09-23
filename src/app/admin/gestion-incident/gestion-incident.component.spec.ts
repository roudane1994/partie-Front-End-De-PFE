import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionIncidentComponent } from './gestion-incident.component';

describe('GestionIncidentComponent', () => {
  let component: GestionIncidentComponent;
  let fixture: ComponentFixture<GestionIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
