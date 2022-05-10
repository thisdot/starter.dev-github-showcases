export interface BeforePageEvent {
  before?: string | null;
}
export interface AfterPageEvent {
  after?: string | null;
}
export type ChangePageEvent = BeforePageEvent | AfterPageEvent;
