"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es" | "fr" | "de" | "ja" | "ko" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.portfolio": "Portfolio",
    "nav.staking": "Staking",
    "nav.analytics": "Analytics",
    "hero.title": "SLERF",
    "hero.description": "Slerf the Sloth is a laid back sloth spreading good vibes on the base chain",
    "button.buy": "BUY $SLERF",
    "section.tokenomics": "TOKENOMICS",
  },
  es: {
    "nav.portfolio": "Cartera",
    "nav.staking": "Staking",
    "nav.analytics": "Análisis",
    "hero.title": "SLERF",
    "hero.description": "Slerf el Perezoso es un perezoso relajado que esparce buenas vibras en la cadena base",
    "button.buy": "COMPRAR $SLERF",
    "section.tokenomics": "TOKENOMICS",
  },
  fr: {
    "nav.portfolio": "Portefeuille",
    "nav.staking": "Staking",
    "nav.analytics": "Analytique",
    "hero.title": "SLERF",
    "hero.description":
      "Slerf le Paresseux est un paresseux décontracté qui répand de bonnes vibrations sur la chaîne de base",
    "button.buy": "ACHETER $SLERF",
    "section.tokenomics": "TOKENOMICS",
  },
  de: {
    "nav.portfolio": "Portfolio",
    "nav.staking": "Staking",
    "nav.analytics": "Analytik",
    "hero.title": "SLERF",
    "hero.description":
      "Slerf das Faultier ist ein entspanntes Faultier, das gute Stimmung auf der Basis-Kette verbreitet",
    "button.buy": "KAUFE $SLERF",
    "section.tokenomics": "TOKENOMICS",
  },
  ja: {
    "nav.portfolio": "ポートフォリオ",
    "nav.staking": "ステーキング",
    "nav.analytics": "分析",
    "hero.title": "SLERF",
    "hero.description": "スラーフ・ザ・スロースは、ベースチェーンで良い雰囲気を広めるのんびりしたナマケモノです",
    "button.buy": "$SLERFを購入",
    "section.tokenomics": "トークノミクス",
  },
  ko: {
    "nav.portfolio": "포트폴리오",
    "nav.staking": "스테이킹",
    "nav.analytics": "분석",
    "hero.title": "SLERF",
    "hero.description": "슬러프 더 슬로스는 베이스 체인에서 좋은 분위기를 퍼뜨리는 여유로운 나무늘보입니다",
    "button.buy": "$SLERF 구매",
    "section.tokenomics": "토크노믹스",
  },
  zh: {
    "nav.portfolio": "投资组合",
    "nav.staking": "质押",
    "nav.analytics": "分析",
    "hero.title": "SLERF",
    "hero.description": "树懒Slerf是一只悠闲的树懒，在基础链上传播正能量",
    "button.buy": "购买 $SLERF",
    "section.tokenomics": "代币经济学",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("slerf-language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("slerf-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[Language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
