type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
  register?(): string;
};
const user: User = {
  firstName: "Vitor",
  lastName: "Araujo",
  age: 20,
  email: "vitor@example.com",
  password: "123456",
  orders: [{ productId: "order1", price: 100 }],
  register() {
    return "a";
  },
};
user.password;

const printLog = (message: string): void => {};

printLog(user.password!);

type Author = {
  books: string[];
};

const author: Author & User = {
  books: ["Book 1", "Book 2"],
  age: 30,
  email: "author@example.com",
  firstName: "Author",
  lastName: "Name",
  password: "securepassword",
  orders: [],
  register() {
    return "a";
  },
};

interface UserInterface {
  readonly firstName: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  firstName: "Email User",
  email: "emailuser@example.com",
  login() {
    return "a";
  },
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: AuthorInterface & UserInterface = {
  email: "newauthor@example.com",
  firstName: "Felipe",
  books: [],
  login() {
    return "a";
  },
};

type Grade = string | number;
const grade: Grade = 1;
// interface dá erro
