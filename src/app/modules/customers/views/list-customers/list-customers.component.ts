import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerInterface } from '../../interfaces/customers.interface';

import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
})
export class ListCustomersComponent implements OnInit {
  private _rows!: CustomerInterface[];

  rows!: CustomerInterface[];
  search_word!: HTMLInputElement;

  constructor(
    private _customers_service: CustomersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._customers_service.get_customers().subscribe((data) => {
      this._rows = data;
      this.rows = [...this._rows];
    });
  }

  _update_filter(value) {
    if (value) {
      let _filtered_value: CustomerInterface[] = [];
      this._rows.map((element: CustomerInterface) => {
        for (var key in element) {
          let string_value = element[key].toString();
          if (string_value.includes(value)) {
            _filtered_value.push(element);
          }
        }
      });
      this.rows = _filtered_value;
    } else {
      this.rows = [...this._rows];
    }
  }

  _handle_enter(event, value) {
    if (event.key == 'Enter') {
      this._update_filter(value);
    }
  }

  _delete_customer(row) {
    this._customers_service.delete_customer(row.id).subscribe((data) => {
      let row_index_full_data = this._rows.indexOf(row);
      let row_index_filtered_data = this.rows.indexOf(row);
      this._rows.splice(row_index_full_data, 1);
      this.rows.splice(row_index_filtered_data, 1);
      this.rows = [...this._rows];
      this.rows = [...this.rows];
    });
  }
  _edit_customer(row) {
    this._customers_service._editing_customer = row;
    this.router.navigate([`/customers/edit/${row.id}`]);
  }
}
