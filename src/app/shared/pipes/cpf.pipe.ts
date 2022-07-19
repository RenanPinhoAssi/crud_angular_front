import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
  transform(value: string | number): string {
    let cpf: string;
    cpf = value.toString().replace(/\D/g, '');
    cpf.padStart(9, '0');

    if (cpf.length > 9) {
      cpf = cpf.slice(0, 9) + '-' + cpf.slice(9);
    }

    if (cpf.length > 6) {
      cpf = cpf.slice(0, 6) + '.' + cpf.slice(6);
    }

    if (cpf.length > 3) {
      cpf = cpf.slice(0, 3) + '.' + cpf.slice(3);
    }

    return cpf;
  }
}
