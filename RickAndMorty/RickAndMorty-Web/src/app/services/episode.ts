import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EpisodeResponse } from '../models/episode.models';
import { API_CONFIG } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private http = inject(HttpClient);

  public episodes = signal<EpisodeResponse | null>(null);
  public loading = signal<boolean>(false);
  public error = signal<string | null>(null);
  public searchTerm = signal<string>('');
  public currentPage = signal<number>(1);

  getEpisodes(page: number = 1, name: string = '') {
  this.loading.set(true);
  this.searchTerm.set(name); // Guardamos el filtro actual

  // Construimos la URL con parámetros de búsqueda si existen
  const url = `${API_CONFIG.baseUrl}/episodes?page=${page}&name=${name}`;

  this.http.get<EpisodeResponse>(url).subscribe({
    next: (data) => {
      this.episodes.set(data);
      this.loading.set(false);
      this.error.set(null);
    },
    error: (err) => {
      this.error.set('No se encontraron episodios con ese nombre.');
      this.episodes.set(null);
      this.loading.set(false);
    }
  });
}
}
