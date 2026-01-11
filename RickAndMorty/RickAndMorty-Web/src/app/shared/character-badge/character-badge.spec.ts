import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBadge } from './character-badge';

describe('CharacterBadge', () => {
  let component: CharacterBadge;
  let fixture: ComponentFixture<CharacterBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
