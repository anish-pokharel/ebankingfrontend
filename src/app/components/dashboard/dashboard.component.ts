import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardPageComponent } from '../dashboard-pages/dashboard-page/dashboard-page.component';
import { TransferComponent } from '../dashboard-pages/transfer/transfer.component';
import { AccountsandcharttsComponent } from '../dashboard-pages/accountsandchartts/accountsandchartts.component';
import { InvestmentsComponent } from '../dashboard-pages/investments/investments.component';
import { SettingsComponent } from '../dashboard-pages/settings/settings.component';
import { TransactionsComponent } from '../dashboard-pages/transactions/transactions.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,DashboardPageComponent,TransferComponent,AccountsandcharttsComponent,InvestmentsComponent,SettingsComponent,TransactionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
currentSection:string='transactions';

  constructor(){}
  ngOnInit(): void {
    
  }
  showSection(section:string){
    this.currentSection=section;

  }
}
