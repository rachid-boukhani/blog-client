import { MatDialogRef } from '@angular/material';
export declare class ConfirmationComponent {
    thisDialogRef: MatDialogRef<ConfirmationComponent>;
    data: any;
    constructor(thisDialogRef: MatDialogRef<ConfirmationComponent>, data: any);
    onCloseConfirm(): void;
    onCloseCancel(): void;
}
