import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (amount) {
      this._amount = amount;
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amountValue) {
    this._amount = amountValue;
  }

  get currency() {
    return this._currency;
  }

  set currency(currencyValue) {
    this._currency = currencyValue;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
