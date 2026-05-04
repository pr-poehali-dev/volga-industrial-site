import Icon from "@/components/ui/icon";
import {
  QUARRY_BRIGHT,
  FACTORY_IMG,
  LAB_IMG,
  CLIENTS,
  TIMELINE,
} from "./constants";

interface ContactsSectionProps {
  scrollTo: (id: string) => void;
  formData: { name: string; phone: string; company: string; message: string };
  setFormData: (data: { name: string; phone: string; company: string; message: string }) => void;
  formSent: boolean;
  handleFormSubmit: (e: React.FormEvent) => void;
}

export default function ContactsSection({
  scrollTo,
  formData,
  setFormData,
  formSent,
  handleFormSubmit,
}: ContactsSectionProps) {
  return (
    <>
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
    </>
  );
}
