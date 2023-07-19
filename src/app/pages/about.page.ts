import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'About',
};

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <header class="mb-4">
      <h1 class="mb-1 text-2xl font-semibold">About</h1>
      <hr />
    </header>
    <p>
      This app was built using <a href="https://analogjs.org" target="_blank">Analog</a>
      for the Web Framework Perspective Summit 2023.
    </p>
  `,
})
export default class AboutComponent { }