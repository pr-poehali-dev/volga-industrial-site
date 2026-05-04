import Icon from "@/components/ui/icon";

interface HeaderSectionProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

const NAV_ITEMS = [
  { label: "Продукция", id: "products" },
  { label: "Решения", id: "industries" },
  { label: "Логистика", id: "logistics" },
  { label: "Партнёрам", id: "partners" },
  { label: "О компании", id: "about" },
  { label: "Контакты", id: "contacts" },
];

export default function HeaderSection({ mobileMenuOpen, setMobileMenuOpen, scrollTo }: HeaderSectionProps) {
  return (
    <>
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
              {NAV_ITEMS.map((item) => (
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
              {NAV_ITEMS.map((item) => (
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
    </>
  );
}
