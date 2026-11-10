import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'th' | 'en';

/** ข้อความสองภาษา */
export type L = Record<Lang, string>;

const STORAGE_KEY = 'swv-lang';

interface Ctx {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** เลือกข้อความตามภาษาปัจจุบัน */
  t: (text: L) => string;
}

const LanguageContext = createContext<Ctx | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'th' || saved === 'en') return saved;
  } catch {
    /* storage ถูกบล็อก */
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'th';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ไม่เป็นไร */
    }
  }, []);

  const t = useCallback((text: L) => text[lang], [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
