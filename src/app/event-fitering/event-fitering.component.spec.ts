import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFiteringComponent } from './event-fitering.component';

describe('EventFiteringComponent', () => {
  let component: EventFiteringComponent;
  let fixture: ComponentFixture<EventFiteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFiteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFiteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
