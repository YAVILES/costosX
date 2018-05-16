
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostosNavComponent } from './costos-nav.component';

describe('CostosNavComponent', () => {
  let component: CostosNavComponent;
  let fixture: ComponentFixture<CostosNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CostosNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostosNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
