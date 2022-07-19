import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/utils/data.service';
import { CustomerInterface } from '../interfaces/customers.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  _editing_customer: CustomerInterface = {
    id: '',
    nome: '',
    cpf: '',
    'data-nascimento': '',
    'data-cadastro': '',
    'e-mail': '',
    'renda-mensal': 0,
  };

  constructor(private data: DataService, private datePipe: DatePipe) {}


  get_customers(): Observable<CustomerInterface[]> {
    return this.data.getAll<CustomerInterface[]>('customers');
  }

  get_customer(customer_id: string): Observable<CustomerInterface> {
    return this.data.getOne<CustomerInterface>('customers', customer_id);
  }

  add_customer(new_customer: CustomerInterface): Observable<CustomerInterface> {
    let register_date = this.datePipe.transform(new Date(), 'YYYY-MM-dd');
    new_customer['data-cadastro'] = register_date
      ? register_date
      : '2022-01-01';
    return this.data.postAll<CustomerInterface>('customers', new_customer);
  }

  edit_customer(customer_id: string, customer: CustomerInterface): Observable<CustomerInterface> {
    return this.data.editOne<CustomerInterface>('customers', customer_id, customer);
  }

  delete_customer(customer_id: string): Observable<CustomerInterface> {
    return this.data.deleteAll<CustomerInterface>('customers', customer_id);
  }
}
