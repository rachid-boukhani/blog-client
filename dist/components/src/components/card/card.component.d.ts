import { EventEmitter } from '@angular/core';
import { Card } from './interfaces/card.interface';
import { MatDialog } from '@angular/material';
export declare class CardComponent {
    dialog: MatDialog;
    card: Card;
    viewCard: EventEmitter<string>;
    editCard: EventEmitter<string>;
    removeCard: EventEmitter<string>;
    publishCard: EventEmitter<{
        id: string;
        status: boolean;
    }>;
    likeCard: EventEmitter<{
        id: string;
        status: boolean;
    }>;
    constructor(dialog: MatDialog);
    setMyStyles(): {
        'background-image': string;
    } | {
        'background-image'?: undefined;
    };
    edit(): void;
    remove(): void;
    view(): void;
    publish(status: any): void;
    like(status: any): void;
}
