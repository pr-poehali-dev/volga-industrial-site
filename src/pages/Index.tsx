import { useState } from "react";
import Icon from "@/components/ui/icon";

// Original images (dark dramatic)
const QUARRY_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/a53c1f4b-11a0-43df-beb3-8480faca1b7f.jpg";
const FLEET_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/1adaaf25-452b-4412-88fd-7acb70db1849.jpg";
const PLANT_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/81943a82-fb20-49a1-b90e-cf95aa95d2ea.jpg";
// New bright images
const QUARRY_BRIGHT = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/e0243287-42d4-423a-a7dd-ddae184ebdce.jpg";
const FACTORY_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/4f5300ab-e1e1-45c0-867c-5022b10d39ab.jpg";
const LAB_IMG = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/bf75c889-006b-4297-a837-6cda13f32232.jpg";
const FLEET_IMG2 = "https://cdn.poehali.dev/projects/eb835087-c60b-49b7-9842-01f92f90ba49/files/1adaaf25-452b-4412-88fd-7acb70db1849.jpg";

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
  { value: "ТОП‑10", label: "производителей РФ" },
  { value: "1863", label: "год основания" },
  { value: "300+", label: "сотрудников" },
  { value: "2 млн т", label: "объём в год" },
];

const CLIENTS = ["АВТОДОР", "РОСАВТОДОР", "ЛСР", "ГАЗПРОМ", "РОСАТОМ", "ТЕХНОНИКОЛЬ", "СИБУР", "КНАУФ"];

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

      {/* HEADER — glass */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-white-strong border-b border-border/60">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber flex items-center justify-center rounded-sm">
                <Icon name="Mountain" size={15} className="text-white" />
              </div>
              <div>
                <div className="font-display text-[17px] font-semibold tracking-wider text-foreground leading-none">ВОЛЖСКИЙ ЗАВОД</div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">С 1863 года</div>
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
                  className="text-sm text-muted-foreground hover:text-amber transition-colors font-body"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:+78001234567" className="hidden md:flex items-center gap-2 text-sm text-foreground hover:text-amber transition-colors">
                <Icon name="Phone" size={13} className="text-amber" />
                <span className="font-display tracking-wide">8 800 123-45-67</span>
              </a>
              <button
                onClick={() => scrollTo("contacts")}
                className="bg-amber text-white text-sm font-display font-medium px-5 py-2 rounded-sm tracking-wider hover:bg-amber-dark transition-colors shadow-md shadow-orange-200"
              >
                ПОЛУЧИТЬ КП
              </button>
              <button className="lg:hidden text-muted-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur border-t border-border/60">
            <div className="container px-4 py-4 flex flex-col gap-3">
              {[
                { label: "Продукция", id: "products" },
                { label: "Решения", id: "industries" },
                { label: "Логистика", id: "logistics" },
                { label: "Партнёрам", id: "partners" },
                { label: "О компании", id: "about" },
                { label: "Контакты", id: "contacts" },
              ].map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left text-sm text-muted-foreground hover:text-amber transition-colors py-1">
                  {item.label}
                </button>
              ))}
              <a href="tel:+78001234567" className="flex items-center gap-2 text-sm text-amber mt-2">
                <Icon name="Phone" size={14} /> 8 800 123-45-67
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-white-strong border-t border-border/50">
        <div className="flex">
          <button onClick={() => scrollTo("contacts")} className="flex-1 bg-amber text-white py-3.5 text-xs font-display font-semibold tracking-wider">ПОЛУЧИТЬ КП</button>
          <a href="tel:+78001234567" className="flex-1 flex items-center justify-center gap-1 text-foreground py-3.5 text-xs font-display tracking-wider">
            <Icon name="Phone" size={12} className="text-amber" /> ПОЗВОНИТЬ
          </a>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-bleed bright quarry photo */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${QUARRY_BRIGHT})` }} />
        {/* Light warm overlay — NOT dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />

        <div className="relative z-10 container max-w-7xl mx-auto px-4 pt-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5 animate-fade-in">
              <div className="w-10 h-px bg-amber" />
              <span className="text-amber text-xs font-display tracking-widest uppercase">Волжский завод — С 1863 года</span>
            </div>

            <h1 className="font-display text-5xl md:text-[72px] font-bold tracking-wider text-foreground mb-5 uppercase leading-none">
              ИЗВЕСТЬ.<br />
              ЩЕБЕНЬ.<br />
              <span className="text-amber">МИНПОРОШОК.</span>
            </h1>

            <p className="text-base text-foreground/70 mb-8 max-w-lg font-body font-light leading-relaxed">
              Производство и доставка нерудных материалов по Волге и всей России. Собственный речной флот, лаборатория контроля качества, отгрузка от 20 тонн.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <button onClick={() => scrollTo("contacts")} className="bg-amber text-white font-display font-semibold px-8 py-4 tracking-widest text-sm hover:bg-amber-dark transition-colors shadow-lg shadow-orange-200/60 rounded-sm">
                ПОЛУЧИТЬ КП
              </button>
              <button onClick={() => scrollTo("products")} className="glass font-display px-8 py-4 tracking-widest text-sm text-foreground hover:border-amber/50 transition-colors rounded-sm">
                СКАЧАТЬ ПРАЙС
              </button>
              <button onClick={() => scrollTo("partners")} className="glass font-display px-8 py-4 tracking-widest text-sm text-foreground hover:border-amber/50 transition-colors rounded-sm">
                СТАТЬ ДИЛЕРОМ
              </button>
            </div>

            {/* Stats — glass cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {STATS.map((stat) => (
                <div key={stat.value} className="glass rounded-sm px-5 py-4">
                  <div className="font-display text-2xl font-bold text-amber tracking-wider">{stat.value}</div>
                  <div className="text-[11px] text-foreground/60 mt-1 uppercase tracking-widest font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating right image card */}
        <div className="absolute right-8 bottom-16 hidden xl:block w-72">
          <div className="glass rounded overflow-hidden shadow-xl">
            <img src={FLEET_IMG2} alt="Речной флот" className="w-full h-40 object-cover" />
            <div className="px-4 py-3">
              <div className="text-xs font-display font-semibold text-amber tracking-wider uppercase">Собственный флот</div>
              <div className="text-xs text-foreground/60 mt-1">5 барж · 500–3000 т · апрель–ноябрь</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="text-[10px] text-foreground/50 tracking-widest uppercase">Прокрутите</div>
          <Icon name="ChevronDown" size={16} className="text-amber" />
        </div>
      </section>

      {/* ===== PHOTO STRIP — 3 фото в ряд ===== */}
      <section className="relative">
        <div className="grid grid-cols-3 h-52 md:h-72">
          <div className="relative overflow-hidden group">
            <img src={QUARRY_IMG} alt="Карьер" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="glass-dark px-3 py-1.5 rounded-sm">
                <span className="text-white text-xs font-display tracking-wider uppercase">Карьер</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img src={FACTORY_IMG} alt="Завод" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="glass-dark px-3 py-1.5 rounded-sm">
                <span className="text-white text-xs font-display tracking-wider uppercase">Завод</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img src={LAB_IMG} alt="Лаборатория" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="glass-dark px-3 py-1.5 rounded-sm">
                <span className="text-white text-xs font-display tracking-wider uppercase">Лаборатория</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOGISTICS SCHEME ===== */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 glass-amber px-4 py-2 rounded-full mb-4">
              <Icon name="Ship" size={13} className="text-amber" />
              <span className="text-amber text-xs font-display tracking-widest uppercase">Ключевое преимущество</span>
            </div>
            <h2 className="font-display text-3xl font-semibold text-foreground tracking-wider uppercase">Собственный речной флот</h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-md mx-auto">Прямая цепочка от карьера до причала клиента — без посредников</p>
          </div>

          <div className="flex flex-wrap justify-center items-center mb-10">
            {LOGISTICS_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center px-5 py-3">
                  <div className="w-14 h-14 bg-secondary border border-border rounded-lg flex items-center justify-center mb-3 shadow-sm">
                    <Icon name={step.icon} size={22} className="text-amber" />
                  </div>
                  <div className="font-display text-sm font-semibold text-foreground tracking-wider uppercase">{step.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{step.desc}</div>
                </div>
                {i < LOGISTICS_STEPS.length - 1 && (
                  <div className="flex items-center -mx-1">
                    <div className="w-6 h-px bg-amber" />
                    <Icon name="ChevronRight" size={14} className="text-amber -ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "Ship", title: "Водная доставка", desc: "Собственный флот — баржи до 3000 т. Поставки вдоль всей Волги." },
              { icon: "Train", title: "Ж/Д доставка", desc: "Ж/Д тупик на территории завода. Полувагоны и хопперы. Вся Россия." },
              { icon: "Truck", title: "Автодоставка", desc: "Автосамосвалы от 20 т. Доставка в радиусе 500 км. Срок — 1–3 дня." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-lg px-6 py-5 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-amber/10 border border-amber/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-amber" />
                <span className="text-amber text-xs font-display tracking-widest uppercase">Продукция</span>
              </div>
              <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase">Каталог продукции</h2>
            </div>
            <button onClick={() => scrollTo("contacts")} className="hidden md:flex items-center gap-2 text-amber text-sm font-display tracking-wider hover:underline">
              Запросить прайс <Icon name="ArrowRight" size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-xl border border-border/60 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-amber/10 border border-amber/20 rounded-xl flex items-center justify-center group-hover:bg-amber/15 transition-colors">
                    <Icon name={product.icon} size={20} className="text-amber" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-xs px-2.5 py-1 font-display tracking-widest uppercase rounded-full ${product.available ? "bg-green-50 text-green-600 border border-green-200" : "bg-secondary text-muted-foreground border border-border"}`}>
                      {product.available ? "В наличии" : "Под заказ"}
                    </span>
                    <span className="text-xs text-muted-foreground font-body">{product.minShip}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground tracking-wider uppercase mb-1">{product.name}</h3>
                <div className="text-xs text-amber font-body mb-3">{product.code}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-body">{product.desc}</p>

                <div className="space-y-1.5 mb-6">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-foreground/60">
                      <div className="w-1.5 h-1.5 bg-amber rounded-full flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-5 border-t border-border/50">
                  <button onClick={() => scrollTo("contacts")} className="flex-1 bg-amber text-white text-xs font-display font-semibold py-3 tracking-widest hover:bg-amber-dark transition-colors rounded-sm shadow-md shadow-orange-100">
                    ЗАПРОСИТЬ КП
                  </button>
                  <button onClick={() => scrollTo("contacts")} className="px-4 border border-border text-muted-foreground text-xs font-display tracking-wider hover:border-amber hover:text-amber transition-colors py-3 rounded-sm">
                    ПАСПОРТ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES — on photo background ===== */}
      <section id="industries" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${QUARRY_BRIGHT})` }} />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

        <div className="relative z-10 container max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-px bg-amber" />
              <span className="text-amber text-xs font-display tracking-widest uppercase">Применение</span>
              <div className="w-8 h-px bg-amber" />
            </div>
            <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase">Отраслевые решения</h2>
            <p className="text-foreground/60 mt-3 max-w-xl mx-auto text-sm">Подбираем продукт под конкретную технологию и ГОСТ. Консультация инженера — бесплатно.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES.map((industry) => (
              <div key={industry.name} className="glass rounded-xl px-6 py-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer" onClick={() => scrollTo("contacts")}>
                <div className="w-10 h-10 bg-amber/15 border border-amber/25 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber/20 transition-colors">
                  <Icon name={industry.icon} size={16} className="text-amber" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground tracking-wider uppercase mb-1">{industry.name}</h3>
                <div className="text-xs text-amber font-body mb-3">{industry.product}</div>
                <div className="flex items-center gap-1 text-xs text-foreground/50 group-hover:text-amber transition-colors font-display tracking-wider">
                  Подобрать продукт <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOGISTICS DETAIL — photo right ===== */}
      <section id="logistics" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-amber" />
                <span className="text-amber text-xs font-display tracking-widest uppercase">Логистика</span>
              </div>
              <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase mb-6">Доставим<br />куда угодно</h2>
              <p className="text-foreground/60 text-sm leading-relaxed mb-8">
                Собственный речной флот — наше главное конкурентное преимущество. Причал на территории завода позволяет отгружать материалы напрямую на баржи без промежуточного хранения.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: "Ship", label: "Речная доставка", info: "Волга, Кама, Ока — от 500 до 3000 т за рейс" },
                  { icon: "Train", label: "Ж/Д", info: "Ж/Д тупик на заводе, полувагоны, хопперы" },
                  { icon: "Truck", label: "Авто", info: "Самосвалы до 30 т, 1–3 дня, радиус 500 км" },
                  { icon: "MapPin", label: "Самовывоз", info: "Со склада завода, пн–пт 7:00–17:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 bg-secondary/40 rounded-xl border border-border/40 hover:border-amber/30 transition-colors">
                    <div className="w-10 h-10 bg-amber/10 border border-amber/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={16} className="text-amber" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-semibold text-foreground tracking-wider uppercase">{item.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.info}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => scrollTo("contacts")} className="bg-amber text-white font-display font-semibold px-8 py-4 tracking-widest text-sm hover:bg-amber-dark transition-colors rounded-sm shadow-lg shadow-orange-100">
                РАССЧИТАТЬ ДОСТАВКУ
              </button>
            </div>

            <div className="relative">
              <img src={FLEET_IMG2} alt="Речной флот завода" className="w-full h-80 object-cover rounded-2xl shadow-xl" />
              {/* Floating glass badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 shadow-xl">
                <div className="font-display text-sm font-semibold text-amber tracking-wider uppercase mb-1">Собственный флот</div>
                <div className="text-xs text-foreground/60">5 барж · 500–3000 тонн</div>
              </div>
              {/* Factory photo inset */}
              <div className="absolute -top-4 -right-4 w-32 h-24 rounded-xl overflow-hidden shadow-xl border-2 border-white">
                <img src={FACTORY_IMG} alt="Завод" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Calculator */}
          <div className="mt-16 glass rounded-2xl p-8 shadow-md">
            <h3 className="font-display text-xl font-semibold text-foreground tracking-wider uppercase mb-6">Калькулятор доставки</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Продукт</label>
                <select className="w-full bg-white border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber rounded-sm">
                  <option>Известь</option><option>Щебень</option><option>Минпорошок</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Объём (тонн)</label>
                <input type="number" placeholder="100" className="w-full bg-white border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber rounded-sm placeholder:text-muted-foreground/40" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Вид доставки</label>
                <select className="w-full bg-white border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber rounded-sm">
                  <option>Водный</option><option>Ж/Д</option><option>Авто</option>
                </select>
              </div>
              <div className="flex flex-col justify-end">
                <button onClick={() => scrollTo("contacts")} className="bg-amber text-white font-display font-semibold py-3 tracking-widest text-xs hover:bg-amber-dark transition-colors rounded-sm shadow-md shadow-orange-100">
                  РАССЧИТАТЬ
                </button>
              </div>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">* Точную стоимость рассчитает менеджер в течение 2 часов.</div>
          </div>
        </div>
      </section>

      {/* ===== CLIENTS strip ===== */}
      <section className="py-10 bg-secondary/40 border-y border-border/40">
        <div className="container max-w-7xl mx-auto px-4 mb-5 text-center">
          <div className="text-xs text-muted-foreground uppercase tracking-widest font-display">Нам доверяют</div>
        </div>
        <div className="flex flex-wrap justify-center gap-0">
          {CLIENTS.map((client) => (
            <div key={client} className="px-8 py-3 border-r border-border/40 last:border-r-0">
              <span className="font-display text-sm font-semibold text-foreground/40 tracking-widest uppercase hover:text-amber transition-colors">{client}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section id="partners" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-amber" />
                <span className="text-amber text-xs font-display tracking-widest uppercase">Партнёрам</span>
              </div>
              <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase mb-6">Стать<br />дилером</h2>
              <p className="text-foreground/60 text-sm leading-relaxed mb-8">
                Ищем надёжных партнёров в регионах. Предлагаем выгодные условия, маркетинговую поддержку и приоритетную отгрузку.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "Percent", label: "Маржинальность", value: "от 15%" },
                  { icon: "Clock", label: "Отсрочка платежа", value: "до 30 дней" },
                  { icon: "Headphones", label: "Поддержка", value: "24/7" },
                  { icon: "FileText", label: "Маркетинг", value: "Предоставляем" },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-xl p-4 hover:shadow-md transition-shadow">
                    <Icon name={item.icon} size={16} className="text-amber mb-2" />
                    <div className="text-lg font-display font-bold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>

              <button onClick={() => scrollTo("contacts")} className="bg-amber text-white font-display font-semibold px-8 py-4 tracking-widest text-sm hover:bg-amber-dark transition-colors rounded-sm shadow-lg shadow-orange-100">
                ОСТАВИТЬ ЗАЯВКУ
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-foreground tracking-wider uppercase mb-6">Условия сотрудничества</h3>
              {[
                { step: "01", title: "Подача заявки", desc: "Заполните форму или позвоните. Ответ — в течение 1 рабочего дня." },
                { step: "02", title: "Переговоры", desc: "Обсуждаем объёмы, цены, логистику. Индивидуальный подход." },
                { step: "03", title: "Договор", desc: "Подписываем дилерское соглашение. Назначаем персонального менеджера." },
                { step: "04", title: "Первая отгрузка", desc: "Начинаем работу. Маркетинговые материалы — сразу." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-secondary/40 rounded-xl border border-border/40 p-5 hover:border-amber/30 transition-colors">
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

      {/* ===== ABOUT — on factory photo ===== */}
      <section id="about" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${FACTORY_IMG})` }} />
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />

        <div className="relative z-10 container max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-amber" />
            <span className="text-amber text-xs font-display tracking-widest uppercase">О компании</span>
          </div>
          <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase mb-10">160 лет на Волге</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
            <div>
              <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                Волжский завод — один из старейших производителей нерудных материалов России. Основанный в 1863 году как небольшое известковое производство, за полтора века вырос в крупное промышленное предприятие с полным циклом от добычи до доставки.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                Сегодня мы входим в ТОП-10 производителей извести в РФ. Ежегодно производим более 2 миллионов тонн продукции и доставляем её в 40+ регионов России.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "40+", label: "регионов" },
                  { value: "500+", label: "клиентов" },
                  { value: "ISO 9001", label: "сертификат" },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-xl px-4 py-4 text-center shadow-sm">
                    <div className="font-display text-2xl font-bold text-amber">{item.value}</div>
                    <div className="text-xs text-foreground/50 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lab image float */}
            <div className="relative">
              <img src={LAB_IMG} alt="Лаборатория" className="w-full h-60 object-cover rounded-2xl shadow-xl" />
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-3 shadow-lg">
                <div className="text-xs font-display font-semibold text-amber tracking-wider uppercase mb-0.5">Лаборатория</div>
                <div className="text-xs text-foreground/50">Контроль качества · ISO 9001</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="glass rounded-2xl p-8 shadow-md">
            <h3 className="font-display text-lg font-semibold text-foreground tracking-wider uppercase mb-6">История завода</h3>
            <div className="space-y-3">
              {TIMELINE.map((item) => (
                <div key={item.year} className="flex gap-4 items-start">
                  <div className="font-display text-sm font-bold text-amber tracking-wider w-12 flex-shrink-0 pt-0.5">{item.year}</div>
                  <div className="w-px bg-amber/20 self-stretch mx-1 flex-shrink-0" />
                  <div className="text-sm text-foreground/70 font-body pb-3 flex-1">{item.event}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 glass rounded-2xl p-6 shadow-md">
            <h3 className="font-display text-base font-semibold text-foreground tracking-wider uppercase mb-4">Документы и реквизиты</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Устав", "ИНН / ОГРН", "Сертификаты ГОСТ", "Лицензия на добычу"].map((doc) => (
                <button key={doc} onClick={() => scrollTo("contacts")} className="flex items-center gap-2 bg-white/70 border border-border/50 rounded-lg px-4 py-3 text-xs text-foreground/60 hover:text-amber hover:border-amber/40 transition-colors font-display tracking-wide">
                  <Icon name="FileDown" size={12} className="text-amber flex-shrink-0" />
                  {doc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-amber" />
                <span className="text-amber text-xs font-display tracking-widest uppercase">Контакты</span>
              </div>
              <h2 className="font-display text-4xl font-semibold text-foreground tracking-wider uppercase mb-8">Свяжитесь<br />с нами</h2>

              <div className="space-y-5 mb-10">
                {[
                  { icon: "Phone", label: "Отдел продаж", value: "8 800 123-45-67", hint: "Бесплатно по России" },
                  { icon: "Mail", label: "Email", value: "sales@volga-zavod.ru", hint: "Ответ в течение 2 часов" },
                  { icon: "MapPin", label: "Адрес", value: "г. Тольятти, ул. Заводская, 1", hint: "Самара, Тольятти, Сызрань" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт 8:00–18:00", hint: "Суббота — по договорённости" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-amber/10 border border-amber/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
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

              {/* Photo collage */}
              <div className="grid grid-cols-2 gap-3">
                <img src={QUARRY_BRIGHT} alt="Карьер" className="w-full h-28 object-cover rounded-xl shadow-sm" />
                <img src={FACTORY_IMG} alt="Завод" className="w-full h-28 object-cover rounded-xl shadow-sm" />
              </div>
            </div>

            <div className="glass rounded-2xl p-8 shadow-lg">
              {formSent ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 bg-amber/10 border border-amber/30 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" size={28} className="text-amber" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-wider uppercase mb-2">Заявка отправлена</h3>
                  <p className="text-sm text-muted-foreground">Менеджер свяжется с вами в течение 2 часов в рабочее время.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-wider uppercase mb-2">Получить коммерческое предложение</h3>
                  <p className="text-xs text-muted-foreground mb-6">Менеджер перезвонит в течение 2 часов и подготовит расчёт</p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Имя *</label>
                        <input required type="text" placeholder="Иван Петров" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber rounded-sm placeholder:text-muted-foreground/40" />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Телефон *</label>
                        <input required type="tel" placeholder="+7 (___) ___-__-__" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber rounded-sm placeholder:text-muted-foreground/40" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Компания</label>
                      <input type="text" placeholder="ООО «Ваша компания»" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-white border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber rounded-sm placeholder:text-muted-foreground/40" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-widest font-display block mb-2">Сообщение</label>
                      <textarea rows={4} placeholder="Опишите потребность: продукт, объём, вид доставки..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-white border border-border text-foreground text-sm px-3 py-3 font-body focus:outline-none focus:border-amber rounded-sm placeholder:text-muted-foreground/40 resize-none" />
                    </div>
                    <button type="submit" className="w-full bg-amber text-white font-display font-semibold py-4 tracking-widest text-sm hover:bg-amber-dark transition-colors rounded-sm shadow-lg shadow-orange-100">
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
      <footer className="bg-secondary/40 border-t border-border/40 py-10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-8 border-b border-border/40">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber rounded-sm flex items-center justify-center">
                <Icon name="Mountain" size={15} className="text-white" />
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
