import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerInterface } from '../../interfaces/customers.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.scss'],
})
export class RegisterCustomerComponent implements OnInit {
  _loading: boolean = false;

  constructor(
    private _customers_service: CustomersService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  _register_customer(customer: CustomerInterface) {
    this._loading = true;
    this._customers_service.add_customer(customer).subscribe((data) => {
      this._loading = false;

      this._router.navigate([`/customers`]);
    });
  }
}
