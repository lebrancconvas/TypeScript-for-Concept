import { PromiseState } from './libs/state.enum';
class CustomPromise<T> {
  private _state: PromiseState;
  private _value: T | undefined;
  private _reason: string | undefined;
  
  constructor(computation) {
    this._state = PromiseState.PENDING;
    this._value = undefined;
    this._reason = undefined;
  }
};
