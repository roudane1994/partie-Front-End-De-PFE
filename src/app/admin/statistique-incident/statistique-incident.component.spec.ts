import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueIncidentComponent } from './statistique-incident.component';

describe('StatistiqueIncidentComponent', () => {
  let component: StatistiqueIncidentComponent;
  let fixture: ComponentFixture<StatistiqueIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
