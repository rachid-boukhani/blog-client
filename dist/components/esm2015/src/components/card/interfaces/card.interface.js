/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Card {
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
export class NotesSearchInfo {
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
export { SelectionType };
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
export { FormTypes };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvY2FyZC9pbnRlcmZhY2VzL2NhcmQuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8sSUFBSTtJQUFqQjtRQUVFLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUVqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2Ysb0JBQWUsR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztJQUUzRCxDQUFDO0NBQUE7OztJQVRDLGtCQUFZOztJQUNaLG9CQUFVOztJQUNWLDJCQUFpQjs7SUFDakIsc0JBQWdCOztJQUNoQixzQkFBZTs7SUFDZixxQkFBZTs7SUFDZix1QkFBZTs7SUFDZiwrQkFBeUQ7O0lBQ3pELHFCQUFlOztBQUdqQixNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQUNFLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsWUFBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7UUFDdEMsa0JBQWEsR0FBa0IsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUNqRCxjQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7SUFDcEMsQ0FBQztDQUFBOzs7SUFWQywrQkFBVTs7SUFDVix5Q0FBbUI7O0lBQ25CLHdDQUFzQjs7SUFDdEIsa0NBQXVDOztJQUN2QyxrQ0FBbUM7O0lBQ25DLDZDQUEwQjs7SUFDMUIsNENBQXNDOztJQUN0Qyx3Q0FBaUQ7O0lBQ2pELG9DQUFpQzs7SUFDakMsd0NBQWtDOzs7O0lBSWxDLEtBQU0sS0FBSztJQUNYLE9BQVEsT0FBTztJQUNmLElBQUssSUFBSTtJQUNULEtBQU0sS0FBSztJQUNYLElBQUssSUFBSTtJQUNULE9BQVEsT0FBTzs7Ozs7SUFJZixNQUFPLEtBQUs7SUFDWixNQUFPLEtBQUs7SUFDWixNQUFPLEtBQUs7SUFDWixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixLQUFNLEtBQUs7SUFDWCxNQUFPLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJpb2QgfSBmcm9tICdjb21wb25lbnRzL3NyYy9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIENhcmQge1xuICBpZD86IHN0cmluZztcbiAgbmFtZSA9ICcnO1xuICBkZXNjcmlwdGlvbiA9ICcnO1xuICBhdXRob3I/OiBzdHJpbmc7XG4gIHB1YmxpYyA9IGZhbHNlO1xuICBsaWtlZDogYm9vbGVhbjtcbiAgY3JlYXRlZD86IERhdGU7XG4gIG5vdGVzU2VhcmNoSW5mbzogTm90ZXNTZWFyY2hJbmZvID0gbmV3IE5vdGVzU2VhcmNoSW5mbygpO1xuICBpbWFnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIE5vdGVzU2VhcmNoSW5mbyB7XG4gIHRleHQgPSAnJztcbiAgcHJveGltaXR5VmFsdWUgPSAyO1xuICBzaG93RW50aXJlU2V0ID0gZmFsc2U7XG4gIG1pblllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyO1xuICBtYXhZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICBzZWFyY2hBbGxDb21wYW5pZXMgPSB0cnVlO1xuICBzZWxlY3RlZENvbXBhbmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZS5BTEw7XG4gIGZvcm1UeXBlczogQXJyYXk8Rm9ybVR5cGVzPiA9IFtdO1xuICBmaXNjYWxQZXJpb2RzOiBBcnJheTxQZXJpb2Q+ID0gW107XG59XG5cbmV4cG9ydCBlbnVtIFNlbGVjdGlvblR5cGUge1xuICBBTEwgPSAnQWxsJyxcbiAgRk9STVMgPSAnRk9STVMnLFxuICBFUiA9ICdFUicsXG4gIE1EQSA9ICdNREEnLFxuICBDTCA9ICdDTCcsXG4gIFBST1hZID0gJ1BST1hZJyxcbn1cblxuZXhwb3J0IGVudW0gRm9ybVR5cGVzIHtcbiAgX0FMTCA9ICdBTEwnLFxuICBfQU5OID0gJ0FOTicsXG4gIF9RVFIgPSAnUVRSJyxcbiAgXzEwSyA9ICcxMC1LJyxcbiAgXzEwUSA9ICcxMC1RJyxcbiAgXzhLID0gJzgtSycsXG4gIF8yMEYgPSAnMjAtRicsXG59XG5cbiJdfQ==