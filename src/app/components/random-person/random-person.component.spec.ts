import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPersonComponent } from './random-person.component';

describe('RandomPersonComponent', () => {
  let component: RandomPersonComponent;
  let fixture: ComponentFixture<RandomPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
