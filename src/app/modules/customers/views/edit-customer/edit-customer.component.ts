import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerInterface } from '../../interfaces/customers.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomersComponent implements OnInit {
  _customer: CustomerInterface;
  _loading: boolean = true;

  constructor(
    private _customers_service: CustomersService,
    private _router: Router,
    private _active_route: ActivatedRoute
  ) {
    this._customer = this._customers_service._editing_customer;
  }

  ngOnInit(): void {
    if (this._customer.id) {
      this._loading = false;
    } else {
      this._customers_service
        .get_customer(this._active_route.snapshot.params['id'])
        .subscribe((data) => {
          this._customer = data;
          this._loading = false;
        });
    }
  }

  _register_customer(customer: CustomerInterface) {
    this._loading = true;
    this._customers_service.edit_customer(customer.id, customer).subscribe((data) => {
      this._loading = false;

      this._router.navigate([`/customers/list`]);
    });
  }
}
