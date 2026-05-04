import Icon from "@/components/ui/icon";
import {
  QUARRY_IMG,
  QUARRY_BRIGHT,
  FACTORY_IMG,
  LAB_IMG,
  FLEET_IMG2,
  PRODUCTS,
  INDUSTRIES,
  LOGISTICS_STEPS,
  STATS,
} from "./constants";

interface MainSectionsProps {
  scrollTo: (id: string) => void;
}

export default function MainSections({ scrollTo }: MainSectionsProps) {
  return (
    <>
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
    </>
  );
}
