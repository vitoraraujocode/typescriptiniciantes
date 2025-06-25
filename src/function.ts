interface MathFunc {
  (x: number, y: number): number;
}
const sum: MathFunc = (x: number, y: number): number => {
  return x + y;
};
const sub: MathFunc = (x: number, y: number) => {
  return x - y;
};

const Value = sum(5, 10);

const log = (message: string): void => {
  console.log(message);
};
