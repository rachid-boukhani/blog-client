import { Component, ViewEncapsulation, Inject, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTreeModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Card {
    constructor() {
        this.name = '';
        this.description = '';
        this.public = false;
        this.notesSearchInfo = new NotesSearchInfo();
    }
}
if (false) {
    /** @type {?} */
    Card.prototype.id;
    /** @type {?} */
    Card.prototype.name;
    /** @type {?} */
    Card.prototype.description;
    /** @type {?} */
    Card.prototype.author;
    /** @type {?} */
    Card.prototype.public;
    /** @type {?} */
    Card.prototype.liked;
    /** @type {?} */
    Card.prototype.created;
    /** @type {?} */
    Card.prototype.notesSearchInfo;
    /** @type {?} */
    Card.prototype.image;
}
class NotesSearchInfo {
    constructor() {
        this.text = '';
        this.proximityValue = 2;
        this.showEntireSet = false;
        this.minYear = new Date().getFullYear() - 2;
        this.maxYear = new Date().getFullYear();
        this.searchAllCompanies = true;
        this.selectedCompanies = [];
        this.selectionType = SelectionType.ALL;
        this.formTypes = [];
        this.fiscalPeriods = [];
    }
}
if (false) {
    /** @type {?} */
    NotesSearchInfo.prototype.text;
    /** @type {?} */
    NotesSearchInfo.prototype.proximityValue;
    /** @type {?} */
    NotesSearchInfo.prototype.showEntireSet;
    /** @type {?} */
    NotesSearchInfo.prototype.minYear;
    /** @type {?} */
    NotesSearchInfo.prototype.maxYear;
    /** @type {?} */
    NotesSearchInfo.prototype.searchAllCompanies;
    /** @type {?} */
    NotesSearchInfo.prototype.selectedCompanies;
    /** @type {?} */
    NotesSearchInfo.prototype.selectionType;
    /** @type {?} */
    NotesSearchInfo.prototype.formTypes;
    /** @type {?} */
    NotesSearchInfo.prototype.fiscalPeriods;
}
/** @enum {string} */
const SelectionType = {
    ALL: 'All',
    FORMS: 'FORMS',
    ER: 'ER',
    MDA: 'MDA',
    CL: 'CL',
    PROXY: 'PROXY',
};
/** @enum {string} */
const FormTypes = {
    _ALL: 'ALL',
    _ANN: 'ANN',
    _QTR: 'QTR',
    _10K: '10-K',
    _10Q: '10-Q',
    _8K: '8-K',
    _20F: '20-F',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmationComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
        this.viewCard = new EventEmitter();
        this.editCard = new EventEmitter();
        this.removeCard = new EventEmitter();
        this.publishCard = new EventEmitter();
        this.likeCard = new EventEmitter();
    }
    /**
     * @return {?}
     */
    setMyStyles() {
        return (this.card && this.card.image) ? {
            'background-image': `url(${this.card.image})`
        } : {};
    }
    /**
     * @return {?}
     */
    edit() {
        console.warn('edit: card: ', this.card);
        this.editCard.emit(this.card.id);
    }
    /**
     * @return {?}
     */
    remove() {
        /** @type {?} */
        const dialogRef = this.dialog.open(ConfirmationComponent, {
            width: '600px',
            data: {
                title: 'Confirm Deletion',
                message: `Are you sure you want to permanently remove <small class="text-danger bold">${this.card.name}</small>?`
            },
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result) {
                this.removeCard.emit(this.card.id);
            }
        }));
    }
    /**
     * @return {?}
     */
    view() {
        this.viewCard.emit(this.card.id);
    }
    /**
     * @param {?} status
     * @return {?}
     */
    publish(status) {
        /** @type {?} */
        const dialogRef = this.dialog.open(ConfirmationComponent, {
            width: '600px',
            data: {
                title: 'Confirm Publication',
                message: `Are you sure you want to make <small class="text-danger bold">${this.card.name}</small>
          ${status ? ' public' : 'private'}?`
            },
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result) {
                this.publishCard.emit({
                    id: this.card.id,
                    status
                });
            }
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    like(status) {
        this.likeCard.emit({
            id: this.card.id,
            status
        });
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'idaciti-card',
                template: "<div class=\"card card-chart\">\n\n  <div class=\"card-header card-header-primary\" data-header-animation=\"true\"\n       [ngClass]=\"{'card-header-image': card.image}\" [ngStyle]=\"setMyStyles()\">\n    <div>\n      <i class=\"material-icons favorite\" (click)=\"like(!card.liked)\"\n         [ngClass]=\"{'enabled-icon': card.liked}\"> {{ card.liked ? 'favorite' : 'favorite_border' }}</i>\n\n      <h4 class=\"text-center\">{{card.name}}</h4>\n      <small class=\"text-center\">{{card.author}}</small>\n      <!--<i class=\"material-icons alert-icon\"  [ngClass]=\"{'enabled-icon': card.public}\">add_alert</i>-->\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"card-actions\">\n      <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\"\n              [matTooltipPosition]=\"'below'\" (click)=\"view()\">\n        <i class=\"material-icons\">art_track</i>\n      </button>\n      <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\"\n              [matTooltipPosition]=\"'below'\" (click)=\"edit()\">\n        <i class=\"material-icons\">edit</i>\n      </button>\n      <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\"\n              [matTooltipPosition]=\"'below'\" (click)=\"remove()\">\n        <i class=\"material-icons\">clear</i>\n      </button>\n    </div>\n    <div class=\"card-description\">\n      <p>{{card.description}}</p>\n    </div>\n  </div>\n\n  <div class=\"card-footer\">\n    <div class=\"stats\">\n      <div class=\"icons\">\n        <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\"\n                matTooltip=\"{{ card.public ? 'Make it Private' : 'Make it Public'}}\" [matTooltipPosition]=\"'below'\"\n                (click)=\"publish(!card.public)\">\n          <i *ngIf=\"card.public\" class=\"material-icons\">lock_open</i>\n          <i *ngIf=\"!card.public\" class=\"material-icons\">lock</i>\n        </button>\n        <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Share\"\n                [matTooltipPosition]=\"'below'\">\n          <i class=\"material-icons\">share</i>\n        </button>\n        <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Copy\"\n                [matTooltipPosition]=\"'below'\">\n          <i class=\"material-icons\">add_circle_outline</i>\n        </button>\n      </div>\n      <span>Created: {{card.created | date}}</span>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".card{height:295px}.card-header{height:90px;padding-top:15px!important;padding-bottom:15px!important}.card-header>div{justify-content:center;align-items:center;height:100%}.card-header h4{flex:1 1 100%;font-size:21px;font-weight:500;margin-bottom:0}.card-header small{display:block}.card-header i{position:absolute;font-size:20px;cursor:pointer}.card-header i.favorite{right:5px}.card-header i.alert-icon{left:5px;bottom:5px}.card-header i.enabled-icon{color:red}.card-description{height:150px;width:100%;overflow:hidden}.card-description p{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6}.card-footer .stats{display:block;width:100%}.card-footer .stats .icons{float:left}.card-footer .stats .icons button{padding:0}.card-footer .stats .icons button i{display:block;cursor:pointer}.card-footer .stats span{float:right}.card .card-header-primary .card-icon,.card .card-header-primary .card-text,.card .card-header-primary:not(.card-header-icon):not(.card-header-text),.card.bg-primary,.card.card-rotate.bg-primary .back,.card.card-rotate.bg-primary .front{background:linear-gradient(60deg,#7595a4,#5b7c8a)}"]
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [
    { type: MatDialog }
];
CardComponent.propDecorators = {
    card: [{ type: Input }],
    viewCard: [{ type: Output }],
    editCard: [{ type: Output }],
    removeCard: [{ type: Output }],
    publishCard: [{ type: Output }],
    likeCard: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CardComponent.prototype.card;
    /** @type {?} */
    CardComponent.prototype.viewCard;
    /** @type {?} */
    CardComponent.prototype.editCard;
    /** @type {?} */
    CardComponent.prototype.removeCard;
    /** @type {?} */
    CardComponent.prototype.publishCard;
    /** @type {?} */
    CardComponent.prototype.likeCard;
    /** @type {?} */
    CardComponent.prototype.dialog;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaterialModule {
}
MaterialModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatStepperModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    MatExpansionModule,
                    MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatMenuModule,
                    MatNativeDateModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    MatSliderModule,
                    MatSlideToggleModule,
                    MatSnackBarModule,
                    MatSortModule,
                    MatTableModule,
                    MatTreeModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule
                ],
                imports: [],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CardComponent,
                    ConfirmationComponent
                ],
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    MaterialModule
                ],
                exports: [CardComponent],
                entryComponents: [ConfirmationComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Card, CardComponent, CardModule, ConfirmationComponent, FormTypes, NotesSearchInfo, SelectionType, MaterialModule as ɵa };
//# sourceMappingURL=components.js.map
