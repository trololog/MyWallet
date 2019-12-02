import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebtTrackerComponent } from './debt-tracker/debt-tracker.component';
import { MenuComponent } from './menu/menu.component';
import { SavingsTrackerComponent } from './savings-tracker/savings-tracker.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DebtTrackerComponent,
    MenuComponent,
    SavingsTrackerComponent,
    TransactionComponent,
    MasterDataComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
