import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwbtnComponent } from './swbtn.component';

describe('SwbtnComponent', () => {
  let component: SwbtnComponent;
  let fixture: ComponentFixture<SwbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
