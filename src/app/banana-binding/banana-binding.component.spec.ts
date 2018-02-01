import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BananaBindingComponent } from './banana-binding.component';

describe('BananaBindingComponent', () => {
  let component: BananaBindingComponent;
  let fixture: ComponentFixture<BananaBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BananaBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BananaBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
