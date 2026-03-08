import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetteListComponent } from './transaction-dette-list.component';

describe('TransactionDetteListComponent', () => {
  let component: TransactionDetteListComponent;
  let fixture: ComponentFixture<TransactionDetteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDetteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionDetteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});