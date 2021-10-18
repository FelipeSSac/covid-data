const ensureDate = require('./ensureDate');

describe('formatted date from 1 day before: (YYYY-MM-DD)',() => {
  test('return yesterday date', () => {
    expect(ensureDate(new Date())).toBe('2021-10-16');
  });

  test('by giving 08/11/2021, return 08/10/2021 formatted date', () => {
    expect(ensureDate(new Date('08/11/2021'))).toBe('2021-08-10');
  });

  test('by giving 02/15/2021 return 02/14/2021 date', () => {
    expect(ensureDate(new Date('02/15/2021'))).toBe('2021-02-14');
  });
})
