import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlgorithmsComponent } from './algorithms.component';

describe('AlgorithmsComponent', () => {
  let component: AlgorithmsComponent;
  let fixture: ComponentFixture<AlgorithmsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AlgorithmsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
