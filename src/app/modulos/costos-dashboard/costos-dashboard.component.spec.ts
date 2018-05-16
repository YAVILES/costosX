
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostosDashboardComponent } from './costos-dashboard.component';

describe('CostosDashboardComponent', () => {
  let component: CostosDashboardComponent;
  let fixture: ComponentFixture<CostosDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CostosDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
