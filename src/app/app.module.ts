import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersModule } from './modules/customers/customers.module';
import { CustomHeaderComponent } from './shared/components/custom-header/custom-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, CustomersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
