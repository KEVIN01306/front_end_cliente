import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StackComponent } from './stack.component';

describe('StackComponent', () => {
  let component: StackComponent;
  let fixture: ComponentFixture<StackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
