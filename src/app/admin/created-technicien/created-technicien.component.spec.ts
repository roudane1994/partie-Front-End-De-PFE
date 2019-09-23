import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedTechnicienComponent } from './created-technicien.component';

describe('CreatedTechnicienComponent', () => {
  let component: CreatedTechnicienComponent;
  let fixture: ComponentFixture<CreatedTechnicienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedTechnicienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
