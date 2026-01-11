import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeService } from '../../services/episode';
import { ErrorHandlerComponent } from '../../shared/error-handler/error-handler';
import { CharacterBadgeComponent } from '../../shared/character-badge/character-badge';

@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [CommonModule, ErrorHandlerComponent, CharacterBadgeComponent],
  templateUrl: './episode-list.html',
  styleUrls: ['./episode-list.css']
})
export class EpisodeListComponent implements OnInit {

  public episodeService = inject(EpisodeService);

  ngOnInit() {
    this.episodeService.getEpisodes(1);
  }

  public currentPage = signal<number>(1);

  changePage(page: number) {
  const currentSearch = this.episodeService.searchTerm();
  this.currentPage.set(page);
  this.episodeService.getEpisodes(page, currentSearch);
}

  onSearch(name: string) {
  this.currentPage.set(1);
  this.episodeService.getEpisodes(1, name);
}


}
