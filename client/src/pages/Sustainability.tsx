import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Leaf, Sprout, Recycle, Users, Mountain, Fish, ArrowRight } from 'lucide-react';

export default function Sustainability() {
  const practices = [
    {
      icon: <Sprout className="h-12 w-12 text-primary" />,
      title: '友善農業',
      titleEn: 'Sustainable Agriculture',
      description: '傳承千年的輪耕智慧,結合現代有機農法,不使用化學肥料與農藥,維護土地健康與生物多樣性。',
      examples: ['小米復育計畫', '原生種作物保存', '傳統輪耕實踐', '野菜文化推廣'],
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
    },
    {
      icon: <Mountain className="h-12 w-12 text-secondary" />,
      title: '森林守護',
      titleEn: 'Forest Conservation',
      description: '以傳統生態知識管理山林,實踐永續狩獵與採集,保護原生物種棲息地,維持生態平衡。',
      examples: ['傳統狩獵規範', '神聖領域保護', '森林巡守隊', '原生植物復育'],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    },
    {
      icon: <Fish className="h-12 w-12 text-accent" />,
      title: '海洋智慧',
      titleEn: 'Ocean Wisdom',
      description: '沿海與離島部落的傳統漁獵知識,包含潮汐觀察、魚類生態理解,以及永續捕撈的文化規範。',
      examples: ['飛魚季傳統', '潮間帶採集', '傳統漁法保存', '海洋保育區'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    },
    {
      icon: <Recycle className="h-12 w-12 text-primary" />,
      title: '循環經濟',
      titleEn: 'Circular Economy',
      description: '傳統建築、工藝與生活中的零廢棄理念,就地取材、物盡其用,與自然和諧共生的生活方式。',
      examples: ['竹木建築技術', '天然纖維編織', '植物染色工藝', '廢棄物再利用'],
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
    },
  ];

  const stories = [
    {
      tribe: '排灣族',
      title: '霧台部落的小米復育',
      description: '霧台部落青年返鄉,與耆老合作復育傳統小米品種,重建輪耕系統,不僅保存了文化,也創造了生態農業的成功案例。',
      impact: '復育20種傳統小米品種',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
    },
    {
      tribe: '泰雅族',
      title: '司馬庫斯的生態旅遊',
      description: '司馬庫斯部落實踐「共享經濟」,發展生態旅遊,所有收入歸部落共有,同時嚴格保護神木群與森林生態。',
      impact: '年接待3萬遊客,零環境破壞',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    },
    {
      tribe: '阿美族',
      title: '港口部落的海稻米',
      description: '港口部落復育海稻米,利用海水灌溉的傳統農法,不僅保存了珍貴的原生稻種,也創造了獨特的農業品牌。',
      impact: '復育失傳百年的海稻米',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
    },
    {
      tribe: '達悟族',
      title: '蘭嶼的飛魚永續',
      description: '達悟族嚴格遵守飛魚季的傳統規範,只在特定時間捕撈,確保魚群永續,展現了海洋民族的生態智慧。',
      impact: '維持數千年的永續漁業',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    },
  ];

  const principles = [
    {
      title: '尊重自然',
      description: '視土地為母親,與萬物共生共榮,不過度索取',
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      title: '世代傳承',
      description: '為子孫保留資源,確保文化與生態永續',
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: '適度利用',
      description: '取之有時、用之有節,遵守傳統規範',
      icon: <Recycle className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            永續生活的原住民智慧
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            數千年來,台灣原住民族發展出與自然和諧共生的生活方式。
            這些傳統生態知識不僅是文化資產,更是面對氣候變遷與環境危機的重要解方。
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">永續生活的核心理念</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            原住民族的傳統生態知識,建立在對自然的深刻理解與尊重之上
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sustainability Practices */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">永續實踐領域</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              從山林到海洋,從農耕到建築,原住民族在各個生活領域展現永續智慧
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2">
                  <div
                    className="h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${practice.image})` }}
                  />
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">{practice.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{practice.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{practice.titleEn}</p>
                      <p className="text-sm text-muted-foreground mb-4">{practice.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {practice.examples.map((example, idx) => (
                          <Badge key={idx} variant="secondary">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">永續實踐故事</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            部落如何將傳統智慧轉化為當代永續發展的成功案例
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${story.image})` }}
              >
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {story.tribe}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{story.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Leaf className="h-4 w-4" />
                  {story.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            支持原住民族的永續實踐
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            透過部落市集購買友善農產品,參與生態旅遊,或成為文化志工,
            您的每一個行動都是對永續未來的投資
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/marketplace">
              <Button size="lg" variant="secondary" className="gap-2">
                探索部落市集 <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/stories">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                閱讀更多故事
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

