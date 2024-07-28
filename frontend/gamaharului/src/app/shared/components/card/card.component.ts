import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  /** */
  @Input() layout: 'default' | 'overlay' | 'featured' = 'default';

  /** */
  @Input() imageUrl?: string;

  /** */
  @Input() width: string | undefined;

  /** */
  @Input() height: string | undefined;

  /** */
  @Input() cardClasses: string[] = [];

  /** */
  @Input() imgClasses: string[] = [];

  /** */
  @Output() cardClick = new EventEmitter<void>();

  /** */
  onCardClick(event: Event) {
    const target = event.target as HTMLElement;
    const blacklist = ['A', 'BUTTON', 'INPUT', 'LABEL', 'SELECT'];
    if (!blacklist.includes(target.tagName)) {
      this.cardClick.emit();
    }
  }
}
