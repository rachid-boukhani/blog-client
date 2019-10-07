/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { Card } from './interfaces/card.interface';
import { MatDialog } from '@angular/material';
var CardComponent = /** @class */ (function () {
    function CardComponent(dialog) {
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
    CardComponent.prototype.setMyStyles = /**
     * @return {?}
     */
    function () {
        return (this.card && this.card.image) ? {
            'background-image': "url(" + this.card.image + ")"
        } : {};
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        console.warn('edit: card: ', this.card);
        this.editCard.emit(this.card.id);
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.remove = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialog.open(ConfirmationComponent, {
            width: '600px',
            data: {
                title: 'Confirm Deletion',
                message: "Are you sure you want to permanently remove <small class=\"text-danger bold\">" + this.card.name + "</small>?"
            },
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result) {
                _this.removeCard.emit(_this.card.id);
            }
        }));
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.view = /**
     * @return {?}
     */
    function () {
        this.viewCard.emit(this.card.id);
    };
    /**
     * @param {?} status
     * @return {?}
     */
    CardComponent.prototype.publish = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialog.open(ConfirmationComponent, {
            width: '600px',
            data: {
                title: 'Confirm Publication',
                message: "Are you sure you want to make <small class=\"text-danger bold\">" + this.card.name + "</small>\n          " + (status ? ' public' : 'private') + "?"
            },
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result) {
                _this.publishCard.emit({
                    id: _this.card.id,
                    status: status
                });
            }
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    CardComponent.prototype.like = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.likeCard.emit({
            id: this.card.id,
            status: status
        });
    };
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'idaciti-card',
                    template: "<div class=\"card card-chart\">\n\n  <div class=\"card-header card-header-primary\" data-header-animation=\"true\"\n       [ngClass]=\"{'card-header-image': card.image}\" [ngStyle]=\"setMyStyles()\">\n    <div>\n      <i class=\"material-icons favorite\" (click)=\"like(!card.liked)\"\n         [ngClass]=\"{'enabled-icon': card.liked}\"> {{ card.liked ? 'favorite' : 'favorite_border' }}</i>\n\n      <h4 class=\"text-center\">{{card.name}}</h4>\n      <small class=\"text-center\">{{card.author}}</small>\n      <!--<i class=\"material-icons alert-icon\"  [ngClass]=\"{'enabled-icon': card.public}\">add_alert</i>-->\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"card-actions\">\n      <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\"\n              [matTooltipPosition]=\"'below'\" (click)=\"view()\">\n        <i class=\"material-icons\">art_track</i>\n      </button>\n      <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\"\n              [matTooltipPosition]=\"'below'\" (click)=\"edit()\">\n        <i class=\"material-icons\">edit</i>\n      </button>\n      <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\"\n              [matTooltipPosition]=\"'below'\" (click)=\"remove()\">\n        <i class=\"material-icons\">clear</i>\n      </button>\n    </div>\n    <div class=\"card-description\">\n      <p>{{card.description}}</p>\n    </div>\n  </div>\n\n  <div class=\"card-footer\">\n    <div class=\"stats\">\n      <div class=\"icons\">\n        <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\"\n                matTooltip=\"{{ card.public ? 'Make it Private' : 'Make it Public'}}\" [matTooltipPosition]=\"'below'\"\n                (click)=\"publish(!card.public)\">\n          <i *ngIf=\"card.public\" class=\"material-icons\">lock_open</i>\n          <i *ngIf=\"!card.public\" class=\"material-icons\">lock</i>\n        </button>\n        <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Share\"\n                [matTooltipPosition]=\"'below'\">\n          <i class=\"material-icons\">share</i>\n        </button>\n        <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Copy\"\n                [matTooltipPosition]=\"'below'\">\n          <i class=\"material-icons\">add_circle_outline</i>\n        </button>\n      </div>\n      <span>Created: {{card.created | date}}</span>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".card{height:295px}.card-header{height:90px;padding-top:15px!important;padding-bottom:15px!important}.card-header>div{justify-content:center;align-items:center;height:100%}.card-header h4{flex:1 1 100%;font-size:21px;font-weight:500;margin-bottom:0}.card-header small{display:block}.card-header i{position:absolute;font-size:20px;cursor:pointer}.card-header i.favorite{right:5px}.card-header i.alert-icon{left:5px;bottom:5px}.card-header i.enabled-icon{color:red}.card-description{height:150px;width:100%;overflow:hidden}.card-description p{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6}.card-footer .stats{display:block;width:100%}.card-footer .stats .icons{float:left}.card-footer .stats .icons button{padding:0}.card-footer .stats .icons button i{display:block;cursor:pointer}.card-footer .stats span{float:right}.card .card-header-primary .card-icon,.card .card-header-primary .card-text,.card .card-header-primary:not(.card-header-icon):not(.card-header-text),.card.bg-primary,.card.card-rotate.bg-primary .back,.card.card-rotate.bg-primary .front{background:linear-gradient(60deg,#7595a4,#5b7c8a)}"]
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    CardComponent.propDecorators = {
        card: [{ type: Input }],
        viewCard: [{ type: Output }],
        editCard: [{ type: Output }],
        removeCard: [{ type: Output }],
        publishCard: [{ type: Output }],
        likeCard: [{ type: Output }]
    };
    return CardComponent;
}());
export { CardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDO0lBZ0JFLHVCQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBTjFCLGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM1RCxhQUFRLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUQsZUFBVSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlELGdCQUFXLEdBQWtELElBQUksWUFBWSxFQUFtQyxDQUFDO1FBQ2pILGFBQVEsR0FBa0QsSUFBSSxZQUFZLEVBQW1DLENBQUM7SUFHeEgsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLGtCQUFrQixFQUFFLFNBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQUc7U0FDOUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7OztJQUVELDRCQUFJOzs7SUFBSjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCw4QkFBTTs7O0lBQU47UUFBQSxpQkFhQzs7WUFaTyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDeEQsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsT0FBTyxFQUFFLG1GQUErRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksY0FBVzthQUNsSDtTQUNGLENBQUM7UUFDRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTTtZQUN0QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNEJBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELCtCQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBQWQsaUJBaUJDOztZQWhCTyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDeEQsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsT0FBTyxFQUFFLHFFQUFpRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksNkJBQ3BGLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLE9BQUc7YUFDdEM7U0FDRixDQUFDO1FBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU07WUFDdEMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLEVBQUUsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2hCLE1BQU0sUUFBQTtpQkFDUCxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw0QkFBSTs7OztJQUFKLFVBQUssTUFBTTtRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsTUFBTSxRQUFBO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBekVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsb2pGQUFvQztvQkFFcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFQUSxTQUFTOzs7dUJBVWYsS0FBSzsyQkFFTCxNQUFNOzJCQUNOLE1BQU07NkJBQ04sTUFBTTs4QkFDTixNQUFNOzJCQUNOLE1BQU07O0lBNkRULG9CQUFDO0NBQUEsQUEzRUQsSUEyRUM7U0FyRVksYUFBYTs7O0lBRXhCLDZCQUFvQjs7SUFFcEIsaUNBQXNFOztJQUN0RSxpQ0FBc0U7O0lBQ3RFLG1DQUF3RTs7SUFDeEUsb0NBQTJIOztJQUMzSCxpQ0FBd0g7O0lBRTVHLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2NhcmQuaW50ZXJmYWNlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWRhY2l0aS1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2FyZDogQ2FyZDtcblxuICBAT3V0cHV0KCkgdmlld0NhcmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Q2FyZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlbW92ZUNhcmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaXNoQ2FyZDogRXZlbnRFbWl0dGVyPHsgaWQ6IHN0cmluZzsgc3RhdHVzOiBib29sZWFuIH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGlkOiBzdHJpbmc7IHN0YXR1czogYm9vbGVhbiB9PigpO1xuICBAT3V0cHV0KCkgbGlrZUNhcmQ6IEV2ZW50RW1pdHRlcjx7IGlkOiBzdHJpbmc7IHN0YXR1czogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpZDogc3RyaW5nOyBzdGF0dXM6IGJvb2xlYW4gfT4oKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHtcbiAgfVxuXG4gIHNldE15U3R5bGVzKCkge1xuICAgIHJldHVybiAodGhpcy5jYXJkICYmIHRoaXMuY2FyZC5pbWFnZSkgPyB7XG4gICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoJHt0aGlzLmNhcmQuaW1hZ2V9KWBcbiAgICB9IDoge307XG4gIH1cblxuICBlZGl0KCkge1xuICAgIGNvbnNvbGUud2FybignZWRpdDogY2FyZDogJywgdGhpcy5jYXJkKTtcbiAgICB0aGlzLmVkaXRDYXJkLmVtaXQodGhpcy5jYXJkLmlkKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICc2MDBweCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGlvbicsXG4gICAgICAgIG1lc3NhZ2U6IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVybWFuZW50bHkgcmVtb3ZlIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyIGJvbGRcIj4ke3RoaXMuY2FyZC5uYW1lfTwvc21hbGw+P2BcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FyZC5lbWl0KHRoaXMuY2FyZC5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2aWV3KCkge1xuICAgIHRoaXMudmlld0NhcmQuZW1pdCh0aGlzLmNhcmQuaWQpO1xuICB9XG5cbiAgcHVibGlzaChzdGF0dXMpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICc2MDBweCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnQ29uZmlybSBQdWJsaWNhdGlvbicsXG4gICAgICAgIG1lc3NhZ2U6IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbWFrZSA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlciBib2xkXCI+JHt0aGlzLmNhcmQubmFtZX08L3NtYWxsPlxuICAgICAgICAgICR7c3RhdHVzID8gJyBwdWJsaWMnIDogJ3ByaXZhdGUnfT9gXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnB1Ymxpc2hDYXJkLmVtaXQoe1xuICAgICAgICAgIGlkOiB0aGlzLmNhcmQuaWQsXG4gICAgICAgICAgc3RhdHVzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbGlrZShzdGF0dXMpIHtcbiAgICB0aGlzLmxpa2VDYXJkLmVtaXQoe1xuICAgICAgaWQ6IHRoaXMuY2FyZC5pZCxcbiAgICAgIHN0YXR1c1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==