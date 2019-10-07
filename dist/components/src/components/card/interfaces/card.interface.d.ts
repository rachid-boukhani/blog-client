import { Period } from 'components/src/interfaces';
export declare class Card {
    id?: string;
    name: string;
    description: string;
    author?: string;
    public: boolean;
    liked: boolean;
    created?: Date;
    notesSearchInfo: NotesSearchInfo;
    image?: string;
}
export declare class NotesSearchInfo {
    text: string;
    proximityValue: number;
    showEntireSet: boolean;
    minYear: number;
    maxYear: number;
    searchAllCompanies: boolean;
    selectedCompanies: Array<string>;
    selectionType: SelectionType;
    formTypes: Array<FormTypes>;
    fiscalPeriods: Array<Period>;
}
export declare enum SelectionType {
    ALL = "All",
    FORMS = "FORMS",
    ER = "ER",
    MDA = "MDA",
    CL = "CL",
    PROXY = "PROXY"
}
export declare enum FormTypes {
    _ALL = "ALL",
    _ANN = "ANN",
    _QTR = "QTR",
    _10K = "10-K",
    _10Q = "10-Q",
    _8K = "8-K",
    _20F = "20-F"
}
