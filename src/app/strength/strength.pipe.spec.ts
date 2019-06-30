import { StrengthPipe } from './strength.pipe';


describe('StrengthPipe', () => {

  it('should display week if strength is 5', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  });
});
