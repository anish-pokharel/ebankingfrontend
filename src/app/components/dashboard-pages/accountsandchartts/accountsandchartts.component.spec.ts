import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsandcharttsComponent } from './accountsandchartts.component';

describe('AccountsandcharttsComponent', () => {
  let component: AccountsandcharttsComponent;
  let fixture: ComponentFixture<AccountsandcharttsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsandcharttsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsandcharttsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
