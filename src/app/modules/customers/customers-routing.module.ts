import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { EditCustomersComponent } from './views/edit-customer/edit-customer.component';

import { ListCustomersComponent } from './views/list-customers/list-customers.component';
import { RegisterCustomerComponent } from './views/register-customer/register-customer.component';

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
  {
    path: 'customers/edit/:id',
    component: EditCustomersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
