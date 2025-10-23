import { useRoute } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, ExternalLink, Leaf, Users, Heart, ShoppingBag } from 'lucide-react';

export default function TribeDetail() {
  const [, params] = useRoute('/marketplace/:id');
  const tribeId = params?.id || 'wutai';

  // Mock data - 實際應用中應從 API 或資料庫獲取
  const tribeData: Record<string, any> = {
    wutai: {
      name: '霧台部落',
      nameEn: 'Wutai',
      nameIndigenous: 'Vedai',
      tribe: '排灣族 / 魯凱族',
      location: '屏東縣霧台鄉',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop',
      story: '霧台部落位於海拔1000公尺的中央山脈,是排灣族與魯凱族共同生活的山間部落。這裡保存著完整的石板屋建築、傳統祭儀文化,以及與土地共生的農耕智慧。部落族人堅持使用傳統農法種植小米、紅藜等原生作物,不僅保存了祖先的智慧,也守護了山林的生物多樣性。',
      sustainability: {
        agriculture: '部落採用有機栽培方式,不使用化學肥料與農藥,保護土壤健康與水源純淨。傳統的輪作休耕制度,讓土地得以休養生息,維持長期的生產力。',
        biodiversity: '小米田與紅藜田為多種昆蟲、鳥類提供棲息地,形成完整的生態系統。部落也積極進行原生小米品種的復育工作,保存珍貴的遺傳多樣性。',
        community: '部落成立合作社,採用公平貿易機制,確保農民獲得合理收益。青年返鄉投入農業與文化工作,為部落注入新活力。',
      },
      artisans: [
        {
          name: '杜阿姨',
          role: '小米農',
          quote: '種小米不只是為了收成,更是為了延續祖先的智慧。每一顆小米都承載著我們對土地的敬意。',
        },
        {
          name: '包大哥',
          role: '紅藜農',
          quote: '紅藜是上天賜予我們的禮物,它不僅營養豐富,更能適應山區的嚴苛環境,是真正屬於這片土地的作物。',
        },
      ],
      products: [
        {
          name: '有機台灣小米',
          nameIndigenous: 'Tjalja',
          price: 'NT$ 280',
          weight: '250g × 2包',
          image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop',
          description: '採用傳統有機農法種植的台灣原生小米,是排灣族祭儀中不可或缺的神聖作物。',
          cultural: '在排灣族傳統中,小米不僅是主食,更是祭儀中不可或缺的神聖作物。每年的小米收穫祭,族人會感謝祖靈賜予豐收。',
          sustainability: ['有機無毒栽培', '原生品種', '支持生物多樣性'],
          link: 'https://www.lima.com.tw',
        },
        {
          name: '紅藜',
          nameIndigenous: 'Djulis',
          price: 'NT$ 350',
          weight: '300g',
          image: 'https://images.unsplash.com/photo-1536147116438-62679a5e01f2?w=400&h=400&fit=crop',
          description: '營養價值極高的超級食物,含有豐富的蛋白質、膳食纖維與礦物質。',
          cultural: '紅藜是台灣原生種作物,具有極高的營養價值,被稱為「穀物中的紅寶石」。',
          sustainability: ['有機認證', '耐旱作物', '水土保持'],
          link: 'https://www.lima.com.tw',
        },
        {
          name: '部落咖啡',
          nameIndigenous: 'Kapi',
          price: 'NT$ 450',
          weight: '半磅 (227g)',
          image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
          description: '生長在海拔1000公尺的高山咖啡,帶有獨特的果香與花香。',
          cultural: '部落近年引進咖啡種植,結合傳統農法與現代技術,發展出獨特的風味。',
          sustainability: ['遮陰栽培', '手工採收', '森林友善'],
          link: 'https://www.lima.com.tw',
        },
      ],
    },
  };

  const tribe = tribeData[tribeId] || tribeData.wutai;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Image */}
      <section
        className="h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${tribe.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 container pb-8 text-white">
          <Badge className="mb-4 bg-white/20 backdrop-blur text-white border-white/30">
            {tribe.tribe}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{tribe.name}</h1>
          <p className="text-xl mb-2">{tribe.nameEn} / {tribe.nameIndigenous}</p>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            {tribe.location}
          </div>
        </div>
      </section>

      {/* Tribe Story */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            部落故事
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {tribe.story}
          </p>
        </div>
      </section>

      {/* Sustainability Practices */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Leaf className="h-8 w-8 text-secondary" />
            永續實踐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">友善農業</h3>
                <p className="text-sm text-muted-foreground">
                  {tribe.sustainability.agriculture}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">生物多樣性</h3>
                <p className="text-sm text-muted-foreground">
                  {tribe.sustainability.biodiversity}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">社區發展</h3>
                <p className="text-sm text-muted-foreground">
                  {tribe.sustainability.community}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Artisans */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">部落職人</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tribe.artisans.map((artisan: any, index: number) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-xl">{artisan.name}</h3>
                  <p className="text-sm text-muted-foreground">{artisan.role}</p>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  「{artisan.quote}」
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <ShoppingBag className="h-8 w-8 text-primary" />
            部落產品
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tribe.products.map((product: any, index: number) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.nameIndigenous}</p>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  </div>

                  {/* Cultural Meaning */}
                  <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                    <div className="text-xs font-semibold text-primary mb-1">文化意義</div>
                    <p className="text-xs text-muted-foreground">{product.cultural}</p>
                  </div>

                  {/* Sustainability */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">
                      永續特色
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {product.sustainability.map((item: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price & Buy */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{product.price}</div>
                      <div className="text-xs text-muted-foreground">{product.weight}</div>
                    </div>
                    <Button asChild>
                      <a href={product.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                        購買 <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="container py-16">
        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <Heart className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">您的購買將直接支持</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div>
                <div className="font-semibold mb-2">✓ {tribe.name}的永續農業發展</div>
              </div>
              <div>
                <div className="font-semibold mb-2">✓ {tribe.tribe}傳統文化保存</div>
              </div>
              <div>
                <div className="font-semibold mb-2">✓ 原生作物品種復育</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
}

