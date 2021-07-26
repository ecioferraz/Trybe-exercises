// Parte 1

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Exercício 1
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº ${order.address.number}, AP ${order.address.apartment}.`
}

console.log(customerInfo(order));

// Exercício 2
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizzas = Object.keys(order.order.pizza);
  order.name = 'Luiz Silva';
  order.payment.total = 50;

  return `Olá, ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`
}

console.log(orderModifier(order));

// Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const addNew = (object, key, value) => {
  object[key] = value;
};

addNew(lesson2, 'turno', 'noite');

// Exercício 2
const listKeys = object => Object.keys(object);

listKeys();

// Exercício 3
const objSize = object => Object.keys(object).length;

objSize();

// Exercício 4
const listValues = object => Object.values(object);

listValues();

// Exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Exercício 6
const totalStudents = (object) => {
  let total = 0;
  const keys = Object.keys(object);
  for (index in keys) {
    total += object[keys[index]].numeroEstudantes;
  }
  return total;
}

totalStudents(allLessons);

// Exercício 7
const getValueByNumber = (obj, position) => Object.values(obj)[position];

console.log(getValueByNumber(lesson1, 0));

// Exercício 8
const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  let verify;
  for (index in entries) {
    entries[index][0] === key && entries[index][1] === value ? verify = true : verify = false;
    }
  return verify;
}

console.log(verifyPair(lesson2, 'professor', 'Carlos'));