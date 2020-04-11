export enum OperationStatus {
  NONE = 'NONE',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}

export interface OperationState {
  operationStatus?: OperationStatus;
  loading?: boolean;
  error?: string;
}
