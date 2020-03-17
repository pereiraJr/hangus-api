interface User {
  name: string;
  phone: string;
  cpf: string;
  products: Product[];
}

interface Product {
  name: string;
  price: DoubleRange;
  description: string;
}
