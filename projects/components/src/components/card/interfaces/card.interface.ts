import { Period } from 'components/src/interfaces';

export class Card {
  id?: string;
  name = '';
  description = '';
  author?: string;
  public = false;
  liked: boolean;
  created?: Date;
  notesSearchInfo: NotesSearchInfo = new NotesSearchInfo();
  image?: string;
}

export class NotesSearchInfo {
  text = '';
  proximityValue = 2;
  showEntireSet = false;
  minYear = new Date().getFullYear() - 2;
  maxYear = new Date().getFullYear();
  searchAllCompanies = true;
  selectedCompanies: Array<string> = [];
  selectionType: SelectionType = SelectionType.ALL;
  formTypes: Array<FormTypes> = [];
  fiscalPeriods: Array<Period> = [];
}

export enum SelectionType {
  ALL = 'All',
  FORMS = 'FORMS',
  ER = 'ER',
  MDA = 'MDA',
  CL = 'CL',
  PROXY = 'PROXY',
}

export enum FormTypes {
  _ALL = 'ALL',
  _ANN = 'ANN',
  _QTR = 'QTR',
  _10K = '10-K',
  _10Q = '10-Q',
  _8K = '8-K',
  _20F = '20-F',
}

