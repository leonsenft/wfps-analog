import {RouteMeta} from '@analogjs/router';
import {NgFor, AsyncPipe, JsonPipe} from '@angular/common';
import {Component, Input, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs';

import type {Discussion, DiscussionDetails} from '../../lib/github-interfaces';
import {GithubService} from '../../lib/github.service';


export const routeMeta: RouteMeta = {
  title: 'Github Discussions Details'
};

@Component({
  selector: 'app-discussions-details',
  standalone: true,
  imports: [NgFor, AsyncPipe, JsonPipe],
  template: `
    <header class="mb-4">
      <h1 class="mb-1 text-2xl font-semibold">Discussions Details</h1>
      <p class="mb-1 max-w-lg text-sm opacity-50">From Github ({{ discussionId }})</p>

      <h2>Title: {{discussionsDetails.title}}</h2>
      <p>By: {{discussionsDetails.author}}</p>
      <p>Created at: {{discussionsDetails.createdAt}}</p>


      <hr />
    </header>
    `,
  styles: [
    `

    `,
  ],
})


export default class DiscussionsDetailsComponent implements OnInit {
  private github: GithubService = inject(GithubService);

  // private readonly route = inject(ActivatedRoute);

  // readonly discussionId$ = this.route.paramMap.pipe(
  //   map((params) => params.get('discussionId'))
  // );

  @Input() discussionId: number;

  discussionsDetails: WritableSignal<DiscussionDetails> = signal();

  ngOnInit() {
      this.github.getDiscussionDetails(this.discussionId)
          .then( discussionsDetails => {
              this.discussionsDetails.set(discussionsDetails)
              console.log(this.discussionsDetails)
          })
        .catch(e => {
          console.log(e);
        });
  }
}
