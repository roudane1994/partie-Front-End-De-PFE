import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedServiceComponent } from './created-service.component';

describe('CreatedServiceComponent', () => {
  let component: CreatedServiceComponent;
  let fixture: ComponentFixture<CreatedServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
