/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
export class ConfirmationComponent {
    /**
     * @param {?} thisDialogRef
     * @param {?} data
     */
    constructor(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onCloseConfirm() {
        this.thisDialogRef.close('Confirm');
    }
    /**
     * @return {?}
     */
    onCloseCancel() {
        this.thisDialogRef.close('Cancel');
    }
}
ConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'idaciti-confirmation',
                template: "<h2 mat-dialog-title>{{data.title}}</h2>\n\n<mat-dialog-content>\n  <div [innerHTML]=\"data.message\"></div>\n</mat-dialog-content>\n\n<mat-dialog-actions style=\"float: right;\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\">Confirm</button>\n</mat-dialog-actions>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
ConfirmationComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    ConfirmationComponent.prototype.thisDialogRef;
    /** @type {?} */
    ConfirmationComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9jYXJkL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUWxFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBRWhDLFlBQW1CLGFBQWtELEVBQWtDLElBQVM7UUFBN0Ysa0JBQWEsR0FBYixhQUFhLENBQXFDO1FBQWtDLFNBQUksR0FBSixJQUFJLENBQUs7SUFDaEgsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsa1ZBQTRDO2dCQUU1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFQeUIsWUFBWTs0Q0FVb0MsTUFBTSxTQUFDLGVBQWU7Ozs7SUFBbEYsOENBQXlEOztJQUFFLHFDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lkYWNpdGktY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRoaXNEaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb25maXJtYXRpb25Db21wb25lbnQ+LCBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICB9XG5cbiAgb25DbG9zZUNvbmZpcm0oKSB7XG4gICAgdGhpcy50aGlzRGlhbG9nUmVmLmNsb3NlKCdDb25maXJtJyk7XG4gIH1cblxuICBvbkNsb3NlQ2FuY2VsKCkge1xuICAgIHRoaXMudGhpc0RpYWxvZ1JlZi5jbG9zZSgnQ2FuY2VsJyk7XG4gIH1cbn1cbiJdfQ==