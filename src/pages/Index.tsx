import { useState } from "react";
import HeaderSection from "./HeaderSection";
import MainSections from "./MainSections";
import ContactsSection from "./ContactsSection";

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
      <HeaderSection
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollTo={scrollTo}
      />
      <MainSections scrollTo={scrollTo} />
      <ContactsSection
        scrollTo={scrollTo}
        formData={formData}
        setFormData={setFormData}
        formSent={formSent}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
