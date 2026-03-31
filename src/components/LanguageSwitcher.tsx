'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useState, useRef, useEffect } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  const currentLanguage = languages.find(l => l.code === locale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    if (!pathname) return;
    router.push(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch language"
        className="flex items-center gap-1.5 font-medium"
      >
        <span className="iconify lucide--globe size-4"></span>
        <span>{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
        <span className="iconify lucide--chevron-down size-3"></span>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '110%',
            right: 0,
            zIndex: 9999,
            minWidth: '150px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            border: '1px solid rgba(0,0,0,0.08)',
            backgroundColor: 'white',
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                padding: '10px 16px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: locale === lang.code ? '600' : '400',
                backgroundColor: locale === lang.code ? 'rgba(0,0,0,0.04)' : 'transparent',
                cursor: 'pointer',
                border: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = locale === lang.code ? 'rgba(0,0,0,0.04)' : 'transparent')}
            >
              <span style={{ fontSize: '18px' }}>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
