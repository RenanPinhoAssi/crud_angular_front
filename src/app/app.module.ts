import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from './utils/http.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersModule } from './modules/customers/customers.module';
import { CustomHeaderComponent } from './shared/components/custom-header/custom-header.component';

import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, CustomHeaderComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CustomersModule,
    HttpModule.forRoot({ environment }),
    BrowserAnimationsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
