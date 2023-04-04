import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleOperationComponent } from './vehicle-operation.component';
describe('VehicleOperationComponent', () => {
  let component: VehicleOperationComponent;
  let fixture: ComponentFixture<VehicleOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





