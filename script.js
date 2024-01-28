// Задача 1.

const arr = [1, 2, 3, 4, 5];

for(let number of arr) {
  let square = number * number;
  console.log(`${number} ${square}`);
}

// Задача 2.

const obj = {
  name: 'Esentur',
  age: 17,
  city: "Bishkek",
};

for(let dim in obj) {
  console.log(obj);
}

// Задача 3.

const text = ["Hello", "Esentur", "world"];

const [text1, , text2] = text;
console.log(text1, text2);

// Задача 4.

const user = {
	name: "Чынгыз",
	fuulName: "Айтматов",
	birthday: 1928,
	writtenBook: "Биринчи Мугалим!!",
};

const { name, fuulName, birthday, writtenBook } = user;
console.log(name, fuulName, birthday, writtenBook);

// Задача 5.

function getNumbers(...numbers) {
  const result1 = numbers.reduce((acc, num) => acc + num, 0);
  console.log(`${result1}`);
}

getNumbers(1, 2, 3);
getNumbers(5, 10, 15, 20);
getNumbers(2, 4);

function getNumbers(...user) {
  const result = user.reduce((acc, num) => acc + num, 0);
  console.log(result);
}

getNumbers(5, 10, 15, 20);
getNumbers(5, 10, 15, 20);
getNumbers(5, 10, 15, 20);


// Задача 6.

const arr1 = [1, 'Hello World', 58];
const arr2 = ['Hello', "Peaksoft Hause"];

const arr3 = ["Азамат агай", "Hello", ...arr1, ...arr2];
console.log(arr3);

// Задача 7.

const result1 = {
  name: 'Esentur',
  age: 17,
  city: "Bishkek",
};

const result2 = {
  fuulName: "Ismailov",
  country: "KR",
  adrest: "Гражданская 119.",
};

const result3 = {
  birthday: 2006,
  writtenBook: "Биринчи Мугалим!",
  telephone: "Poco M4 Pro 5 j",
  ...result1,
  ...result2,
};

console.log(result3);

// Задача 8.

const textUser = "Салам барыны Достор.";
for(let i of textUser) {
  console.log(i);
}


// Задача 9.

const result = [17, "Салам", true];
for(let index in result) {
  console.log(result);
}

// Задача 10.

const num = {
  name: 'Esentur',
  age: 17,
  city: {
    name: 'Bishkek',
    country: 'KR',
    adrest: 'Гражданская 119.',
  },
  seyHello: () => {
    console.log('Hello');
  },
};

const { age, ...rest  } = num;
  
  console.log(age);
  console.log(rest);


const user  = {
  name: 'Esentur',
  age: 17,
  city: {
    name: 'Bishkek',
    country: 'KR',
    adrest: 'Гражданская 119.',
  },
  seyHello: () => {
    console.log('Hello');
  },
}

const { city, ...rest} = user
console.log(city);
console.log(rest);

