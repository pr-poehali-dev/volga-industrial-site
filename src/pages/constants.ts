// Original images (dark dramatic)
export const QUARRY_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/a53c1f4b-11a0-43df-beb3-8480faca1b7f.jpg";
export const FLEET_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/1adaaf25-452b-4412-88fd-7acb70db1849.jpg";
export const PLANT_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/81943a82-fb20-49a1-b90e-cf95aa95d2ea.jpg";
// New bright images
export const QUARRY_BRIGHT = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/e0243287-42d4-423a-a7dd-ddae184ebdce.jpg";
export const FACTORY_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/4f5300ab-e1e1-45c0-867c-5022b10d39ab.jpg";
export const LAB_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/bf75c889-006b-4297-a837-6cda13f32232.jpg";
export const FLEET_IMG2 = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/1adaaf25-452b-4412-88fd-7acb70db1849.jpg";

export const PRODUCTS = [
  {
    id: 1,
    name: "Известь",
    code: "ГОСТ 9179-2018",
    desc: "Комовая, молотая, гашёная. Применяется в строительстве, сельском хозяйстве, химии.",
    specs: ["Активность CaO от 70%", "Скорость гашения 5–25 мин", "Фракция 0–60 мм"],
    icon: "FlaskConical",
    available: true,
    minShip: "от 20 тонн",
  },
  {
    id: 2,
    name: "Щебень",
    code: "ГОСТ 8267-93",
    desc: "Известняковый щебень фракций 5–40 мм. Дорожное строительство, ЖБИ, балластный слой.",
    specs: ["Марка прочности М600–М800", "Морозостойкость F75–F150", "Лещадность до 15%"],
    icon: "Mountain",
    available: true,
    minShip: "от 50 тонн",
  },
  {
    id: 3,
    name: "Минеральный порошок",
    code: "ГОСТ 52129-2003",
    desc: "МП-1, МП-2. Для производства асфальтобетонных смесей и гидроизоляции.",
    specs: ["Тонкость помола <0.071 мм", "Водостойкость 75%+", "Влажность до 1%"],
    icon: "Layers",
    available: true,
    minShip: "от 20 тонн",
  },
  {
    id: 4,
    name: "Известняковые изделия",
    code: "ТУ",
    desc: "Блоки, плиты, бутовый камень. Облицовка, ландшафт, строительство.",
    specs: ["Размеры по заказу", "Обработка на ЧПУ", "Натуральный камень"],
    icon: "Box",
    available: false,
    minShip: "от 1 тонны",
  },
];

export const INDUSTRIES = [
  { name: "Дорожное строительство", icon: "Construction", product: "Щебень, Минпорошок" },
  { name: "Газобетон и ЖБИ", icon: "Building2", product: "Известь" },
  { name: "Сельское хозяйство", icon: "Sprout", product: "Известь молотая" },
  { name: "Химическая промышленность", icon: "FlaskConical", product: "Известь комовая" },
  { name: "Энергетика и ЖКХ", icon: "Zap", product: "Известь, Щебень" },
  { name: "Строительство", icon: "Hammer", product: "Весь ассортимент" },
];

export const LOGISTICS_STEPS = [
  { label: "Карьер", icon: "Mountain", desc: "Добыча сырья" },
  { label: "Завод", icon: "Factory", desc: "Переработка" },
  { label: "Причал", icon: "Anchor", desc: "Погрузка флота" },
  { label: "Флот", icon: "Ship", desc: "Доставка по Волге" },
  { label: "Клиент", icon: "Building2", desc: "Разгрузка на объекте" },
];

export const STATS = [
  { value: "ТОП‑10", label: "производителей РФ" },
  { value: "1863", label: "год основания" },
  { value: "300+", label: "сотрудников" },
  { value: "2 млн т", label: "объём в год" },
];

export const CLIENTS = ["АВТОДОР", "РОСАВТОДОР", "ЛСР", "ГАЗПРОМ", "РОСАТОМ", "ТЕХНОНИКОЛЬ", "СИБУР", "КНАУФ"];

export const TIMELINE = [
  { year: "1863", event: "Основание известкового производства на берегу Волги" },
  { year: "1920", event: "Национализация и расширение карьера. Запуск механизации" },
  { year: "1965", event: "Строительство речного причала. Формирование собственного флота" },
  { year: "1998", event: "Приватизация. Модернизация оборудования" },
  { year: "2010", event: "Запуск производства минерального порошка МП-1 и МП-2" },
  { year: "2020", event: "Цифровизация. Лаборатория контроля качества ISO 9001" },
  { year: "2024", event: "Расширение флота. Новые маршруты поставок" },
];
