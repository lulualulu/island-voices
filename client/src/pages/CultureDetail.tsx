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
    // Add more tribes as needed
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

