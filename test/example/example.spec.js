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
    const example = new Example();

    const result = example.substract(7,3);

    expect(result).to.equal(4);
  });

  it('should power', () => {
    const example = new Example();

    const result = example.pow(2,3);

    expect(result).to.equal(8);
  });

  it('should do sqr rt', () => {
    const example = new Example();

    expect(example.sqrt).not.to.be.undefined;
  });

});