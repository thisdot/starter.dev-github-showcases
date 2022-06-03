export enum ToasterType {
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
}

export interface ToastEvent {
  title: string;
  message: string;
  type: ToasterType;
}
