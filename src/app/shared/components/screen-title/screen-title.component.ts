import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-title',
  templateUrl: './screen-title.component.html',
  styleUrls: ['./screen-title.component.scss'],
})
export class ScreenTitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() route: string = '';
  @Input() returnable: boolean = true;

  constructor(private _location: Location, private router: Router) {}

  ngOnInit(): void {}

  _return_route() {
    this.router.navigate([`${this.route}`]);
  }
}
