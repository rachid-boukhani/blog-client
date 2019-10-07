/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { Card } from './interfaces/card.interface';
import { MatDialog } from '@angular/material';
export class CardComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUTlDLE1BQU0sT0FBTyxhQUFhOzs7O0lBVXhCLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFOMUIsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzVELGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM1RCxlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDOUQsZ0JBQVcsR0FBa0QsSUFBSSxZQUFZLEVBQW1DLENBQUM7UUFDakgsYUFBUSxHQUFrRCxJQUFJLFlBQVksRUFBbUMsQ0FBQztJQUd4SCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLGtCQUFrQixFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUc7U0FDOUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7OztJQUVELElBQUk7UUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsTUFBTTs7Y0FDRSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDeEQsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsT0FBTyxFQUFFLCtFQUErRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVzthQUNsSDtTQUNGLENBQUM7UUFDRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDcEM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxNQUFNOztjQUNOLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUN4RCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixPQUFPLEVBQUUsaUVBQWlFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNwRixNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHO2FBQ3RDO1NBQ0YsQ0FBQztRQUNGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2hCLE1BQU07aUJBQ1AsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLE1BQU07UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLE1BQU07U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF6RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixvakZBQW9DO2dCQUVwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFQUSxTQUFTOzs7bUJBVWYsS0FBSzt1QkFFTCxNQUFNO3VCQUNOLE1BQU07eUJBQ04sTUFBTTswQkFDTixNQUFNO3VCQUNOLE1BQU07Ozs7SUFOUCw2QkFBb0I7O0lBRXBCLGlDQUFzRTs7SUFDdEUsaUNBQXNFOztJQUN0RSxtQ0FBd0U7O0lBQ3hFLG9DQUEySDs7SUFDM0gsaUNBQXdIOztJQUU1RywrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4vaW50ZXJmYWNlcy9jYXJkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lkYWNpdGktY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNhcmQ6IENhcmQ7XG5cbiAgQE91dHB1dCgpIHZpZXdDYXJkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgZWRpdENhcmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZW1vdmVDYXJkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcHVibGlzaENhcmQ6IEV2ZW50RW1pdHRlcjx7IGlkOiBzdHJpbmc7IHN0YXR1czogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpZDogc3RyaW5nOyBzdGF0dXM6IGJvb2xlYW4gfT4oKTtcbiAgQE91dHB1dCgpIGxpa2VDYXJkOiBFdmVudEVtaXR0ZXI8eyBpZDogc3RyaW5nOyBzdGF0dXM6IGJvb2xlYW4gfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgaWQ6IHN0cmluZzsgc3RhdHVzOiBib29sZWFuIH0+KCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XG4gIH1cblxuICBzZXRNeVN0eWxlcygpIHtcbiAgICByZXR1cm4gKHRoaXMuY2FyZCAmJiB0aGlzLmNhcmQuaW1hZ2UpID8ge1xuICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKCR7dGhpcy5jYXJkLmltYWdlfSlgXG4gICAgfSA6IHt9O1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgICBjb25zb2xlLndhcm4oJ2VkaXQ6IGNhcmQ6ICcsIHRoaXMuY2FyZCk7XG4gICAgdGhpcy5lZGl0Q2FyZC5lbWl0KHRoaXMuY2FyZC5pZCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtYXRpb25Db21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNjAwcHgnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogJ0NvbmZpcm0gRGVsZXRpb24nLFxuICAgICAgICBtZXNzYWdlOiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHBlcm1hbmVudGx5IHJlbW92ZSA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlciBib2xkXCI+JHt0aGlzLmNhcmQubmFtZX08L3NtYWxsPj9gXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNhcmQuZW1pdCh0aGlzLmNhcmQuaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmlldygpIHtcbiAgICB0aGlzLnZpZXdDYXJkLmVtaXQodGhpcy5jYXJkLmlkKTtcbiAgfVxuXG4gIHB1Ymxpc2goc3RhdHVzKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtYXRpb25Db21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNjAwcHgnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogJ0NvbmZpcm0gUHVibGljYXRpb24nLFxuICAgICAgICBtZXNzYWdlOiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG1ha2UgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXIgYm9sZFwiPiR7dGhpcy5jYXJkLm5hbWV9PC9zbWFsbD5cbiAgICAgICAgICAke3N0YXR1cyA/ICcgcHVibGljJyA6ICdwcml2YXRlJ30/YFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5wdWJsaXNoQ2FyZC5lbWl0KHtcbiAgICAgICAgICBpZDogdGhpcy5jYXJkLmlkLFxuICAgICAgICAgIHN0YXR1c1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxpa2Uoc3RhdHVzKSB7XG4gICAgdGhpcy5saWtlQ2FyZC5lbWl0KHtcbiAgICAgIGlkOiB0aGlzLmNhcmQuaWQsXG4gICAgICBzdGF0dXNcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=