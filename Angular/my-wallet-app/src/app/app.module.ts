import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { TransactionComponentComponent } from './transaction-component/transaction-component.component';
import { DebtTrackerComponentComponent } from './debt-tracker-component/debt-tracker-component.component';
import { SavingsTrackerComponentComponent } from './savings-tracker-component/savings-tracker-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { MasterDataComponentComponent } from './master-data-component/master-data-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetbTrackerComponent } from './detb-tracker/detb-tracker.component';
import { DebtTrackerComponent } from './debt-tracker/debt-tracker.component';
import { MenuComponent } from './menu/menu.component';
import { SavingsTrackerComponent } from './savings-tracker/savings-tracker.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    TransactionComponentComponent,
    DebtTrackerComponentComponent,
    SavingsTrackerComponentComponent,
    DashboardComponentComponent,
    MasterDataComponentComponent,
    DashboardComponent,
    DetbTrackerComponent,
    DebtTrackerComponent,
    MenuComponent,
    SavingsTrackerComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
