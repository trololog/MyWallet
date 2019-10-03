import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebtTrackerComponent } from './debt-tracker/debt-tracker.component';
import { MenuComponent } from './menu/menu.component';
import { SavingsTrackerComponent } from './savings-tracker/savings-tracker.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DebtTrackerComponent,
    MenuComponent,
    SavingsTrackerComponent,
    TransactionComponent,
    MasterDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
