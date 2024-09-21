import { PromiseState } from './libs/state.enum';

class CustomPromise<T> {
  private _state: PromiseState;
  private _value: T | undefined;
  private _reason: string | undefined;
  private _thenQueue: ((value: T) => void)[];
  private _finallyQueue: ((value: T) => void)[];

  constructor(computation: (resolve: (value: T) => void, reject: (reason: string) => void) => void) {
    this._state = PromiseState.PENDING;

    this._value = undefined;
    this._reason = undefined;

    this._thenQueue = [];
    this._finallyQueue = [];

    setTimeout(() => {
      try {
        computation(
          this._onFulfilled.bind(this),
          this._onRejected.bind(this)
        )
      } catch(err) {

      }
    })
  }

  public then() {

  }

  public catch() {

  }

  public finally() {

  }

  private _onFulfilled(value: T) {
    this._state = PromiseState.FULFILLED;
    this._value = value;
    console.log(`Resolved with value: ${this._value}`);
  }

  private _onRejected() {

  }
};

const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve(99), 1000);
});


const originalPromise = new Promise((resolve, reject) => {
  resolve(99);
})


const plusOnePromise = originalPromise.then(value => value + 1);
