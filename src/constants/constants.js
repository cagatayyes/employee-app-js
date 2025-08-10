import {msg} from '@lit/localize';

export const EMPLOYEE = {
  DEFAULT_EMPLOYEE: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    dateOfEmployment: '',
    phone: '',
    email: '',
    department: '',
    position: 'Junior',
  },
  DEPARTMENTS: [
    {value: 'Analytics', label: msg('Analytics')},
    {value: 'Tech', label: msg('Tech')},
  ],
  POSITIONS: [
    {value: 'Junior', label: msg('Junior')},
    {value: 'Medior', label: msg('Medior')},
    {value: 'Senior', label: msg('Senior')},
  ],
};

export const ROUTES = {
  HOME: '/',
  EDIT: '/edit/:id',
  ADD: '/add',
};

export const FORM_MODES = {
  ADD: 'add',
  EDIT: 'edit',
};

export const LOCALES = {
  EN: 'en',
  TR: 'tr',
};

export const EVENT_NAMES = {
  LOCALE_CHANGED: 'locale-changed',
  EDIT_EMPLOYEE: 'edit-employee',
  DELETE_EMPLOYEE: 'delete-employee',
  FORM_SUBMIT: 'form-submit',
  FORM_CANCEL: 'form-cancel',
  VALUE_CHANGED: 'value-changed',
  PAGE_CHANGE: 'page-change',
  VIEW_CHANGED: 'view-changed',
};

export const POPUP_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

export const VIEW_MODES = {
  LIST: 'list',
  GRID: 'grid',
};
