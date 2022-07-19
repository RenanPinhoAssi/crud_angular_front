import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './customers-routing.module';

import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './views/list-customers/list-customers.component';
import { RegisterCustomerComponent } from './views/register-customer/register-customer.component';
import { ScreenTitleComponent } from 'src/app/shared/components/screen-title/screen-title.component';

import { IconTitleRouterButtonComponent } from 'src/app/shared/components/icon-title-router-button/icon-title-router-button.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CpfPipe } from 'src/app/shared/pipes/cpf.pipe';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { PreloaderSpinnerModule } from 'src/app/shared/components/preloader-spinner/preloader-spinner.module';
import { FormsModule } from '@angular/forms';
import { EditCustomersComponent } from './views/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    EditCustomersComponent,
    RegisterCustomerComponent,
    IconTitleRouterButtonComponent,
    ScreenTitleComponent,
    CpfPipe,
    CustomerFormComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    NgxDatatableModule,
    PreloaderSpinnerModule
  ],
})
export class CustomersModule {}
