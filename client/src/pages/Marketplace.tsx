import { useState } from 'react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, ExternalLink, Leaf, Heart, Users } from 'lucide-react';

export default function Marketplace() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const tribes = [
    {
      id: 'wutai',
      name: '霧台部落',
      nameEn: 'Wutai',
      tribe: '排灣族 / 魯凱族',
      region: 'south',
      location: '屏東縣霧台鄉',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      description: '海拔1000公尺的山間部落,以傳統小米、紅藜種植與石板屋文化聞名',
      products: ['有機小米', '紅藜', '愛玉', '咖啡'],
      sustainability: ['有機栽培', '原生種復育', '水土保持'],
    },
    {
      id: 'smangus',
      name: '司馬庫斯部落',
      nameEn: 'Smangus',
      tribe: '泰雅族',
      region: 'north',
      location: '新竹縣尖石鄉',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '上帝的部落,實踐共同經營的理念,保護千年神木與森林生態',
      products: ['水蜜桃', '甜柿', '段木香菇', '編織品'],
      sustainability: ['生態旅遊', '森林保育', '共同經營'],
    },
    {
      id: 'makotaay',
      name: '港口部落',
      nameEn: 'Makotaay',
      tribe: '阿美族',
      region: 'east',
      location: '花蓮縣豐濱鄉',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      description: '太平洋畔的海洋民族,保存著豐富的海洋文化與野菜知識',
      products: ['海菜', '野菜', '飛魚', '手工藝品'],
      sustainability: ['海洋保育', '傳統漁法', '野菜採集'],
    },
    {
      id: 'namasia',
      name: '那瑪夏部落',
      nameEn: 'Namasia',
      tribe: '布農族 / 卡那卡那富族',
      region: 'south',
      location: '高雄市那瑪夏區',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      description: '山林間的部落,以有機檸檬、薑與傳統小米聞名',
      products: ['有機檸檬', '薑', '小米', '愛玉'],
      sustainability: ['有機認證', '水源保護', '山林保育'],
    },
    {
      id: 'tafalong',
      name: '太巴塱部落',
      nameEn: 'Tafalong',
      tribe: '阿美族',
      region: 'east',
      location: '花蓮縣光復鄉',
      image: 'https://images.unsplash.com/photo-1536147116438-62679a5e01f2?w=800&h=600&fit=crop',
      description: '阿美族最大的部落,以紅糯米復育與傳統祭儀文化著稱',
      products: ['紅糯米', '樹豆', '野菜', '竹編'],
      sustainability: ['原生種復育', '濕地保護', '傳統農法'],
    },
    {
      id: 'tjuabar',
      name: '土坂部落',
      nameEn: 'Tjuabar',
      tribe: '排灣族',
      region: 'south',
      location: '台東縣達仁鄉',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      description: '保存完整五年祭文化的部落,以小米、樹豆與傳統工藝聞名',
      products: ['小米', '樹豆', '陶藝', '琉璃珠'],
      sustainability: ['傳統輪作', '文化保存', '工藝傳承'],
    },
  ];

  const regions = [
    { id: 'all', name: '全部地區' },
    { id: 'north', name: '北部' },
    { id: 'central', name: '中部' },
    { id: 'south', name: '南部' },
    { id: 'east', name: '東部' },
  ];

  const filteredTribes = selectedRegion === 'all'
    ? tribes
    : tribes.filter(t => t.region === selectedRegion);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">部落市集</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            以部落為導向的產品銷售平台,每一次購買都是對文化保存、永續農業與生物多樣性的支持
          </p>
        </div>
      </section>

      {/* Region Filter */}
      <section className="container py-8">
        <div className="flex gap-2 flex-wrap">
          {regions.map(region => (
            <Button
              key={region.id}
              variant={selectedRegion === region.id ? 'default' : 'outline'}
              onClick={() => setSelectedRegion(region.id)}
            >
              {region.name}
            </Button>
          ))}
        </div>
      </section>

      {/* Tribes Grid */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTribes.map(tribe => (
            <Card key={tribe.id} className="overflow-hidden hover:shadow-xl transition-all">
              {/* Tribe Image */}
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${tribe.image})` }}
              >
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-foreground">
                    {tribe.tribe}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Tribe Info */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">{tribe.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{tribe.nameEn}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {tribe.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {tribe.description}
                </p>

                {/* Products */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">
                    主要產品
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tribe.products.map((product, idx) => (
                      <Badge key={idx} variant="secondary">
                        {product}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Sustainability */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">
                    永續實踐
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tribe.sustainability.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="gap-1">
                        <Leaf className="h-3 w-3" />
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link href={`/marketplace/${tribe.id}`}>
                    <Button className="flex-1 gap-2">
                      <Users className="h-4 w-4" />
                      了解部落
                    </Button>
                  </Link>
                  <Button variant="outline" className="gap-2" asChild>
                    <a href="https://www.lima.com.tw" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      購買
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">您的購買將直接支持</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold mb-2">部落永續發展</div>
                <p className="text-muted-foreground">
                  支持部落的友善農業與生態旅遊發展
                </p>
              </div>
              <div>
                <div className="font-semibold mb-2">文化保存傳承</div>
                <p className="text-muted-foreground">
                  協助傳統工藝、語言與祭儀文化的延續
                </p>
              </div>
              <div>
                <div className="font-semibold mb-2">生物多樣性保護</div>
                <p className="text-muted-foreground">
                  守護原生種作物與山林海洋生態系統
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

