import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceTechnicienComponent } from './espace-technicien.component';

describe('EspaceTechnicienComponent', () => {
  let component: EspaceTechnicienComponent;
  let fixture: ComponentFixture<EspaceTechnicienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceTechnicienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
