import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerOperationComponent } from './owner-operation.component';

describe('OwnerOperationComponent', () => {
  let component: OwnerOperationComponent;
  let fixture: ComponentFixture<OwnerOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
