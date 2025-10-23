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
    
    // Stories Page
    'stories.title': '深度故事',
    'stories.subtitle': '走進部落,聆聽土地與人的對話。這些故事記錄著原住民族如何在傳統與現代之間,找到文化傳承與永續發展的平衡之道。',
    'stories.category.youth': '返鄉青年',
    'stories.category.culture': '文化復振',
    'stories.category.agriculture': '永續農業',
    'stories.category.craft': '工藝創新',
    'stories.category.ecology': '生態保育',
    'stories.category.community': '社區營造',
    'stories.readfull': '閱讀完整故事',
    'stories.loadmore': '載入更多故事',
    'stories.share.title': '分享您的部落故事',
    'stories.share.desc': '如果您有部落的精彩故事想要分享,或是正在進行文化復振、永續發展的計畫,歡迎與我們聯繫,讓更多人看見原住民族的當代實踐。',
    'stories.share.submit': '投稿故事',
    'stories.readtime': '分鐘',

    // About Page
    'about.hero.title': 'A&N 永續有限公司',
    'about.hero.subtitle': '結合原住民智慧與企業永續實踐的橋樑，致力於將原住民族與地方社群納入企業永續的核心',
    'about.hero.tagline': '島國小民 共好共嶼',
    
    'about.mission.title': '我們的使命',
    'about.mission.description': '透過結合多元、公平、包容(DEI)的組織轉型，讓中小企業能夠接觸永續發展路徑，將永續從義務轉化為驕傲的來源。',
    'about.mission.quote': 'IPLCs（原住民族與地方社群）放進企業永續的核心──共創生態、共享收益、共管資源',
    'about.mission.imageAlt': 'A&N 永續實踐',
    
    'about.objectives.title': '核心目標',
    'about.objectives.subtitle': '我們致力於在三個關鍵領域創造正面影響',
    'about.objectives.1.title': '組織轉型',
    'about.objectives.1.description': '將多元、公平、包容融入組織變革，創造更具包容性的企業文化',
    'about.objectives.2.title': '永續發展',
    'about.objectives.2.description': '協助中小企業獲得永續發展的途徑和資源，實現可持續成長',
    'about.objectives.3.title': '價值轉化',
    'about.objectives.3.description': '將企業永續責任從負擔轉化為驕傲與競爭優勢的來源',
    
    'about.values.title': '文化價值',
    'about.values.subtitle': '源自原住民智慧的核心價值觀，指引我們的實踐方向',
    'about.values.altruistic.title': '利他協作',
    'about.values.altruistic.description': '以服務他人為出發點，建立互助合作的工作關係',
    'about.values.altruistic.question': '誰因此被看見、被照顧？',
    'about.values.listening.title': '深度聆聽',
    'about.values.listening.description': '在提供協助之前，先深入理解需求與脈絡',
    'about.values.resilience.title': '自然韌性',
    'about.values.resilience.description': '學習土地的節奏，在變化中保持彈性與適應力',
    'about.values.collaboration.title': '協作共創',
    'about.values.collaboration.description': '與社群共同開發解決方案，而非單方面提供',
    'about.values.impact.title': '漸進影響',
    'about.values.impact.description': '從小處開始，建立可驗證的成果與持續改善',
    'about.values.transparency.title': '透明信任',
    'about.values.transparency.description': '開放流程、資源與利潤分享，建立互信關係',
    
    'about.team.title': '我們的團隊',
    'about.team.description': '一群結合永續專業與原住民智慧的實踐者，協助企業從生態關係與地方文化出發，結合碳權與生物多樣性促進地方創生',
    'about.team.tagline': '永續專業 × 原住民智慧',
    
    'about.impact.title': '共創影響',
    'about.impact.description': '透過整合原住民族智慧與現代永續實踐，我們致力於創造三重效益',
    'about.impact.ecology.icon': '🌱',
    'about.impact.ecology.title': '共創生態',
    'about.impact.ecology.description': '建立人與自然和諧共生的生態系統',
    'about.impact.benefits.icon': '🤝',
    'about.impact.benefits.title': '共享收益',
    'about.impact.benefits.description': '確保所有參與者都能公平分享發展成果',
    'about.impact.resources.icon': '🌍',
    'about.impact.resources.title': '共管資源',
    'about.impact.resources.description': '協作管理自然與文化資源，確保永續利用',

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
    
    // Stories Page
    'stories.title': 'In-Depth Stories',
    'stories.subtitle': 'Enter the tribes and listen to the dialogue between land and people. These stories document how indigenous peoples find balance between tradition and modernity, cultural heritage and sustainable development.',
    'stories.category.youth': 'Returning Youth',
    'stories.category.culture': 'Cultural Revival',
    'stories.category.agriculture': 'Sustainable Agriculture',
    'stories.category.craft': 'Craft Innovation',
    'stories.category.ecology': 'Ecological Conservation',
    'stories.category.community': 'Community Building',
    'stories.readfull': 'Read Full Story',
    'stories.loadmore': 'Load More Stories',
    'stories.share.title': 'Share Your Tribal Story',
    'stories.share.desc': 'If you have an inspiring tribal story to share, or are working on cultural revival and sustainable development projects, please contact us to let more people see the contemporary practices of indigenous peoples.',
    'stories.share.submit': 'Submit Story',
    'stories.readtime': 'min read',

    // About Page
    'about.hero.title': 'A&N Sustainable Co. Ltd.',
    'about.hero.subtitle': 'Bridging indigenous wisdom with corporate sustainability practices, dedicated to integrating Indigenous Peoples and Local Communities into the core of corporate sustainability',
    'about.hero.tagline': 'Island Nation Citizens, Mutual Prosperity and Coexistence',
    
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'Through organizational transformation that integrates Diversity, Equity, and Inclusion (DEI), we enable small and medium enterprises to access sustainable development pathways, transforming sustainability from an obligation to a source of pride.',
    'about.mission.quote': 'Integrating IPLCs (Indigenous Peoples and Local Communities) into the core of corporate sustainability - co-creating ecology, sharing benefits, and co-managing resources',
    'about.mission.imageAlt': 'A&N Sustainability Practices',
    
    'about.objectives.title': 'Core Objectives',
    'about.objectives.subtitle': 'We are committed to creating positive impact in three key areas',
    'about.objectives.1.title': 'Organizational Transformation',
    'about.objectives.1.description': 'Integrating diversity, equity, and inclusion into organizational change to create more inclusive corporate cultures',
    'about.objectives.2.title': 'Sustainable Development',
    'about.objectives.2.description': 'Helping small and medium enterprises access sustainable development pathways and resources for sustainable growth',
    'about.objectives.3.title': 'Value Transformation',
    'about.objectives.3.description': 'Transforming corporate sustainability responsibility from burden to source of pride and competitive advantage',
    
    'about.values.title': 'Cultural Values',
    'about.values.subtitle': 'Core values rooted in indigenous wisdom that guide our practice',
    'about.values.altruistic.title': 'Altruistic Collaboration',
    'about.values.altruistic.description': 'Starting with serving others to build mutually supportive working relationships',
    'about.values.altruistic.question': 'Who is seen and cared for through this?',
    'about.values.listening.title': 'Deep Listening',
    'about.values.listening.description': 'Understanding needs and context deeply before providing assistance',
    'about.values.resilience.title': 'Natural Resilience',
    'about.values.resilience.description': 'Learning from the rhythm of the land, maintaining flexibility and adaptability in change',
    'about.values.collaboration.title': 'Collaborative Creation',
    'about.values.collaboration.description': 'Co-developing solutions with communities rather than providing unilateral solutions',
    'about.values.impact.title': 'Incremental Impact',
    'about.values.impact.description': 'Starting small, building verifiable results and continuous improvement',
    'about.values.transparency.title': 'Transparency and Trust',
    'about.values.transparency.description': 'Open processes, resources, and profit sharing to build trusting relationships',
    
    'about.team.title': 'Our Team',
    'about.team.description': 'A group of practitioners combining sustainability expertise and indigenous wisdom, helping businesses develop strategies rooted in ecological relationships and local culture, integrating carbon credits and biodiversity to promote local regeneration',
    'about.team.tagline': 'Sustainability Expertise × Indigenous Wisdom',
    
    'about.impact.title': 'Co-Creating Impact',
    'about.impact.description': 'Through integrating indigenous wisdom with modern sustainability practices, we are committed to creating triple benefits',
    'about.impact.ecology.icon': '🌱',
    'about.impact.ecology.title': 'Co-Creating Ecology',
    'about.impact.ecology.description': 'Building ecosystems where humans and nature coexist harmoniously',
    'about.impact.benefits.icon': '🤝',
    'about.impact.benefits.title': 'Sharing Benefits',
    'about.impact.benefits.description': 'Ensuring all participants can fairly share in development outcomes',
    'about.impact.resources.icon': '🌍',
    'about.impact.resources.title': 'Co-Managing Resources',
    'about.impact.resources.description': 'Collaboratively managing natural and cultural resources to ensure sustainable use',

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

