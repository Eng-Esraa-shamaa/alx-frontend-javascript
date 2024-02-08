export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
  get code() {
    this.code = _code;
  }
  set code(codeType) {
    this._code = codeType;
  }
  get name() {
    this.name = _name;
  }
  set name(nameType) {
    this._name = nameType;
  }
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
