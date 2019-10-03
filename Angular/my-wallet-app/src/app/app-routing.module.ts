import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebtTrackerComponent } from './debt-tracker/debt-tracker.component';
import { SavingsTrackerComponent } from './savings-tracker/savings-tracker.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MasterDataComponent } from './master-data/master-data.component';

const routes: Routes = [
    { path: '', redirectTo:'dashboard', pathMatch:'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'debts', component: DebtTrackerComponent },
    { path: 'savings', component: SavingsTrackerComponent },
    { path: 'transaction', component: TransactionComponent },
    { path: 'master', component: MasterDataComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}