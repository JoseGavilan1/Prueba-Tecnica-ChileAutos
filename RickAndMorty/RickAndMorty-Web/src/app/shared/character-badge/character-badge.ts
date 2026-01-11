import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CharacterService } from '../../services/character';

@Component({
  selector: 'app-character-badge',
  standalone: true,
  template: `<span>{{ name() }}</span>`,
  styles: [`span { background: #444; padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; margin: 2px; display: inline-block; color: #b2df28; }`]
})
export class CharacterBadgeComponent implements OnInit {
  @Input() url!: string;
  private charService = inject(CharacterService);
  public name = signal<string>('Cargando...');

  async ngOnInit() {
    this.name.set(await this.charService.getCharacterName(this.url));
  }
}
