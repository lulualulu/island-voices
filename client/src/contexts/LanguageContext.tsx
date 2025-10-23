import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  zh: {
    // Navigation
    'nav.home': '首頁',
    'nav.cultures': '族群文化',
    'nav.sustainability': '永續生活',
    'nav.stories': '深度故事',
    'nav.marketplace': '部落市集',
    'nav.about': '關於我們',
    
    // Home Page
    'home.hero.title': '森乃嶼',
    'home.hero.subtitle': 'Senan Yu',
    'home.hero.tagline': '文化傳承 × 友善農業 × 生物多樣性',
    'home.hero.cta1': '探索族群文化',
    'home.hero.cta2': '進入部落市集',
    'home.section1.title': '以文化為眼,凝視島嶼',
    'home.section1.desc': '透過原住民族的智慧與實踐,我們探索永續生活的可能性,將文化保存、生態保育與社會發展緊密連結',
    'home.feature1.title': '16族文化',
    'home.feature1.subtitle': 'Indigenous Cultures',
    'home.feature1.desc': '深入探索台灣原住民16族的語言、傳統與生活智慧',
    'home.feature2.title': '永續農業',
    'home.feature2.subtitle': 'Sustainable Agriculture',
    'home.feature2.desc': '傳統農耕智慧與友善環境的現代實踐',
    'home.feature3.title': '生物多樣性',
    'home.feature3.subtitle': 'Biodiversity',
    'home.feature3.desc': '原住民傳統生態知識守護島嶼的豐富生命',
    'home.feature4.title': '部落市集',
    'home.feature4.subtitle': 'Tribal Marketplace',
    'home.feature4.desc': '以故事連結產品,用消費支持文化傳承',
    'home.tribes.title': '認識台灣原住民16族',
    'home.tribes.desc': '點擊探索各族群的文化、語言與生活智慧',
    'home.tribes.viewall': '查看全部16族',
    'home.stories.title': '深度故事',
    'home.stories.desc': '走進部落,聆聽土地與人的對話',
    'home.stories.readmore': '閱讀更多',
    'home.cta.title': '用行動支持原住民文化與永續發展',
    'home.cta.desc': '透過部落市集,您的每一次購買都直接支持部落的永續農業、文化保存與生物多樣性保護',
    'home.cta.button': '探索部落市集',
    
    // Cultures Page
    'cultures.title': '台灣原住民16族',
    'cultures.subtitle': '台灣是南島語系民族的起源地之一,16個原住民族群各有獨特的語言、文化與生活智慧。讓我們一起認識這些珍貴的文化資產,理解他們與土地共生的永續智慧。',
    'cultures.intro.title': '關於台灣原住民族',
    'cultures.intro.p1': '台灣原住民族是台灣最早的居民,屬於南島語系民族。根據考古學與語言學研究,台灣可能是南島語系民族向太平洋與印度洋擴散的起源地。目前政府認定的原住民族共有16族,總人口約58萬人,占台灣總人口約2.5%。',
    'cultures.intro.p2': '每個族群都擁有獨特的語言、文化、社會組織與生活方式。從高山到海洋,從狩獵到農耕,原住民族發展出與自然環境緊密結合的生活智慧,這些傳統知識對於當代的永續發展具有重要啟發。',
    'cultures.learnmore': '深入了解',
    
    // Marketplace Page
    'marketplace.title': '部落市集',
    'marketplace.subtitle': '以部落為導向的產品銷售平台,每一次購買都是對文化保存、永續農業與生物多樣性的支持',
    'marketplace.filter.all': '全部地區',
    'marketplace.filter.north': '北部',
    'marketplace.filter.central': '中部',
    'marketplace.filter.south': '南部',
    'marketplace.filter.east': '東部',
    'marketplace.products': '主要產品',
    'marketplace.sustainability': '永續實踐',
    'marketplace.learn': '了解部落',
    'marketplace.buy': '購買',
    'marketplace.support.title': '您的購買將直接支持',
    'marketplace.support.1.title': '部落永續發展',
    'marketplace.support.1.desc': '支持部落的友善農業與生態旅遊發展',
    'marketplace.support.2.title': '文化保存傳承',
    'marketplace.support.2.desc': '協助傳統工藝、語言與祭儀文化的延續',
    'marketplace.support.3.title': '生物多樣性保護',
    'marketplace.support.3.desc': '守護原生種作物與山林海洋生態系統',
    
    // Tribe Detail Page
    'tribe.story': '部落故事',
    'tribe.sustainability': '永續實踐',
    'tribe.sustainability.agriculture': '友善農業',
    'tribe.sustainability.biodiversity': '生物多樣性',
    'tribe.sustainability.community': '社區發展',
    'tribe.artisans': '部落職人',
    'tribe.products': '部落產品',
    'tribe.cultural': '文化意義',
    'tribe.features': '永續特色',
    'tribe.support.title': '您的購買將直接支持',
    
    // Footer
    'footer.tagline': '以文化為眼,凝視島嶼。透過原住民族的智慧與實踐,探索永續生活的可能性。',
    'footer.quicklinks': '快速連結',
    'footer.about': '關於',
    'footer.contact': '聯絡我們',
    'footer.partners': '合作夥伴',
    'footer.privacy': '隱私政策',
    'footer.copyright': '© 2025 森乃嶼 Senan Yu. 文化傳承 × 友善農業 × 生物多樣性',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.cultures': 'Cultures',
    'nav.sustainability': 'Sustainability',
    'nav.stories': 'Stories',
    'nav.marketplace': 'Marketplace',
    'nav.about': 'About',
    
    // Home Page
    'home.hero.title': 'Senan Yu',
    'home.hero.subtitle': '森乃嶼',
    'home.hero.tagline': 'Cultural Heritage × Sustainable Agriculture × Biodiversity',
    'home.hero.cta1': 'Explore Cultures',
    'home.hero.cta2': 'Visit Marketplace',
    'home.section1.title': 'Seeing the Island Through Culture',
    'home.section1.desc': 'Through the wisdom and practices of indigenous peoples, we explore possibilities for sustainable living, closely connecting cultural preservation, ecological conservation, and social development',
    'home.feature1.title': '16 Indigenous Cultures',
    'home.feature1.subtitle': 'Indigenous Cultures',
    'home.feature1.desc': 'Explore the languages, traditions, and wisdom of Taiwan\'s 16 indigenous peoples',
    'home.feature2.title': 'Sustainable Agriculture',
    'home.feature2.subtitle': 'Sustainable Agriculture',
    'home.feature2.desc': 'Traditional farming wisdom meets modern eco-friendly practices',
    'home.feature3.title': 'Biodiversity',
    'home.feature3.subtitle': 'Biodiversity',
    'home.feature3.desc': 'Indigenous traditional ecological knowledge protects the island\'s rich life',
    'home.feature4.title': 'Tribal Marketplace',
    'home.feature4.subtitle': 'Tribal Marketplace',
    'home.feature4.desc': 'Connecting products through stories, supporting cultural heritage through consumption',
    'home.tribes.title': 'Discover Taiwan\'s 16 Indigenous Peoples',
    'home.tribes.desc': 'Click to explore the culture, language, and wisdom of each tribe',
    'home.tribes.viewall': 'View All 16 Tribes',
    'home.stories.title': 'In-Depth Stories',
    'home.stories.desc': 'Enter the tribes and listen to the dialogue between land and people',
    'home.stories.readmore': 'Read More',
    'home.cta.title': 'Support Indigenous Culture and Sustainable Development',
    'home.cta.desc': 'Through the tribal marketplace, every purchase directly supports sustainable agriculture, cultural preservation, and biodiversity protection in indigenous communities',
    'home.cta.button': 'Explore Marketplace',
    
    // Cultures Page
    'cultures.title': 'Taiwan\'s 16 Indigenous Peoples',
    'cultures.subtitle': 'Taiwan is one of the origins of Austronesian peoples. The 16 indigenous groups each have unique languages, cultures, and living wisdom. Let\'s discover these precious cultural assets and understand their sustainable wisdom of coexisting with the land.',
    'cultures.intro.title': 'About Taiwan\'s Indigenous Peoples',
    'cultures.intro.p1': 'Taiwan\'s indigenous peoples are the earliest inhabitants of Taiwan, belonging to the Austronesian language family. According to archaeological and linguistic research, Taiwan may be the origin of Austronesian expansion to the Pacific and Indian Oceans. Currently, 16 indigenous peoples are officially recognized, with a total population of about 580,000, accounting for about 2.5% of Taiwan\'s total population.',
    'cultures.intro.p2': 'Each group has unique languages, cultures, social organizations, and lifestyles. From mountains to oceans, from hunting to farming, indigenous peoples have developed living wisdom closely integrated with the natural environment. This traditional knowledge provides important inspiration for contemporary sustainable development.',
    'cultures.learnmore': 'Learn More',
    
    // Marketplace Page
    'marketplace.title': 'Tribal Marketplace',
    'marketplace.subtitle': 'A tribe-oriented product platform where every purchase supports cultural preservation, sustainable agriculture, and biodiversity',
    'marketplace.filter.all': 'All Regions',
    'marketplace.filter.north': 'North',
    'marketplace.filter.central': 'Central',
    'marketplace.filter.south': 'South',
    'marketplace.filter.east': 'East',
    'marketplace.products': 'Main Products',
    'marketplace.sustainability': 'Sustainability',
    'marketplace.learn': 'Learn More',
    'marketplace.buy': 'Buy',
    'marketplace.support.title': 'Your Purchase Directly Supports',
    'marketplace.support.1.title': 'Tribal Sustainable Development',
    'marketplace.support.1.desc': 'Support eco-friendly agriculture and eco-tourism development in tribes',
    'marketplace.support.2.title': 'Cultural Preservation',
    'marketplace.support.2.desc': 'Help continue traditional crafts, languages, and ceremonial cultures',
    'marketplace.support.3.title': 'Biodiversity Protection',
    'marketplace.support.3.desc': 'Protect native crops and mountain-ocean ecosystems',
    
    // Tribe Detail Page
    'tribe.story': 'Tribal Story',
    'tribe.sustainability': 'Sustainability Practices',
    'tribe.sustainability.agriculture': 'Sustainable Agriculture',
    'tribe.sustainability.biodiversity': 'Biodiversity',
    'tribe.sustainability.community': 'Community Development',
    'tribe.artisans': 'Tribal Artisans',
    'tribe.products': 'Tribal Products',
    'tribe.cultural': 'Cultural Significance',
    'tribe.features': 'Sustainability Features',
    'tribe.support.title': 'Your Purchase Directly Supports',
    
    // Footer
    'footer.tagline': 'Seeing the island through culture. Exploring sustainable living through indigenous wisdom and practices.',
    'footer.quicklinks': 'Quick Links',
    'footer.about': 'About',
    'footer.contact': 'Contact Us',
    'footer.partners': 'Partners',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2025 Senan Yu 森乃嶼. Cultural Heritage × Sustainable Agriculture × Biodiversity',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

