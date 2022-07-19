import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon-title-router-button',
  templateUrl: './icon-title-router-button.component.html',
  styleUrls: ['./icon-title-router-button.component.scss'],
})
export class IconTitleRouterButtonComponent implements OnInit {
  @Input() icon_class: string = '';
  @Input() title: string = '';
  @Input() route: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  _change_route() {
    this.router.navigate([`${this.route}`]);
  }
}
