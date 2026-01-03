import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompletListComponent } from './comptelist.component';

describe('ComptesListComponent', () => {
  let component: CompletListComponent;
  let fixture: ComponentFixture<CompletListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
