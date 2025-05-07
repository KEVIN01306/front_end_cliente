import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfoPilasColasComponent } from './info-pilas-colas.component';

describe('InfoPilasColasComponent', () => {
  let component: InfoPilasColasComponent;
  let fixture: ComponentFixture<InfoPilasColasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InfoPilasColasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPilasColasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
