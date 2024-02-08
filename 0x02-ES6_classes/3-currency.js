export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(codeType) {
    this._code = codeType;
  }

  get name() {
    return this._name;
  }

  set name(nameType) {
    this._name = nameType;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
