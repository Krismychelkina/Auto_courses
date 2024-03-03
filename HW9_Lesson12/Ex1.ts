// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.
interface User {
  name: string;
  age: number;
  occupation: string;
  car?: string;
  children?: number;
}

const users: User[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2,
  },
];

users.forEach((user) => {
  console.log(`Имя: ${user.name}`);
  console.log(`Возраст: ${user.age}`);
  console.log(`Профессия: ${user.occupation}`);
  if (user.car) {
    console.log(`Машина: ${user.car}`);
  }
  if (user.children) {
    console.log(`Дети: ${user.children}`);
  }
  console.log('');
});
