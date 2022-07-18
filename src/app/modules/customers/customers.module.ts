import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './customers-routing.module';

import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';
import { IconTitleRouterButtonComponent } from 'src/app/shared/components/icon-title-router-button/icon-title-router-button.component';

@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    RegisterCustomerComponent,
    IconTitleRouterButtonComponent
  ],
  imports: [CommonModule, StudentRoutingModule],
})
export class CustomersModule {}
