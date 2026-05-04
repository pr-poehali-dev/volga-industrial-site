import { useState } from "react";
import Icon from "@/components/ui/icon";

const QUARRY_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/a53c1f4b-11a0-43df-beb3-8480faca1b7f.jpg";
const FLEET_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/1adaaf25-452b-4412-88fd-7acb70db1849.jpg";
const PLANT_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/81943a82-fb20-49a1-b29e-cf95aa95d2ea.jpg";

const PRODUCTS = [
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

const INDUSTRIES = [
  { name: "Дорожное строительство", icon: "Construction", product: "Щебень, Минпорошок" },
  { name: "Газобетон и ЖБИ", icon: "Building2", product: "Известь" },
  { name: "Сельское хозяйство", icon: "Sprout", product: "Известь молотая" },
  { name: "Химическая промышленность", icon: "FlaskConical", product: "Известь комовая" },
  { name: "Энергетика и ЖКХ", icon: "Zap", product: "Известь, Щебень" },
  { name: "Строительство", icon: "Hammer", product: "Весь ассортимент" },
];

const LOGISTICS_STEPS = [
  { label: "Карьер", icon: "Mountain", desc: "Добыча сырья" },
  { label: "Завод", icon: "Factory", desc: "Переработка" },
  { label: "Причал", icon: "Anchor", desc: "Погрузка флота" },
  { label: "Флот", icon: "Ship", desc: "Доставка по Волге" },
  { label: "Клиент", icon: "Building2", desc: "Разгрузка на объекте" },
];

const STATS = [
  { value: "ТОП‑10", label: "производителей РФ", icon: "Award" },
  { value: "1863", label: "год основания", icon: "History" },
  { value: "300+", label: "сотрудников", icon: "Users" },
  { value: "2 млн т", label: "объём в год", icon: "BarChart3" },
];

const CLIENTS = [
  "АВТОДОР", "РОСАВТОДОР", "ЛСР", "ГАЗПРОМ", "РОСАТОМ",
  "ТЕХНОНИКОЛЬ", "СИБУР", "КНАУФ",
];

const TIMELINE = [
  { year: "1863", event: "Основание известкового производства на берегу Волги" },
  { year: "1920", event: "Национализация и расширение карьера. Запуск механизации" },
  { year: "1965", event: "Строительство речного причала. Формирование собственного флота" },
  { year: "1998", event: "Приватизация. Модернизация оборудования" },
  { year: "2010", event: "Запуск производства минерального порошка МП-1 и МП-2" },
  { year: "2020", event: "Цифровизация. Лаборатория контроля качества ISO 9001" },
  { year: "2024", event: "Расширение флота. Новые маршруты поставок" },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", company: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber flex items-center justify-center">
                <Icon name="Mountain" size={16} className="text-background" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold tracking-wider text-foreground leading-none">ВОЛЖСКИЙ ЗАВОД</div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">С 1863 года</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              {[
                { label: "Продукция", id: "products" },
                { label: "Решения", id: "industries" },
                { label: "Логистика", id: "logistics" },
                { label: "Партнёрам", id: "partners" },
                { label: "О компании", id: "about" },
                { label: "Контакты", id: "contacts" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-muted-foreground hover:text-amber transition-colors font-body tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:+78001234567" className="hidden md:flex items-center gap-2 text-sm text-foreground hover:text-amber transition-colors">
                <Icon name="Phone" size={14} className="text-amber" />
                <span className="font-display tracking-wide">8 800 123-45-67</span>
              </a>
              <button
                onClick={() => scrollTo("contacts")}
                className="bg-amber text-background text-sm font-display font-medium px-4 py-2 tracking-wider hover:bg-amber-dark transition-colors"
              >
                ПОЛУЧИТЬ КП
              </button>
              <button
                className="lg:hidden text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="container px-4 py-4 flex flex-col gap-3">
              {[
                { label: "Продукция", id: "products" },
                { label: "Отраслевые решения", id: "industries" },
                { label: "Логистика", id: "logistics" },
                { label: "Партнёрам", id: "partners" },
                { label: "О компании", id: "about" },
                { label: "Контакты", id: "contacts" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-sm text-muted-foreground hover:text-amber transition-colors py-1"
                >
                  {item.label}
                </button>
              ))}
              <a href="tel:+78001234567" className="flex items-center gap-2 text-sm text-amber mt-2">
                <Icon name="Phone" size={14} />
                8 800 123-45-67
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background border-t border-border">
        <div className="flex">
          <button onClick={() => scrollTo("contacts")} className="flex-1 bg-amber text-background py-3 text-xs font-display font-semibold tracking-wider">
            ПОЛУЧИТЬ КП
          </button>
          <a href="tel:+78001234567" className="flex-1 flex items-center justify-center gap-1 bg-secondary text-foreground py-3 text-xs font-display tracking-wider">
            <Icon name="Phone" size={12} />
            ПОЗВОНИТЬ
          </a>
        </div>
      </div>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${QUARRY_IMG})` }} />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 opacity-10 grid-bg" />

        <div className="relative z-10 container max-w-7xl mx-auto px-4 pt-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-12 h-px bg-amber" />
              <span className="text-amber text-xs font-display tracking-widest uppercase">Волжский завод — С 1863 года</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider text-foreground mb-6 uppercase leading-none">
              ИЗВЕСТЬ.<br />
              ЩЕБЕНЬ.<br />
              <span className="text-amber">МИНПОРОШОК.</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-xl font-body font-light leading-relaxed">
              Производство и доставка нерудных материалов по Волге и всей России. Собственный речной флот, лаборатория контроля качества, отгрузка от 20 тонн.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => scrollTo("contacts")}
                className="bg-amber text-background font-display font-semibold px-8 py-4 tracking-widest text-sm hover:bg-amber-dark transition-colors"
              >
                ПОЛУЧИТЬ КП
              </button>
              <button
                onClick={() => scrollTo("products")}
                className="border border-border text-foreground font-display px-8 py-4 tracking-widest text-sm hover:border-amber hover:text-amber transition-colors bg-transparent"
              >
                СКАЧАТЬ ПРАЙС
              </button>
              <button
                onClick={() => scrollTo("partners")}
                className="border border-border text-foreground font-display px-8 py-4 tracking-widest text-sm hover:border-amber hover:text-amber transition-colors bg-transparent"
              >
                СТАТЬ ДИЛЕРОМ
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {STATS.map((stat) => (
                <div key={stat.value} className="bg-background/80 backdrop-blur-sm px-6 py-5">
                  <div className="font-display text-3xl font-bold text-amber tracking-wider">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="text-xs text-muted-foreground tracking-widest uppercase">Прокрутите</div>
          <Icon name="ChevronDown" size={16} className="text-amber" />
        </div>
      </section>

      {/* LOGISTICS SCHEME */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 px-4 py-2 mb-4">
              <Icon name="Ship" size={14} className="text-amber" />
              <span className="text-amber text-xs font-display tracking-widest uppercase">Ключевое преимущество</span>
            </div>
            <h2 className="font-display text-3xl font-semibold text-foreground tracking-wider uppercase">
              Собственный речной флот
            </h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-lg mx-auto">
              Прямая цепочка от карьера до причала клиента — без посредников
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center">
            {LOGISTICS_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center px-6 py-4">
                  <div className="w-14 h-14 bg-secondary border border-border flex items-center justify-center mb-3">
                    <Icon name={step.icon} size={22} className="text-amber" />
                  </div>
                  <div className="font-display text-sm font-semibold text-foreground tracking-wider uppercase">{step.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{step.desc}</div>
                </div>
                {i < LOGISTICS_STEPS.length - 1 && (
                  <div className="flex items-center -mx-1">
                    <div className="w-8 h-px bg-amber" />
                    <Icon name="ChevronRight" size={16} className="text-amber -ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { icon: "Ship", title: "Водная доставка", desc: "Собственный флот — баржи грузоподъёмностью до 3000 т. Поставки вдоль всей Волги." },
              { icon: "Train", title: "Ж/Д доставка", desc: "Ж/Д тупик на территории завода. Полувагоны и хопперы. Вся Россия." },
              { icon: "Truck", title: "Автодоставка", desc: "Автосамосвалы от 20 т. Доставка в радиусе 500 км. Срок — 1–3 дня." },
            ].map((item) => (
              <div key={item.title} className="bg-card px-6 py-5 flex gap-4">
                <div className="w-10 h-10 bg-secondary border border-border flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name={item.icon} size={16} className="text-amber" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground tracking-wider uppercase mb-1">{item.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-amber" />
                <span className="text-amber text-xs font-display tracking-widest uppercase">Продукция</span>
              </div>
              <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase">
                Каталог продукции
              </h2>
            </div>
            <button
              onClick={() => scrollTo("contacts")}
              className="hidden md:flex items-center gap-2 text-amber text-sm font-display tracking-wider hover:underline"
            >
              Запросить прайс
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-card p-8 hover:bg-secondary transition-colors group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center group-hover:border-amber transition-colors">
                    <Icon name={product.icon} size={20} className="text-amber" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-xs px-2 py-1 font-display tracking-widest uppercase ${product.available ? "bg-green-900/40 text-green-400 border border-green-800/40" : "bg-secondary text-muted-foreground border border-border"}`}>
                      {product.available ? "В наличии" : "Под заказ"}
                    </span>
                    <span className="text-xs text-muted-foreground font-body">{product.minShip}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground tracking-wider uppercase mb-1">{product.name}</h3>
                <div className="text-xs text-amber font-body mb-3">{product.code}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-body">{product.desc}</p>

                <div className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 bg-amber flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <button
                    onClick={() => scrollTo("contacts")}
                    className="flex-1 bg-amber text-background text-xs font-display font-semibold py-3 tracking-widest hover:bg-amber-dark transition-colors"
                  >
                    ЗАПРОСИТЬ КП
                  </button>
                  <button
                    onClick={() => scrollTo("contacts")}
                    className="px-4 border border-border text-muted-foreground text-xs font-display tracking-wider hover:border-amber hover:text-amber transition-colors py-3"
                  >
                    ПАСПОРТ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-20 bg-card border-y border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-amber" />
              <span className="text-amber text-xs font-display tracking-widest uppercase">Применение</span>
            </div>
            <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase">
              Отраслевые решения
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl text-sm">
              Подбираем продукт под конкретную технологию и ГОСТ. Консультация инженера — бесплатно.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.name}
                className="bg-card px-6 py-6 hover:bg-secondary transition-colors group cursor-pointer"
                onClick={() => scrollTo("contacts")}
              >
                <div className="w-10 h-10 bg-secondary border border-border flex items-center justify-center mb-4 group-hover:border-amber transition-colors">
                  <Icon name={industry.icon} size={16} className="text-amber" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground tracking-wider uppercase mb-2">{industry.name}</h3>
                <div className="text-xs text-amber font-body mb-3">{industry.product}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-amber transition-colors font-display tracking-wider">
                  Подобрать продукт
                  <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGISTICS */}
      <section id="logistics" className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-amber" />
                <span className="text-amber text-xs font-display tracking-widest uppercase">Логистика</span>
              </div>
              <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase mb-6">
                Доставим<br />куда угодно
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Собственный речной флот — наше главное конкурентное преимущество. Причал на территории завода позволяет отгружать материалы напрямую на баржи без промежуточного хранения. Доставляем по Волге, Каме, Оке и в любую точку России по ж/д и авто.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "Ship", label: "Речная доставка", info: "Волга, Кама, Ока — от 500 до 3000 т за рейс" },
                  { icon: "Train", label: "Ж/Д", info: "Ж/Д тупик на заводе, полувагоны, хопперы" },
                  { icon: "Truck", label: "Авто", info: "Самосвалы до 30 т, 1–3 дня, радиус 500 км" },
                  { icon: "MapPin", label: "Самовывоз", info: "Со склада завода, пн–пт 7:00–17:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 bg-card border border-border">
                    <div className="w-10 h-10 bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={16} className="text-amber" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-semibold text-foreground tracking-wider uppercase">{item.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.info}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("contacts")}
                className="bg-amber text-background font-display font-semibold px-8 py-4 tracking-widest text-sm hover:bg-amber-dark transition-colors"
              >
                РАССЧИТАТЬ ДОСТАВКУ
              </button>
            </div>

            <div className="relative">
              <img src={FLEET_IMG} alt="Речной флот завода" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/90 backdrop-blur-sm border border-border p-4">
                  <div className="font-display text-sm font-semibold text-amber tracking-wider uppercase mb-1">Собственный флот</div>
                  <div className="text-xs text-muted-foreground">5 барж грузоподъёмностью 500–3000 тонн. Навигация апрель–ноябрь.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery calculator */}
          <div className="mt-12 p-8 bg-card border border-border">
            <h3 className="font-display text-xl font-semibold text-foreground tracking-wider uppercase mb-6">Калькулятор доставки</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Продукт</label>
                <select className="w-full bg-secondary border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber">
                  <option>Известь</option>
                  <option>Щебень</option>
                  <option>Минпорошок</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Объём (тонн)</label>
                <input type="number" placeholder="100" className="w-full bg-secondary border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber placeholder:text-muted-foreground/50" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Вид доставки</label>
                <select className="w-full bg-secondary border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber">
                  <option>Водный</option>
                  <option>Ж/Д</option>
                  <option>Авто</option>
                </select>
              </div>
              <div className="flex flex-col justify-end">
                <button onClick={() => scrollTo("contacts")} className="bg-amber text-background font-display font-semibold py-3 tracking-widest text-xs hover:bg-amber-dark transition-colors">
                  РАССЧИТАТЬ
                </button>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              * Точную стоимость рассчитает менеджер. Заявка обрабатывается в течение 2 часов.
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container max-w-7xl mx-auto px-4 mb-6">
          <div className="text-xs text-muted-foreground uppercase tracking-widest font-display text-center">Нам доверяют</div>
        </div>
        <div className="flex flex-wrap justify-center">
          {CLIENTS.map((client) => (
            <div key={client} className="px-8 py-4 border-r border-border last:border-r-0">
              <span className="font-display text-sm font-semibold text-muted-foreground tracking-widest uppercase hover:text-foreground transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-amber" />
                <span className="text-amber text-xs font-display tracking-widest uppercase">Партнёрам</span>
              </div>
              <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase mb-6">
                Стать<br />дилером
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Ищем надёжных партнёров в регионах для реализации нашей продукции. Предлагаем выгодные условия, маркетинговую поддержку и приоритетную отгрузку.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "Percent", label: "Маржинальность", value: "от 15%" },
                  { icon: "Clock", label: "Отсрочка платежа", value: "до 30 дней" },
                  { icon: "Headphones", label: "Поддержка менеджера", value: "24/7" },
                  { icon: "FileText", label: "Маркетинг", value: "Предоставляем" },
                ].map((item) => (
                  <div key={item.label} className="bg-card border border-border p-4">
                    <Icon name={item.icon} size={16} className="text-amber mb-2" />
                    <div className="text-lg font-display font-bold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("contacts")}
                className="bg-amber text-background font-display font-semibold px-8 py-4 tracking-widest text-sm hover:bg-amber-dark transition-colors"
              >
                ОСТАВИТЬ ЗАЯВКУ
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-foreground tracking-wider uppercase mb-6">Условия сотрудничества</h3>
              {[
                { step: "01", title: "Подача заявки", desc: "Заполните форму или позвоните менеджеру. Ответ — в течение 1 рабочего дня." },
                { step: "02", title: "Переговоры", desc: "Обсуждаем объёмы, цены, логистику. Индивидуальный подход для каждого партнёра." },
                { step: "03", title: "Договор", desc: "Подписываем дилерское соглашение. Регистрируем в CRM, назначаем менеджера." },
                { step: "04", title: "Первая отгрузка", desc: "Начинаем работу. Маркетинговые материалы и техническая поддержка — сразу." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-card border border-border p-5">
                  <div className="font-display text-3xl font-bold text-amber/20 leading-none w-12 flex-shrink-0">{item.step}</div>
                  <div>
                    <div className="font-display text-sm font-semibold text-foreground tracking-wider uppercase mb-1">{item.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-card border-t border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-amber" />
            <span className="text-amber text-xs font-display tracking-widest uppercase">О компании</span>
          </div>
          <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase mb-12">160 лет на Волге</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div className="relative">
              <img src={PLANT_IMG} alt="Производство завода" className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Волжский завод — один из старейших производителей нерудных материалов России. Основанный в 1863 году как небольшое известковое производство на берегу Волги, за полтора века вырос в крупное промышленное предприятие с полным циклом от добычи до доставки.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Сегодня мы входим в ТОП-10 производителей извести в РФ. Ежегодно производим более 2 миллионов тонн продукции и доставляем её в 40+ регионов России. Собственный речной флот — уникальное преимущество, которое позволяет нам обеспечивать конкурентную стоимость доставки.
              </p>
              <div className="grid grid-cols-3 gap-px bg-border">
                {[
                  { value: "40+", label: "регионов" },
                  { value: "500+", label: "клиентов" },
                  { value: "ISO 9001", label: "сертификат" },
                ].map((item) => (
                  <div key={item.label} className="bg-card px-4 py-4 text-center">
                    <div className="font-display text-2xl font-bold text-amber">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground tracking-wider uppercase mb-8">История</h3>
            <div className="relative">
              <div className="absolute left-16 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-4">
                {TIMELINE.map((item) => (
                  <div key={item.year} className="flex gap-6 items-start">
                    <div className="font-display text-sm font-bold text-amber tracking-wider w-12 flex-shrink-0 text-right pt-3 hidden md:block">{item.year}</div>
                    <div className="w-3 h-3 bg-amber mt-3.5 flex-shrink-0 hidden md:block relative z-10" />
                    <div className="bg-background border border-border p-4 flex-1">
                      <div className="md:hidden text-xs text-amber font-display font-bold mb-1">{item.year}</div>
                      <div className="text-sm text-foreground font-body">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-background border border-border">
            <h3 className="font-display text-base font-semibold text-foreground tracking-wider uppercase mb-4">Документы и реквизиты</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Устав", "ИНН / ОГРН", "Сертификаты ГОСТ", "Лицензия на добычу"].map((doc) => (
                <button
                  key={doc}
                  onClick={() => scrollTo("contacts")}
                  className="flex items-center gap-2 bg-secondary border border-border px-4 py-3 text-xs text-muted-foreground hover:text-amber hover:border-amber transition-colors font-display tracking-wide"
                >
                  <Icon name="FileDown" size={12} className="text-amber flex-shrink-0" />
                  {doc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-background border-t border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-amber" />
                <span className="text-amber text-xs font-display tracking-widest uppercase">Контакты</span>
              </div>
              <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase mb-8">
                Свяжитесь<br />с нами
              </h2>

              <div className="space-y-6 mb-10">
                {[
                  { icon: "Phone", label: "Отдел продаж", value: "8 800 123-45-67", hint: "Бесплатно по России" },
                  { icon: "Mail", label: "Email", value: "sales@volga-zavod.ru", hint: "Ответ в течение 2 часов" },
                  { icon: "MapPin", label: "Адрес", value: "г. Тольятти, ул. Заводская, 1", hint: "Самара, Тольятти, Сызрань" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт 8:00–18:00", hint: "Суббота — по договорённости" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-secondary border border-border flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name={item.icon} size={16} className="text-amber" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest font-display mb-0.5">{item.label}</div>
                      <div className="font-display text-base font-semibold text-foreground tracking-wide">{item.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.hint}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <a href="tel:+78001234567" className="flex-1 flex items-center justify-center gap-2 bg-amber text-background font-display font-semibold py-3 tracking-widest text-xs hover:bg-amber-dark transition-colors">
                  <Icon name="Phone" size={14} />
                  ПОЗВОНИТЬ
                </a>
                <a href="mailto:sales@volga-zavod.ru" className="flex-1 flex items-center justify-center gap-2 border border-border text-foreground font-display py-3 tracking-widest text-xs hover:border-amber hover:text-amber transition-colors">
                  <Icon name="Mail" size={14} />
                  НАПИСАТЬ
                </a>
              </div>
            </div>

            <div className="bg-card border border-border p-8">
              {formSent ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 bg-amber/10 border border-amber/30 flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" size={28} className="text-amber" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-wider uppercase mb-2">Заявка отправлена</h3>
                  <p className="text-sm text-muted-foreground">Менеджер свяжется с вами в течение 2 часов в рабочее время.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-wider uppercase mb-2">Получить коммерческое предложение</h3>
                  <p className="text-xs text-muted-foreground mb-6">Заполните форму — менеджер перезвонит в течение 2 часов и подготовит расчёт</p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Имя *</label>
                        <input required type="text" placeholder="Иван Петров" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-secondary border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber placeholder:text-muted-foreground/50" />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Телефон *</label>
                        <input required type="tel" placeholder="+7 (___) ___-__-__" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-secondary border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber placeholder:text-muted-foreground/50" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Компания</label>
                      <input type="text" placeholder="ООО «Ваша компания»" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-secondary border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber placeholder:text-muted-foreground/50" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Сообщение</label>
                      <textarea rows={4} placeholder="Опишите потребность: продукт, объём, вид доставки..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-secondary border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber placeholder:text-muted-foreground/50 resize-none" />
                    </div>
                    <button type="submit" className="w-full bg-amber text-background font-display font-semibold py-4 tracking-widest text-sm hover:bg-amber-dark transition-colors">
                      ОТПРАВИТЬ ЗАЯВКУ
                    </button>
                    <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber flex items-center justify-center">
                <Icon name="Mountain" size={16} className="text-background" />
              </div>
              <div>
                <div className="font-display text-base font-semibold tracking-wider text-foreground">ВОЛЖСКИЙ ЗАВОД</div>
                <div className="text-xs text-muted-foreground tracking-widest">Известь · Щебень · Минпорошок · С 1863</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              {[
                { label: "Продукция", id: "products" },
                { label: "Логистика", id: "logistics" },
                { label: "Партнёрам", id: "partners" },
                { label: "О компании", id: "about" },
                { label: "Контакты", id: "contacts" },
              ].map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="text-xs text-muted-foreground hover:text-amber transition-colors font-display tracking-wider uppercase">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-muted-foreground">© 2024 Волжский завод. Все права защищены.</div>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-muted-foreground hover:text-amber transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-amber transition-colors">Реквизиты</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="h-12 lg:hidden" />
    </div>
  );
}