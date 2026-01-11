import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-handler',
  standalone: true,
  templateUrl: './error-handler.html',
  styleUrls: ['./error-handler.css']
})
export class ErrorHandlerComponent {
  @Input() message: string = 'Ocurrió un error inesperado.'; 
  @Output() retry = new EventEmitter<void>();

  onRetry() {
    this.retry.emit();
  }
}
