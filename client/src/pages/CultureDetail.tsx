import { useRoute } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Calendar, Leaf, Lightbulb, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'wouter';

export default function CultureDetail() {
  const [, params] = useRoute('/cultures/:id');
  const tribeId = params?.id || '';

  // Tribe data (simplified - in real app would fetch from API/database)
  const tribeData: Record<string, any> = {
    amis: {
      name: '阿美族',
      nameEn: 'Amis',
      nameIndigenous: 'Pangcah',
      population: '約 21.1 萬人',
      region: '花蓮、台東',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
      color: 'from-red-500 to-orange-500',
      
      overview: '阿美族是台灣原住民族中人口最多的族群,主要分布在花蓮與台東地區。以母系社會、年齡階層制度和豐年祭聞名,擁有豐富的海洋文化與野菜知識,是台灣東部重要的文化資產。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '野菜文化',
            description: '阿美族認識超過200種可食用野菜,這些植物不需栽培、自然生長,是最永續的食物來源。近年部落積極推廣野菜料理,既保存傳統知識,也推廣健康飲食。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '海洋智慧',
            description: '沿海部落擁有豐富的潮間帶生態知識,了解各種海洋生物的習性與季節,實踐永續採集,確保資源不會枯竭。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '輪耕制度',
            description: '傳統農耕採用輪耕方式,讓土地休養生息,維持地力,是友善環境的永續農業實踐。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '港口部落海稻米復育',
            description: '復育失傳百年的海稻米品種,利用海水灌溉的傳統農法,創造獨特的農業品牌,成功結合文化保存與經濟發展。',
            impact: '復育3個海稻米品種,創造部落經濟',
          },
          {
            title: '野菜學校',
            description: '部落成立野菜學校,教導年輕世代認識傳統野菜,並發展野菜料理餐廳,讓傳統知識成為永續產業。',
            impact: '培訓200位野菜達人',
          },
          {
            title: '豐年祭文化觀光',
            description: '以豐年祭為核心發展文化觀光,讓遊客深度體驗阿美族文化,創造部落收入同時傳承文化。',
            impact: '年吸引5萬遊客,部落收入增加30%',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將傳統歌謠融入現代音樂,創造獨特的原住民流行音樂',
          '發展野菜料理品牌,進軍都市餐飲市場',
          '運用傳統圖騰設計文創商品,推廣阿美族美學',
          '建立部落共同廚房,結合長照與文化傳承',
        ],
      },
      
      festivals: [
        { name: '豐年祭', time: '7-8月', description: '感謝祖靈與天地,慶祝小米豐收,是阿美族最盛大的祭典' },
        { name: '捕魚祭', time: '6-7月', description: '展現傳統捕魚技術,祈求漁獲豐收' },
      ],
      
      relatedTribes: ['撒奇萊雅族', '噶瑪蘭族'],
    },
    
    atayal: {
      name: '泰雅族',
      nameEn: 'Atayal',
      nameIndigenous: 'Tayal',
      population: '約 9.3 萬人',
      region: '桃園、新竹、苗栗、台中、南投、宜蘭、花蓮',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      color: 'from-blue-500 to-indigo-500',
      
      overview: '泰雅族是台灣原住民族中分布最廣的族群,以織布工藝、獵獲文化和紋面傳統著稱。擁有豐富的山林智慧和精湛的手工藝技術,是台灣中北部山區重要的文化守護者。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '輪耕農業',
            description: '採用焚墾輪耕的傳統農法,讓土地在休耕期間恢復地力,是古老的永續農業智慧。現代部落將此智慧融入有機農業實踐。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '獵場管理',
            description: '建立嚴格的獵場輪替制度和禁獵期,確保野生動物族群永續,展現與山林和諧共處的生態智慧。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '植物利用',
            description: '熟知山林中各種植物的用途,從食用、藥用到工藝材料,充分利用自然資源而不過度採集。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '織布工藝復振',
            description: '重建傳統織布技術,將古老圖騰融入現代設計,創造獨特的泰雅織品品牌,為部落婦女創造經濟來源。',
            impact: '培訓30位織女,年產值達500萬',
          },
          {
            title: '有機農業創新',
            description: '結合傳統農法與現代有機農業,發展高山蔬菜品牌,運用祖先的土地智慧創造永續農業。',
            impact: '建立20公頃有機農園',
          },
          {
            title: '生態旅遊發展',
            description: '以傳統獵徑為基礎發展生態旅遊,讓遊客體驗泰雅文化同時學習山林保育知識。',
            impact: '年接待遊客3萬人次',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將傳統織布圖騰應用於時尚設計,推向國際市場',
          '開發泰雅語學習APP,結合科技傳承語言文化',
          '創作現代泰雅音樂,融合傳統古調與流行元素',
          '建立部落文化體驗基地,推廣深度文化旅遊',
        ],
      },
      
      festivals: [
        { name: '祖靈祭', time: '8月', description: '向祖靈表達敬意與感謝,是泰雅族最重要的祭典' },
        { name: '播種祭', time: '3月', description: '祈求農作物豐收,展現與土地的深厚連結' },
      ],
      
      relatedTribes: ['賽德克族', '太魯閣族'],
    },
    
    paiwan: {
      name: '排灣族',
      nameEn: 'Paiwan',
      nameIndigenous: 'Pinayuanan',
      population: '約 10.2 萬人',
      region: '屏東、台東',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
      color: 'from-emerald-500 to-green-500',
      
      overview: '排灣族以嚴謹的階級制度、精美的雕刻藝術和小米文化聞名。貴族制度維繫著社會秩序,百步蛇圖騰象徵祖靈與權威,石板屋建築展現高超的建築智慧。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '小米多樣性',
            description: '保存超過20種小米品種,每種都有特定用途和種植時節,維持農業生物多樣性,是永續農業的典範。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '領域管理',
            description: '建立嚴格的領域制度,合理分配與管理土地資源,確保每個家族都有足夠的生存空間與資源。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '工藝傳承',
            description: '精湛的雕刻、編織、陶藝技術代代傳承,運用在地材料創作,體現與環境和諧的生活哲學。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '小米復育計畫',
            description: '系統性復育傳統小米品種,建立種子銀行,結合科技記錄傳統知識,確保文化與生物多樣性的傳承。',
            impact: '復育15個小米品種',
          },
          {
            title: '原住民藝術聚落',
            description: '建立藝術創作聚落,培育年輕藝術家,將傳統雕刻與現代藝術結合,創造新的文化表達形式。',
            impact: '培育50位青年藝術家',
          },
          {
            title: '部落觀光發展',
            description: '以文化為核心發展觀光產業,讓遊客深度體驗排灣族文化,同時為部落創造經濟收入。',
            impact: '部落收入增加40%',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將百步蛇圖騰融入現代設計,創造獨特的排灣美學',
          '開發傳統樂器與現代音樂的結合,推廣排灣音樂文化',
          '運用3D技術記錄與保存傳統雕刻技法',
          '建立排灣族數位博物館,永久保存文化資產',
        ],
      },
      
      festivals: [
        { name: '小米收穫祭', time: '7-8月', description: '慶祝小米豐收,感謝祖靈庇佑,是排灣族重要的豐收祭典' },
        { name: '刺球祭', time: '10月', description: '祈求勇士平安歸來,展現排灣族的勇士精神' },
      ],
      
      relatedTribes: ['魯凱族'],
    },
    
    bunun: {
      name: '布農族',
      nameEn: 'Bunun',
      nameIndigenous: 'Bunun',
      population: '約 6.2 萬人',
      region: '南投、高雄、花蓮、台東',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=600&fit=crop',
      color: 'from-green-500 to-emerald-500',
      
      overview: '布農族是台灣原住民族中最具音樂天賦的族群,以八部合音聞名國際。居住在中央山脈高山地區,擁有精密的天文曆法知識和卓越的狩獵技術,展現與高山環境完美適應的文化智慧。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '天文曆法',
            description: '發展精密的天文觀測與曆法系統,依據星象變化安排農耕與狩獵活動,體現與自然節律的和諧共處。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '高山農業',
            description: '在高海拔環境發展獨特的農業技術,種植適應性強的作物品種,維持山區生態平衡。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '狩獵倫理',
            description: '建立嚴格的狩獵規範與禁忌,尊重動物生命,確保山林生態的永續發展。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '八部合音傳承',
            description: '積極推廣八部合音教學,培訓年輕歌手,讓這項UNESCO認定的文化資產持續傳承發展。',
            impact: '培訓200位合音歌手',
          },
          {
            title: '高山農業發展',
            description: '運用傳統農業知識發展有機高山蔬菜,創造高品質農產品品牌,提升部落經濟。',
            impact: '建立30公頃有機農園',
          },
          {
            title: '生態保育計畫',
            description: '結合傳統狩獵知識與現代保育觀念,參與野生動物保育工作,守護中央山脈生態。',
            impact: '保護5萬公頃森林',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將八部合音融入現代音樂創作,推向國際舞台',
          '開發布農族天文曆法APP,傳承古老智慧',
          '建立山林生態教育中心,推廣環境教育',
          '創作布農族音樂劇,結合傳統與現代表演藝術',
        ],
      },
      
      festivals: [
        { name: '射耳祭', time: '4-5月', description: '祈求狩獵豐收與族人平安,展現布農族的狩獵文化' },
        { name: '小米豐收祭', time: '7月', description: '慶祝小米收穫,演唱八部合音,是布農族重要祭典' },
      ],
      
      relatedTribes: ['鄒族'],
    },
    
    puyuma: {
      name: '卑南族',
      nameEn: 'Puyuma',
      nameIndigenous: 'Pinuyumayan',
      population: '約 1.5 萬人',
      region: '台東',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      color: 'from-purple-500 to-pink-500',
      
      overview: '卑南族以嚴格的會所制度和男子年齡階級組織聞名,重視教育與訓練。大獵祭和聯合年祭展現族群的團結力量,花環文化象徵著對自然的敬重與美的追求。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '會所教育',
            description: '透過會所制度傳承部落知識與技能,培養年輕人的生態智慧與社會責任感。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '花環文化',
            description: '利用在地植物製作花環,不過度採集,體現與植物和諧共處的生活哲學。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '祭儀生態',
            description: '祭典活動與自然季節緊密結合,透過儀式表達對土地與祖靈的敬重。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '青年培力計畫',
            description: '延續傳統會所精神,建立現代青年培力機制,培養部落未來領導人才。',
            impact: '培訓100位青年領袖',
          },
          {
            title: '文化觀光發展',
            description: '以大獵祭為核心發展文化觀光,讓遊客體驗卑南族文化深度與內涵。',
            impact: '年吸引2萬遊客',
          },
          {
            title: '傳統工藝復振',
            description: '復興傳統編織與木雕技術,結合現代設計理念,創造具有卑南族特色的文創產品。',
            impact: '開發50項文創商品',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將花環文化融入現代花藝設計,推廣卑南美學',
          '開發卑南族音樂教育課程,傳承傳統歌謠',
          '建立數位會所,運用科技傳承部落知識',
          '創作卑南族題材的現代舞蹈作品',
        ],
      },
      
      festivals: [
        { name: '大獵祭', time: '12月', description: '男子成年禮的重要儀式,展現卑南族的勇士精神' },
        { name: '聯合年祭', time: '1月', description: '各部落聯合舉行的盛大祭典,彰顯族群團結' },
      ],
      
      relatedTribes: ['阿美族'],
    },
    
    rukai: {
      name: '魯凱族',
      nameEn: 'Rukai',
      nameIndigenous: 'Drekay',
      population: '約 1.4 萬人',
      region: '屏東、高雄、台東',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
      color: 'from-indigo-500 to-purple-500',
      
      overview: '魯凱族與排灣族文化相近,擁有貴族制度和精美的工藝技術。以百合花為族花,象徵純潔與榮耀。石板屋建築展現高超的建築智慧,是台灣原住民建築文化的瑰寶。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '石板建築',
            description: '運用在地石材建造石板屋,與環境完美融合,具有冬暖夏涼的特性,是永續建築的典範。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '百合花文化',
            description: '以百合花作為族花,不濫採野生百合,透過人工栽培維持花朵供應,保護自然生態。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '工藝傳承',
            description: '精湛的雕刻、編織技術使用天然材料,創作過程體現對自然的尊重與珍惜。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '石板屋保存計畫',
            description: '積極保存與修復傳統石板屋,結合現代技術提升居住品質,傳承建築文化智慧。',
            impact: '修復50棟石板屋',
          },
          {
            title: '工藝產業發展',
            description: '將傳統雕刻與編織技術商品化,創造魯凱族特色工藝品牌,提升部落經濟。',
            impact: '培訓30位工藝師',
          },
          {
            title: '文化教育推廣',
            description: '建立文化教育中心,推廣魯凱族語言與文化,培養文化傳承人才。',
            impact: '教育500位學童',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將百合花圖騰應用於現代設計,創造魯凱美學品牌',
          '開發石板屋建築技術課程,傳承古老建築智慧',
          '創作魯凱族主題的現代雕塑作品',
          '建立數位文化博物館,保存部落珍貴文物',
        ],
      },
      
      festivals: [
        { name: '豐年祭', time: '8月', description: '慶祝農作物豐收,感謝祖靈與大地恩賜' },
        { name: '黑米祭', time: '9月', description: '感謝祖先留下的珍貴黑米品種,祈求來年豐收' },
      ],
      
      relatedTribes: ['排灣族'],
    },
    
    tsou: {
      name: '鄒族',
      nameEn: 'Tsou',
      nameIndigenous: 'Cou',
      population: '約 6,700 人',
      region: '嘉義、南投',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      color: 'from-red-500 to-pink-500',
      
      overview: '鄒族以會所文化(Kuba)和戰祭(Mayasvi)聞名,保有完整的氏族組織。重視男子的獵場與領域觀念,擁有豐富的山林智慧和嚴謹的社會制度。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: 'Kuba 會所制度',
            description: '會所是部落政治、教育、祭儀中心,傳承部落智慧與法律,維繫社會秩序與文化延續。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '獵場管理',
            description: '建立完整的獵場制度,合理分配與使用山林資源,確保生態平衡與永續利用。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '祭儀生態',
            description: '透過Mayasvi戰祭等儀式,表達對自然與祖靈的敬重,維持人與環境的和諧關係。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '會所文化復振',
            description: '重建傳統會所,培訓年輕男子學習傳統知識與技能,傳承鄒族文化精神。',
            impact: '重建3座傳統會所',
          },
          {
            title: '生態旅遊發展',
            description: '以阿里山為基地發展生態旅遊,分享鄒族山林智慧,創造部落經濟收入。',
            impact: '年接待遊客1.5萬人次',
          },
          {
            title: '傳統建築保存',
            description: '保存與重建傳統家屋,運用在地材料與工法,維護鄒族建築文化特色。',
            impact: '保存20棟傳統建築',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將Mayasvi祭典融入現代表演藝術創作',
          '開發鄒族山林智慧教育課程,推廣環境教育',
          '創作鄒族題材的文學與影像作品',
          '建立部落文化數位典藏,保存珍貴文化資產',
        ],
      },
      
      festivals: [
        { name: 'Mayasvi 戰祭', time: '2月', description: '鄒族最重要的祭典,祈求族人平安與部落興盛' },
        { name: '小米祭', time: '8月', description: '慶祝小米豐收,感謝天神與祖靈的庇佑' },
      ],
      
      relatedTribes: ['布農族'],
    },
    
    saisiyat: {
      name: '賽夏族',
      nameEn: 'Saisiyat',
      nameIndigenous: 'SaiSiyat',
      population: '約 6,800 人',
      region: '新竹、苗栗',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop',
      color: 'from-yellow-500 to-orange-500',
      
      overview: '賽夏族以神秘的矮靈祭(巴斯達隘)聞名,是台灣原住民族中人口較少但文化特色鮮明的族群。擁有獨特的氏族制度和豐富的祭儀文化,展現與自然靈界的深度連結。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '矮靈祭傳統',
            description: '透過矮靈祭向自然靈界表達敬意,體現與超自然力量和諧共處的世界觀。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '山林利用',
            description: '在有限的山地環境中發展精緻的農業與採集技術,充分利用自然資源而不過度開發。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '氏族管理',
            description: '透過氏族制度合理分配與管理土地資源,維持社會秩序與生態平衡。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '矮靈祭保存',
            description: '嚴格按照傳統儀式舉行矮靈祭,保持祭典的神聖性與完整性,傳承珍貴的祭儀文化。',
            impact: '維持200年祭典傳統',
          },
          {
            title: '語言復振計畫',
            description: '積極推動賽夏語教學,編製教材與數位課程,搶救瀕危的族語文化。',
            impact: '培訓50位族語師資',
          },
          {
            title: '文化觀光發展',
            description: '以矮靈祭為核心發展深度文化旅遊,讓外界認識賽夏族獨特的文化內涵。',
            impact: '年吸引8千遊客',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將矮靈祭音樂融入現代音樂創作',
          '開發賽夏族文化VR體驗,推廣族群認知',
          '創作賽夏族神話故事繪本,傳承口傳文學',
          '建立族語學習APP,運用科技保存語言',
        ],
      },
      
      festivals: [
        { name: '矮靈祭', time: '10月(隔年)', description: '賽夏族最重要的祭典,每兩年舉行一次,十年舉行大祭' },
        { name: '豐年祭', time: '8月', description: '慶祝農作物豐收,感謝祖靈庇佑' },
      ],
      
      relatedTribes: ['泰雅族'],
    },
    
    yami: {
      name: '達悟族',
      nameEn: 'Tao',
      nameIndigenous: 'Tao',
      population: '約 4,800 人',
      region: '台東蘭嶼',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
      color: 'from-cyan-500 to-blue-500',
      
      overview: '達悟族是台灣唯一的海島民族,居住在蘭嶼,以飛魚文化、拼板舟和地下屋聞名。擁有完整的海洋知識體系和永續漁業管理制度,是海洋文化的重要守護者。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '飛魚季制度',
            description: '建立嚴格的捕魚季節與禁漁期,確保海洋資源永續利用,是世界級的海洋資源管理典範。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '拼板舟工藝',
            description: '運用在地木材製作拼板舟,每個步驟都有嚴格儀式,體現對自然材料的尊重與珍惜。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '地下屋建築',
            description: '適應海島氣候的地下屋設計,具有防風、保溫功能,是永續建築的智慧典範。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '海洋保育合作',
            description: '與海洋科學家合作,運用傳統漁業知識進行海洋保育研究,為永續漁業提供重要數據。',
            impact: '建立5個海洋保護區',
          },
          {
            title: '拼板舟文化傳承',
            description: '舉辦拼板舟製作工作坊,培訓年輕族人學習傳統造船技術,傳承海洋文化技藝。',
            impact: '培訓20位造船師傅',
          },
          {
            title: '生態旅遊發展',
            description: '發展負責任的生態旅遊,讓遊客體驗達悟族海洋文化,同時保護蘭嶼生態環境。',
            impact: '年接待遊客3萬人次',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將飛魚文化融入海洋教育課程,推廣海洋保育觀念',
          '開發達悟族海洋知識APP,保存傳統智慧',
          '創作達悟族題材的紀錄片,分享海島文化',
          '建立數位博物館,典藏拼板舟製作技術',
        ],
      },
      
      festivals: [
        { name: '飛魚祭', time: '3-6月', description: '達悟族最重要的祭典,展現與海洋和諧共處的文化智慧' },
        { name: '拼板舟下水祭', time: '3月', description: '新造拼板舟下水時的神聖儀式' },
      ],
      
      relatedTribes: [],
    },
    
    thao: {
      name: '邵族',
      nameEn: 'Thao',
      nameIndigenous: 'Thao',
      population: '約 800 人',
      region: '南投日月潭',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop',
      color: 'from-teal-500 to-cyan-500',
      
      overview: '邵族是台灣原住民族中人口最少的族群,居住在日月潭地區。以獨木舟文化、祖靈籃信仰和豐富的湖泊生態知識聞名,是重要的湖泊文化守護者。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '湖泊生態管理',
            description: '發展完整的湖泊資源管理制度,了解魚類生態與季節變化,實踐永續捕撈。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '祖靈籃文化',
            description: '透過祖靈籃承載祖先智慧,傳承部落法律與生態知識,維繫人與自然的關係。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '植物利用',
            description: '熟知湖區植物特性與用途,從食用、藥用到工藝材料,永續利用自然資源。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '語言復振搶救',
            description: '面臨語言瀕危危機,積極推動邵語教學與記錄,搶救珍貴的語言文化資產。',
            impact: '記錄5000個詞彙',
          },
          {
            title: '祖靈籃文化傳承',
            description: '持續舉行祖靈祭,維護祖靈籃文化傳統,傳承部落重要的精神信仰。',
            impact: '培訓10位祭司',
          },
          {
            title: '文化觀光發展',
            description: '與日月潭觀光結合,推廣邵族文化體驗,讓遊客認識獨特的湖泊文化。',
            impact: '年接待遊客5萬人次',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將邵族傳說融入觀光導覽,推廣日月潭文化深度',
          '開發邵語學習數位教材,搶救瀕危語言',
          '創作邵族音樂作品,傳承傳統歌謠',
          '建立邵族文化展示館,保存部落珍貴文物',
        ],
      },
      
      festivals: [
        { name: '祖靈祭', time: '8月', description: '邵族最重要的祭典,祭拜祖靈籃中的祖先' },
        { name: '播種祭', time: '3月', description: '祈求農作物豐收,展現與土地的連結' },
      ],
      
      relatedTribes: [],
    },
    
    kavalan: {
      name: '噶瑪蘭族',
      nameEn: 'Kavalan',
      nameIndigenous: 'Kbalan',
      population: '約 1,500 人',
      region: '宜蘭、花蓮',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      color: 'from-blue-500 to-indigo-500',
      
      overview: '噶瑪蘭族原居宜蘭平原,是台灣平埔族群中較晚被政府認定的原住民族。以精湛的香蕉絲織布技術和獨特的搶孤習俗聞名,展現頑強的文化生命力。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '香蕉絲織布',
            description: '運用香蕉植物纖維製作織品,充分利用農業副產品,體現循環經濟的古老智慧。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '平原農業',
            description: '發展適應平原環境的永續農業技術,維持土壤肥沃度,創造豐饒的農業文明。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '文化韌性',
            description: '在強勢文化衝擊下保持文化特色,展現文化適應力與傳承的堅韌精神。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '香蕉絲工藝復振',
            description: '重新學習傳統香蕉絲織布技術,發展現代工藝產品,創造族群特色品牌。',
            impact: '培訓15位織布師',
          },
          {
            title: '文化認同重建',
            description: '透過文化教育與祭儀復振,重建族群認同感,凝聚散居各地的族人。',
            impact: '凝聚500位族人',
          },
          {
            title: '傳統建築保存',
            description: '重建傳統家屋,保存噶瑪蘭族建築特色,展現文化復振成果。',
            impact: '重建3棟傳統建築',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將香蕉絲織品融入時尚設計,推廣環保織品概念',
          '開發噶瑪蘭族文化教育課程,推廣族群認知',
          '創作噶瑪蘭族題材的文學作品,記錄族群歷史',
          '建立數位文化平台,連結散居各地的族人',
        ],
      },
      
      festivals: [
        { name: '海祭', time: '8月', description: '感謝海洋恩賜,祈求族人平安' },
        { name: '豐年祭', time: '9月', description: '慶祝農作物豐收,展現族群團結' },
      ],
      
      relatedTribes: ['阿美族'],
    },
    
    sakizaya: {
      name: '撒奇萊雅族',
      nameEn: 'Sakizaya',
      nameIndigenous: 'Sakizaya',
      population: '約 900 人',
      region: '花蓮',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      color: 'from-orange-500 to-red-500',
      
      overview: '撒奇萊雅族是2007年才被政府認定的原住民族,擁有悲壯的抗日歷史。以火神祭紀念先烈,展現不屈的民族精神,是台灣原住民族群認同重建的重要典範。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '火神信仰',
            description: '透過火神祭維繫族群精神,火焰象徵生命延續與文化傳承的永恆力量。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '河流文化',
            description: '發展與花蓮溪流域相適應的生活方式,善用水資源進行農業與日常生活。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '文化重建',
            description: '在文化斷層中重建族群認同,展現文化復振的強大韌性與決心。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '火神祭傳承',
            description: '每年舉行火神祭,紀念加禮宛戰役英雄,凝聚族群認同感與歷史記憶。',
            impact: '凝聚全族族人參與',
          },
          {
            title: '語言文化復振',
            description: '積極推動撒奇萊雅語教學,編製族語教材,搶救瀕危的語言文化。',
            impact: '培訓20位族語師資',
          },
          {
            title: '歷史記憶保存',
            description: '建立族群歷史檔案,記錄口述歷史,保存珍貴的集體記憶。',
            impact: '收集200份口述史',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將火神祭融入現代儀式設計,傳承神聖精神',
          '開發撒奇萊雅族歷史教育教材,推廣族群認知',
          '創作族群歷史題材的戲劇作品',
          '建立數位博物館,典藏族群珍貴文物',
        ],
      },
      
      festivals: [
        { name: '火神祭', time: '8月', description: '紀念加禮宛戰役,凝聚族群認同的重要祭典' },
        { name: '豐年祭', time: '7月', description: '慶祝農作物豐收,感謝祖靈庇佑' },
      ],
      
      relatedTribes: ['阿美族'],
    },
    
    seediq: {
      name: '賽德克族',
      nameEn: 'Seediq',
      nameIndigenous: 'Seediq',
      population: '約 1萬人',
      region: '南投、花蓮',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
      color: 'from-emerald-500 to-teal-500',
      
      overview: '賽德克族原被歸類為泰雅族,2008年正式成為第14個原住民族。以織布工藝、狩獵文化和霧社事件聞名,擁有堅韌的民族精神和豐富的山林智慧。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: 'Gaya 祖訓',
            description: '遵循Gaya祖先訓示,建立人與自然和諧共處的生活規範,維持生態平衡。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '織布文化',
            description: '精湛的織布技藝使用天然纖維與染料,體現與自然材料和諧共處的工藝智慧。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '山林管理',
            description: '建立完整的獵場管理制度,維護山林生態系統的永續發展。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '織布工藝復振',
            description: '重建傳統織布技術,培訓年輕織女,將古老工藝融入現代生活。',
            impact: '培訓25位織女',
          },
          {
            title: '文化觀光發展',
            description: '以霧社地區為中心發展文化觀光,讓遊客深度體驗賽德克族文化。',
            impact: '年接待遊客2萬人次',
          },
          {
            title: '傳統建築保存',
            description: '重建傳統家屋與穀倉,保存賽德克族建築技術與文化特色。',
            impact: '重建10棟傳統建築',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將賽德克織布圖騰融入現代服飾設計',
          '開發Gaya文化教育課程,傳承傳統價值觀',
          '創作賽德克族歷史題材的影視作品',
          '建立數位文化典藏,保存珍貴文化資產',
        ],
      },
      
      festivals: [
        { name: 'Mgay Bari', time: '7月', description: '感謝祖靈庇佑的豐收祭典' },
        { name: '織布祭', time: '9月', description: '慶祝織布工藝,展現婦女的技藝與智慧' },
      ],
      
      relatedTribes: ['泰雅族', '太魯閣族'],
    },
    
    truku: {
      name: '太魯閣族',
      nameEn: 'Truku',
      nameIndigenous: 'Truku',
      population: '約 3.2萬人',
      region: '花蓮、南投',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      color: 'from-slate-500 to-gray-500',
      
      overview: '太魯閣族原被歸類為泰雅族,2004年成為第12個原住民族。居住在太魯閣峽谷地區,以織布工藝、山林智慧和峽谷文化聞名,是台灣東部重要的山地民族。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '峽谷生態智慧',
            description: '發展適應峽谷地形的生活方式,善用地形地貌進行農業與建築,與嚴峻環境和諧共處。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '織布技藝',
            description: '傳承精湛的織布工藝,使用天然材料與傳統染色技術,創造美麗而實用的織品。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '石材利用',
            description: '善用在地石材進行建築與工具製作,體現就地取材的永續生活哲學。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '織布文化傳承',
            description: '建立織布工作坊,培訓年輕族人學習傳統織布技術,傳承太魯閣族工藝文化。',
            impact: '培訓40位織布師',
          },
          {
            title: '生態旅遊合作',
            description: '與太魯閣國家公園合作發展生態旅遊,分享族群山林智慧,推廣環境教育。',
            impact: '年服務遊客100萬人次',
          },
          {
            title: '文化教育推廣',
            description: '建立文化教育中心,推廣太魯閣族語言文化,培養文化傳承人才。',
            impact: '教育1000位學童',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將峽谷景觀融入現代建築設計理念',
          '開發太魯閣族文化體驗課程,推廣深度旅遊',
          '創作太魯閣族主題的音樂與舞蹈作品',
          '建立數位文化博物館,典藏族群珍貴文化',
        ],
      },
      
      festivals: [
        { name: '感恩祭', time: '8月', description: '感謝祖靈與大地恩賜,祈求族人平安' },
        { name: '織布祭', time: '10月', description: '慶祝織布工藝,展現太魯閣族婦女的技藝' },
      ],
      
      relatedTribes: ['泰雅族', '賽德克族'],
    },
    
    hla_alua: {
      name: '拉阿魯哇族',
      nameEn: 'Hla\'alua',
      nameIndigenous: 'Hla\'alua',
      population: '約 400 人',
      region: '高雄',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
      color: 'from-amber-500 to-yellow-500',
      
      overview: '拉阿魯哇族是2014年被政府認定的第15個原住民族,人口稀少但文化特色鮮明。以聖貝祭和美麗的貝珠工藝聞名,展現堅韌的文化生命力與獨特的精神世界。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '聖貝文化',
            description: '以聖貝(takiaru)為核心的信仰體系,體現對自然靈性的敬重與珍惜。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '山地農業',
            description: '在高山環境發展精緻農業,適應地形氣候,創造永續的山地生活模式。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '工藝傳承',
            description: '精美的貝珠工藝使用天然材料,體現與自然和諧的工藝美學。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '聖貝祭傳承',
            description: '維持傳統聖貝祭儀式,保存拉阿魯哇族獨特的精神信仰文化。',
            impact: '維持300年祭典傳統',
          },
          {
            title: '語言搶救計畫',
            description: '面對語言瀕危危機,積極推動族語教學與記錄,搶救珍貴語言文化。',
            impact: '記錄3000個詞彙',
          },
          {
            title: '工藝技術保存',
            description: '傳承貝珠等傳統工藝技術,培訓年輕族人學習古老技藝。',
            impact: '培訓8位工藝師',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將聖貝文化融入現代藝術創作',
          '開發拉阿魯哇族文化教育教材',
          '創作族群歷史口述文學作品',
          '建立數位文化典藏,保存稀有文化資產',
        ],
      },
      
      festivals: [
        { name: '聖貝祭', time: '6月', description: '拉阿魯哇族最重要的祭典,祭拜聖貝(takiaru)' },
        { name: '小米祭', time: '8月', description: '慶祝小米豐收,感謝祖靈庇佑' },
      ],
      
      relatedTribes: ['卡那卡那富族'],
    },
    
    kanakanavu: {
      name: '卡那卡那富族',
      nameEn: 'Kanakanavu',
      nameIndigenous: 'Kanakanavu',
      population: '約 300 人',
      region: '高雄',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop',
      color: 'from-rose-500 to-pink-500',
      
      overview: '卡那卡那富族是台灣原住民族中人口最少的族群之一,2014年與拉阿魯哇族同時被政府認定。以河祭、米貢祭和獨特的社會組織聞名,展現小而美的文化特色。',
      
      sustainabilityWisdom: {
        title: '永續智慧',
        practices: [
          {
            name: '河流信仰',
            description: '以河祭表達對河流的敬重,體現水資源保護與永續利用的生態智慧。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '小米文化',
            description: '保存傳統小米品種,透過米貢祭慶祝豐收,維持農業文化多樣性。',
            icon: <Leaf className="h-6 w-6" />,
          },
          {
            name: '社會組織',
            description: '獨特的社會組織制度確保資源公平分配,維持社會和諧與生態平衡。',
            icon: <Leaf className="h-6 w-6" />,
          },
        ],
      },
      
      contemporaryPractice: {
        title: '當代實踐',
        examples: [
          {
            title: '河祭文化保存',
            description: '持續舉行傳統河祭,保存卡那卡那富族獨特的河流信仰文化。',
            impact: '維持200年祭典傳統',
          },
          {
            title: '語言急救行動',
            description: '面對嚴重的語言瀕危狀況,全力推動族語搶救與傳承工作。',
            impact: '培訓5位族語師資',
          },
          {
            title: '文化認同重建',
            description: '透過祭儀復振與文化教育,重建族群認同感,凝聚族人向心力。',
            impact: '凝聚全族300位族人',
          },
        ],
      },
      
      culturalInnovation: {
        title: '文化創新',
        innovations: [
          '將河祭精神融入環境教育課程',
          '開發卡那卡那富族語言學習教材',
          '創作族群文化紀錄片,保存珍貴影像',
          '建立族群文化數位檔案,永久保存文化',
        ],
      },
      
      festivals: [
        { name: '河祭', time: '5月', description: '向河神表達敬意,祈求水源豐沛' },
        { name: '米貢祭', time: '8月', description: '慶祝小米豐收,感謝祖靈與大地恩賜' },
      ],
      
      relatedTribes: ['拉阿魯哇族'],
    },
  };

  const tribe = tribeData[tribeId] || tribeData.amis;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tribe.image})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${tribe.color} opacity-70`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 container h-full flex flex-col justify-end pb-12 text-white">
          <div className="mb-4">
            <Badge className="bg-white/20 backdrop-blur text-white border-white/30 mb-2">
              台灣原住民族
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3">{tribe.name}</h1>
          <div className="flex gap-4 text-lg">
            <span>{tribe.nameEn}</span>
            <span>·</span>
            <span>{tribe.nameIndigenous}</span>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-muted/30 py-8">
        <div className="container">
          <div className="flex flex-wrap gap-8 justify-center text-center">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">人口</div>
                <div className="font-semibold">{tribe.population}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">主要分布</div>
                <div className="font-semibold">{tribe.region}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">重要祭典</div>
                <div className="font-semibold">{tribe.festivals[0].name}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">族群概述</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {tribe.overview}
          </p>
        </div>
      </section>

      {/* Sustainability Wisdom */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Leaf className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">{tribe.sustainabilityWisdom.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tribe.sustainabilityWisdom.practices.map((practice: any, index: number) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="mb-4 text-primary">{practice.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{practice.name}</h3>
                    <p className="text-sm text-muted-foreground">{practice.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contemporary Practice */}
      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">{tribe.contemporaryPractice.title}</h2>
          </div>
          <div className="space-y-6">
            {tribe.contemporaryPractice.examples.map((example: any, index: number) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold">{example.title}</h3>
                    <Badge variant="secondary">{example.impact}</Badge>
                  </div>
                  <p className="text-muted-foreground">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Innovation */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{tribe.culturalInnovation.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tribe.culturalInnovation.innovations.map((innovation: string, index: number) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm">{innovation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Festivals */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">重要祭典</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tribe.festivals.map((festival: any, index: number) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold">{festival.name}</h3>
                    <Badge variant="outline">{festival.time}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{festival.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">延伸閱讀</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/stories">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex items-center gap-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-bold mb-1">相關部落故事</h3>
                      <p className="text-sm text-muted-foreground">閱讀{tribe.name}的深度故事</p>
                    </div>
                    <ArrowRight className="h-5 w-5 ml-auto text-muted-foreground" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/marketplace">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 flex items-center gap-4">
                    <Leaf className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-bold mb-1">部落產品</h3>
                      <p className="text-sm text-muted-foreground">支持{tribe.name}部落</p>
                    </div>
                    <ArrowRight className="h-5 w-5 ml-auto text-muted-foreground" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

