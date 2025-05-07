import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataTableComponentComponent } from './data-table-component.component';

describe('DataTableComponentComponent', () => {
  let component: DataTableComponentComponent;
  let fixture: ComponentFixture<DataTableComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DataTableComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
