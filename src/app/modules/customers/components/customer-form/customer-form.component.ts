import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerInterface } from '../../interfaces/customers.interface';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  _customer: CustomerInterface = {
    id: '',
    nome: '',
    cpf: '',
    'data-nascimento': '',
    'data-cadastro': '',
    'e-mail': '',
    'renda-mensal': 0,
  };

  @Input() set customer(value: CustomerInterface) {
    this._customer = value;
    this._perform_data_check();
  }

  get customer(): CustomerInterface {
    return this._customer;
  }

  @Input() disable_cpf: boolean = false;

  @Output() perform_save_action = new EventEmitter<CustomerInterface>();

  cpf_invalid: boolean = true;
  nome_invalid: boolean = true;
  data_nascimento_invalid: boolean = true;
  renda_invalid: boolean = true;
  email_invalid: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this._perform_data_check();
  }

  _perform_data_check() {
    this._handle_blur_nome_input();
    this._handle_blur_cpf_input();
    this._handle_blur_nascimento_input();
    this._handle_blur_renda_input();
    this._handle_blur_email_input();
  }

  _handle_save_button() {
    this.perform_save_action.emit(this.customer);
  }

  _handle_blur_nome_input() {
    if (this.customer['nome'].split(' ').length < 2) {
      this.nome_invalid = true;
    } else {
      this.nome_invalid = false;
    }
  }

  _handle_blur_cpf_input() {
    if (this.customer['cpf'].length != 14) {
      this.cpf_invalid = true;
    } else {
      this.cpf_invalid = !this._check_cpf_valid(this.customer['cpf']);
    }
  }

  _handle_blur_nascimento_input() {
    let date_now = new Date();
    let date_user = new Date(this.customer['data-nascimento']);
    let time_diff = date_now.getTime() - date_user.getTime();
    let years_diff = Math.floor(time_diff / (1000 * 3600 * 24 * 365));
    if (years_diff < 18 || years_diff > 60) {
      this.data_nascimento_invalid = true;
    } else {
      this.data_nascimento_invalid = false;
    }
    console.log(this.data_nascimento_invalid);
  }

  _handle_blur_renda_input() {
    if (this.customer['renda-mensal'] < 0) {
      this.renda_invalid = true;
    } else {
      this.renda_invalid = false;
    }
  }

  _refresh_renda(event) {
    this.customer['renda-mensal'] = event;
    this._handle_blur_renda_input();
  }

  _handle_blur_email_input() {
    if (
      this.customer['e-mail'] &&
      /^[a-zA-Z0-9+_.-]+@([a-zA-Z0-9]+[.])+[a-zA-Z0-9]+$/.test(
        this.customer['e-mail']
      )
    ) {
      this.email_invalid = false;
    } else {
      this.email_invalid = true;
    }
  }

  private _check_cpf_valid(cpf) {
    var Soma;
    var Resto;
    Soma = 0;
    cpf = cpf.toString().replace(/\D/g, '');
    cpf.padStart(9, '0');
    console.log(cpf);

    if (cpf == '00000000000') {
      return false;
    }

    for (let i = 1; i <= 9; i++) {
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) {
      Resto = 0;
    }
    if (Resto != parseInt(cpf.substring(9, 10))) {
      return false;
    }

    Soma = 0;
    for (let i = 1; i <= 10; i++) {
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) {
      Resto = 0;
    }
    if (Resto != parseInt(cpf.substring(10, 11))) {
      return false;
    }
    return true;
  }
}
