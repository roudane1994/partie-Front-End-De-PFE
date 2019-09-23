import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAgentComponent } from './espace-agent.component';

describe('EspaceAgentComponent', () => {
  let component: EspaceAgentComponent;
  let fixture: ComponentFixture<EspaceAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
