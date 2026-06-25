import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fouter } from './fouter';

describe('Fouter', () => {
  let component: Fouter;
  let fixture: ComponentFixture<Fouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fouter],
    }).compileComponents();

    fixture = TestBed.createComponent(Fouter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
