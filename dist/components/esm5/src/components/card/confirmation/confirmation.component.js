/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    ConfirmationComponent.prototype.onCloseConfirm = /**
     * @return {?}
     */
    function () {
        this.thisDialogRef.close('Confirm');
    };
    /**
     * @return {?}
     */
    ConfirmationComponent.prototype.onCloseCancel = /**
     * @return {?}
     */
    function () {
        this.thisDialogRef.close('Cancel');
    };
    ConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'idaciti-confirmation',
                    template: "<h2 mat-dialog-title>{{data.title}}</h2>\n\n<mat-dialog-content>\n  <div [innerHTML]=\"data.message\"></div>\n</mat-dialog-content>\n\n<mat-dialog-actions style=\"float: right;\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\">Confirm</button>\n</mat-dialog-actions>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ConfirmationComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ConfirmationComponent;
}());
export { ConfirmationComponent };
if (false) {
    /** @type {?} */
    ConfirmationComponent.prototype.thisDialogRef;
    /** @type {?} */
    ConfirmationComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9jYXJkL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxFO0lBUUUsK0JBQW1CLGFBQWtELEVBQWtDLElBQVM7UUFBN0Ysa0JBQWEsR0FBYixhQUFhLENBQXFDO1FBQWtDLFNBQUksR0FBSixJQUFJLENBQUs7SUFDaEgsQ0FBQzs7OztJQUVELDhDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLGtWQUE0QztvQkFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFQeUIsWUFBWTtnREFVb0MsTUFBTSxTQUFDLGVBQWU7O0lBVWhHLDRCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FaWSxxQkFBcUI7OztJQUVwQiw4Q0FBeUQ7O0lBQUUscUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWRhY2l0aS1jb25maXJtYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGhpc0RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENvbmZpcm1hdGlvbkNvbXBvbmVudD4sIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gIH1cblxuICBvbkNsb3NlQ29uZmlybSgpIHtcbiAgICB0aGlzLnRoaXNEaWFsb2dSZWYuY2xvc2UoJ0NvbmZpcm0nKTtcbiAgfVxuXG4gIG9uQ2xvc2VDYW5jZWwoKSB7XG4gICAgdGhpcy50aGlzRGlhbG9nUmVmLmNsb3NlKCdDYW5jZWwnKTtcbiAgfVxufVxuIl19