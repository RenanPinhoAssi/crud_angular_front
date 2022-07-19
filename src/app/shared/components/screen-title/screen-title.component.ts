import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-title',
  templateUrl: './screen-title.component.html',
  styleUrls: ['./screen-title.component.scss'],
})
export class ScreenTitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() returnable: boolean = true;

  constructor(private _location: Location) {}

  ngOnInit(): void {}

  _return_route() {
    this._location.back();
  }
}
