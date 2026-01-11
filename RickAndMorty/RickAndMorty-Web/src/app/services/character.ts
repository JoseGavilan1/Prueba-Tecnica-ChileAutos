import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private http = inject(HttpClient);

  async getCharacterName(url: string): Promise<string> {
    try {
      const char = await firstValueFrom(this.http.get<{name: string}>(url));
      return char.name;
    } catch {
      return 'Personaje desconocido';
    }
  }
}
