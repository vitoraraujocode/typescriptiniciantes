const returnValue = <T>(value: T): T => value;
const message = returnValue<string>("Hello world");
const count = returnValue<number>(5);

function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

const returnPromise = async (): Promise<number> => {
  return 5;
};

class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;
  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const newGenericNumber = new GenericNumber<number>(
  0,
  (x: number, y: number) => {
    return x + y;
  }
);
