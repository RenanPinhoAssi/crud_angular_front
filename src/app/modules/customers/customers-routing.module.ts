import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'customers/list',
    component: ListCustomersComponent,
  },
  {
    path: 'customers/register',
    component: RegisterCustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
