import { StrengthPipe } from './strength.pipe';


describe('StrengthPipe', () => {

  it('should display week if strength is 5', () => {
    let pipe = new StrengthPipe();

    let val = pipe.transform(5);

    expect(val).toEqual('5 (weak)');
  });

  it('should display strong if strength is 10', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)');
  });
});
