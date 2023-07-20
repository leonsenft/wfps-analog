import { Component, OnDestroy, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { RouteMeta } from '@analogjs/router';

import { About } from '../../lib/github-interfaces'
import { GithubService } from '../../lib/github.service';
import { CommonModule } from '@angular/common';

export const routeMeta: RouteMeta = {
  title: 'About',
};

declare const Zone: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="mb-4">
      <h1 class="mb-1 text-2xl font-semibold">About</h1>
      <hr />
    </header>
    <p>
      This app was built using <a href="https://analogjs.org" target="_blank">Analog</a>
      for the Web Framework Perspective Summit 2023.
    </p>

    <section *ngIf="about() !== null">
      <p>
        The source code for this app can be found
        <a [href]="about()?.url" target="_blank">here</a>.
      </p>
    </section>
  `,
})
export default class AboutComponent implements OnInit, OnDestroy {
  private github: GithubService = inject(GithubService);

  about: WritableSignal<About | null> = signal(null);

  constructor() {
    console.log('github.getAbout()');
    this.github.getAbout().then(about => {
      console.log(' -> ', about);
      this.about.set(about);
    }).catch(e => {
      console.log(e);
    });
  }

  ngOnInit(): void {
    console.log('onInit ', this.about());
  }

  ngOnDestroy(): void {
    console.log('onDestroy', this.about());
  }
}