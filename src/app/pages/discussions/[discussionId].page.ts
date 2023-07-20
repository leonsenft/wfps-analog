import {RouteMeta} from '@analogjs/router';
import {NgFor} from '@angular/common';
import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';

import type {Discussion, DiscussionDetails} from '../../lib/github-interfaces';
import {GithubService} from '../../lib/github.service';

export const routeMeta: RouteMeta = {
  title: 'Github Discussions Details'
};

@Component({
  selector: 'app-discussions-details',
  standalone: true,
  imports: [NgFor],
  template: `
    <header class="mb-4">
      <h1 class="mb-1 text-2xl font-semibold">Discussions Details</h1>
      <p class="mb-1 max-w-lg text-sm opacity-50">From Github</p>
      <p class="mb-1 max-w-lg text-sm opacity-50">{{discussionId}}</p>
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

  // discussionsDetails: WritableSignal<DiscussionDetails> = signal();

  ngOnInit() {

    console.log("onInit");
    //   this.github.getDiscussionDetails()
    //       .then( discussionsDetails => {
    //           this.discussionsDetails.set(discussionsDetails)
    //       })
    // // this.github.getDiscussionList()
    // //     .then(discussions => {
    // //       this.discussions.set(discussions);
    // //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
  }
}
