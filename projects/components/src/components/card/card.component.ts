import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { Card } from './interfaces/card.interface';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'idaciti-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {

  @Input() card: Card;

  @Output() viewCard: EventEmitter<string> = new EventEmitter<string>();
  @Output() editCard: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeCard: EventEmitter<string> = new EventEmitter<string>();
  @Output() publishCard: EventEmitter<{ id: string; status: boolean }> = new EventEmitter<{ id: string; status: boolean }>();
  @Output() likeCard: EventEmitter<{ id: string; status: boolean }> = new EventEmitter<{ id: string; status: boolean }>();

  constructor(public dialog: MatDialog) {
  }

  setMyStyles() {
    return (this.card && this.card.image) ? {
      'background-image': `url(${this.card.image})`
    } : {};
  }

  edit() {
    console.warn('edit: card: ', this.card);
    this.editCard.emit(this.card.id);
  }

  remove() {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '600px',
      data: {
        title: 'Confirm Deletion',
        message: `Are you sure you want to permanently remove <small class="text-danger bold">${this.card.name}</small>?`
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.removeCard.emit(this.card.id);
      }
    });
  }

  view() {
    this.viewCard.emit(this.card.id);
  }

  publish(status) {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '600px',
      data: {
        title: 'Confirm Publication',
        message: `Are you sure you want to make <small class="text-danger bold">${this.card.name}</small>
          ${status ? ' public' : 'private'}?`
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.publishCard.emit({
          id: this.card.id,
          status
        });
      }
    });
  }

  like(status) {
    this.likeCard.emit({
      id: this.card.id,
      status
    });
  }

}
