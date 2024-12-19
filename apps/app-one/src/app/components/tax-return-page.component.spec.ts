import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxReturnPageComponent } from './tax-return-page.component';

describe('TaxReturnPageComponent', () => {
  let component: TaxReturnPageComponent;
  let fixture: ComponentFixture<TaxReturnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxReturnPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxReturnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
