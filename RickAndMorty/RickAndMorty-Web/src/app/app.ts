import { Component, signal } from '@angular/core';
import { EpisodeListComponent } from './features/episode-list/episode-list';

@Component({
  selector: 'app-root',
  imports: [EpisodeListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RickAndMorty-Web');
}
