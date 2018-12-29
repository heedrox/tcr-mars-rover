import Example from '../../src/example/example';

describe('Example file', () => {
  it('should add 2 and 3', () => {
    const example = new Example();

    const result = example.sum(2,3);

    expect(result).to.equal(5);
  });

  it('should multiply', () => {
    const example = new Example();

    const result = example.multiply(2,3);

    expect(result).to.equal(6);
  });

  it('should divide', () => {
    const example = new Example();

    const result = example.divide(6,3);

    expect(result).to.equal(2);
  });

  it('should substract', () => {
    expect(new Example().substract).not.to.be.undefined;
  });
});