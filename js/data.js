const user = {
  name: "Vika",
  surname: "Bondarenko",
  userPhoto: "Avatar.JPG",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "EifelTower.JPG", alt: "Подорож до західної Європи" },
    { src: "DreamCar.JPG", alt: "Авто моєї мрії" },
    { src: "University.JPG", alt: "Закінчити університет" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Креативність" },
  { month: "Жовтень", skill: "JavaScript" },
  { month: "Листопад", skill: "Java" },
  { month: "Грудень", skill: "Python" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
