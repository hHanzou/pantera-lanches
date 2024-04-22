export type MenuItem = {
  id: number;
  name: string;
  price: string;
  description: string;
  type: string;
};

export const menu: MenuItem[] = [
  {
    id: 1,
    name: "Misto Quente",
    price: "R$ 4,00",
    description: "Pão, queijo e presunto.",
    type: "Burguer",
  },
  {
    id: 2,
    name: "X-Burguer",
    price: "R$ 5,00",
    description: "Pão, Hambúrguer, queijo e presunto.",
    type: "Burguer",
  },
  {
    id: 3,
    name: "X-Simples",
    price: "R$ 7,00",
    description:
      "Pão, Hambúrguer, queijo, presunto, maionese, tomate, alface e batata-palha.",
    type: "Burguer",
  },
  {
    id: 4,
    name: "X-Salada",
    price: "R$ 10,00",
    description:
      "Pão, hambúrguer, queijo, presunto, alface, milho e batata palha.",
    type: "Burguer",
  },
  {
    id: 5,
    name: "X-Egg",
    price: "R$ 12,00",
    description:
      "Pão, hambúrguer, ovo, queijo, presunto, alface, tomate, milho e batata palha.",
    type: "Burguer",
  },
  {
    id: 6,
    name: "X-Frango",
    price: "R$ 15,00",
    description:
      "Pão, hambúrguer, frango, queijo, presunto, alface, tomate, milho e batata palha.",
    type: "Burguer",
  },
  {
    id: 7,
    name: "X-Calabresa",
    price: "R$ 15,00",
    description:
      "Pão, hambúrguer, calabresa, queijo, presunto, alface, tomate, milho e batata palha.",
    type: "Burguer",
  },
  {
    id: 8,
    name: "X-Bacon",
    price: "R$ 18,00",
    description:
      "Pão, hambúrguer, bacon, queijo, presunto, alface, tomate, milho e batata palha.",
    type: "Burguer",
  },
  {
    id: 9,
    name: "À Moda da Casa",
    price: "R$ 25,00",
    description:
      "Pão, hambúrguer, queijo, presunto, ovo, salsicha, calabresa, alface, tomate, milho e batata palha.",
    type: "Burguer",
  },
  {
    id: 10,
    name: "Dog Prensado",
    price: "R$ 10,00",
    description:
      "Pão, maionese, ketchup, salsicha, milho, ervilha e batata palha.",
    type: "Dog",
  },
  {
    id: 11,
    name: "Dog Duplo",
    price: "R$ 12,00",
    description:
      "Pão, maionese, ketchup, salsicha, milho, ervilha e batata palha.",
    type: "Dog",
  },
  {
    id: 12,
    name: "Dog Frango",
    price: "R$ 14,00",
    description:
      "Pão, maionese, ketchup, salsicha, frango, milho, ervilha e batata palha.",
    type: "Dog",
  },
  {
    id: 13,
    name: "Dog Calabresa",
    price: "R$ 16,00",
    description:
      "Pão, maionese, ketchup, salsicha, calabresa, milho, ervilha e batata palha.",
    type: "Dog",
  },
  {
    id: 14,
    name: "Dog Bacon",
    price: "R$ 18,00",
    description:
      "Pão, maionese, ketchup, salsicha, bacon, milho, ervilha e batata palha.",
    type: "Dog",
  },
  {
    id: 15,
    name: "Combo Família",
    price: "R$ 59,90",
    description: "10 X-Simples + Coca-Cola 2 litros",
    type: "Combo",
  },
  {
    id: 16,
    name: "Batata Frita (300g)",
    price: "R$ 14,00",
    description: "",
    type: "Fries",
  },
  {
    id: 17,
    name: "Batata Frita e Calabresa (300g)",
    price: "R$ 16,00",
    description: "",
    type: "Fries",
  },
  {
    id: 18,
    name: "Batata Frita e Bacon (300g)",
    price: "R$ 18,00",
    description: "",
    type: "Fries",
  },
  {
    id: 19,
    name: "Kuat 2l",
    price: "R$ 8,00",
    description: "",
    type: "Drink",
  },
  {
    id: 20,
    name: "Coca-Cola 2l",
    price: "R$ 12,00",
    description: "",
    type: "Drink",
  },
  {
    id: 21,
    name: "Coca-Cola 600ml",
    price: "R$ 8,00",
    description: "",
    type: "Drink",
  },
  {
    id: 22,
    name: "Coca Lata 350ml",
    price: "R$ 5,00",
    description: "",
    type: "Drink",
  },
  {
    id: 23,
    name: "Fanta Uva 350ml",
    price: "R$ 5,00",
    description: "",
    type: "Drink",
  },
  {
    id: 24,
    name: "Fanta Laranja 350ml",
    price: "R$ 5,00",
    description: "",
    type: "Drink",
  },
  {
    id: 25,
    name: "Hambúrguer",
    price: "R$ 1,50",
    description: "",
    type: "Add",
  },
  {
    id: 26,
    name: "Ovo",
    price: "R$ 1,50",
    description: "",
    type: "Add",
  },
  {
    id: 27,
    name: "Salsicha",
    price: "R$ 1,50",
    description: "",
    type: "Add",
  },
  {
    id: 28,
    name: "Calabresa",
    price: "R$ 3,00",
    description: "",
    type: "Add",
  },
  {
    id: 29,
    name: "Bacon",
    price: "R$ 3,00",
    description: "",
    type: "Add",
  },
];
