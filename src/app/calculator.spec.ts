import { Calculator } from './calculator';

describe('test for calculator', () => {
  describe('Test for multiply', () => {
    it('should return a nine', () => {
      //Arrange
      const calculator = new Calculator();
      //Act
      const rta = calculator.multiply(3, 3);
      //Assert
      expect(rta).toEqual(9);
    });

    it('should return a four', () => {
      //Arrange
      const calculator = new Calculator();
      //Act
      const rta = calculator.multiply(1, 4);
      //Assert
      expect(rta).toEqual(4);
    });
  });

  describe('test for divide', () => {
    it('should return a some numbers', () => {
      //Arrange
      const calculator = new Calculator();
      //Act
      expect(calculator.divide(6, 3)).toEqual(2);
      expect(calculator.divide(5, 2)).toEqual(2.5);
    });

    it('for a zero', () => {
      //Arrange
      const calculator = new Calculator();
      //Act
      expect(calculator.divide(6, 0)).toBeNull();
      expect(calculator.divide(5, 0)).toBeNull();
      expect(calculator.divide(545345345435, 0)).toBeNull();
    });

    it('test matchers', () => {
      const name = 'camilo';
      let name2;

      expect(name).toBeDefined();
      expect(name2).toBeUndefined();

      expect(1 + 3 === 4).toBeTruthy();
      expect(1 + 1 === 3).toBeFalse();

      expect(5).toBeLessThan(10);
      expect(25).toBeGreaterThan(10);

      expect('123456').toMatch(/123/);
      expect(['apples', 'oranges', 'pears']).toContain('oranges');
    });
  });
});
