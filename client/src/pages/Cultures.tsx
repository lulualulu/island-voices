import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users } from 'lucide-react';

export default function Cultures() {
  const tribes = [
    {
      id: 'amis',
      name: '阿美族',
      nameEn: 'Amis',
      nameIndigenous: 'Pangcah',
      population: '約 21.1 萬人',
      region: '花蓮、台東',
      color: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      description: '台灣原住民族中人口最多的族群,以母系社會、年齡階層制度和豐年祭聞名。擅長捕魚、製陶與歌舞,保有豐富的海洋文化與野菜知識。',
      features: ['母系社會', '年齡階層', '豐年祭', '海洋文化'],
    },
    {
      id: 'atayal',
      name: '泰雅族',
      nameEn: 'Atayal',
      nameIndigenous: 'Tayal',
      population: '約 9.5 萬人',
      region: '新竹、苗栗、台中、南投、花蓮',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '分布範圍最廣的族群,以紋面文化、精湛的織布技術和狩獵傳統著稱。重視 Gaga(祖訓),強調共享與互助的社會規範。',
      features: ['紋面文化', '織布工藝', 'Gaga 祖訓', '狩獵文化'],
    },
    {
      id: 'paiwan',
      name: '排灣族',
      nameEn: 'Paiwan',
      nameIndigenous: 'Payuan',
      population: '約 10.3 萬人',
      region: '屏東、台東',
      color: 'from-orange-500 to-yellow-500',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      description: '擁有嚴謹的貴族階級制度,以精美的琉璃珠、青銅刀和石板屋建築聞名。五年祭是重要的傳統祭儀,展現對祖靈的敬意。',
      features: ['貴族制度', '琉璃珠工藝', '五年祭', '石板屋'],
    },
    {
      id: 'bunun',
      name: '布農族',
      nameEn: 'Bunun',
      nameIndigenous: 'Bunun',
      population: '約 6.2 萬人',
      region: '南投、高雄、花蓮、台東',
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      description: '居住在中央山脈的高山族群,以八部合音、小米文化和狩獵技術著稱。擁有精密的曆法系統,與自然環境緊密連結。',
      features: ['八部合音', '小米文化', '狩獵傳統', '曆法系統'],
    },
    {
      id: 'puyuma',
      name: '卑南族',
      nameEn: 'Puyuma',
      nameIndigenous: 'Pinuyumayan',
      population: '約 1.5 萬人',
      region: '台東',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '以嚴格的會所制度和少年訓練聞名,重視男子的年齡階級組織。大獵祭和聯合年祭是重要的文化活動。',
      features: ['會所制度', '年齡階級', '大獵祭', '聯合年祭'],
    },
    {
      id: 'rukai',
      name: '魯凱族',
      nameEn: 'Rukai',
      nameIndigenous: 'Drekay',
      population: '約 1.4 萬人',
      region: '屏東、高雄、台東',
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      description: '與排灣族文化相近,擁有貴族制度和精美的工藝技術。以百合花為族花,象徵純潔與榮耀。石板屋建築展現高超的建築智慧。',
      features: ['貴族制度', '百合花文化', '石板屋', '工藝技術'],
    },
    {
      id: 'tsou',
      name: '鄒族',
      nameEn: 'Tsou',
      nameIndigenous: 'Cou',
      population: '約 6,700 人',
      region: '嘉義、南投',
      color: 'from-red-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '以會所文化(Kuba)和戰祭(Mayasvi)聞名,保有完整的氏族組織。重視男子的獵場與領域觀念。',
      features: ['Kuba 會所', 'Mayasvi 戰祭', '氏族組織', '獵場文化'],
    },
    {
      id: 'saisiyat',
      name: '賽夏族',
      nameEn: 'Saisiyat',
      nameIndigenous: 'SaiSiyat',
      population: '約 6,800 人',
      region: '新竹、苗栗',
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '以兩年一度的矮靈祭(巴斯達隘)聞名,是台灣原住民族中獨特的祭典。保有豐富的神話傳說與祭儀文化。',
      features: ['矮靈祭', '神話傳說', '祭儀文化', '傳統歌謠'],
    },
    {
      id: 'tao',
      name: '達悟族',
      nameEn: 'Tao',
      nameIndigenous: 'Tao',
      population: '約 4,800 人',
      region: '蘭嶼',
      color: 'from-blue-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      description: '台灣唯一的海洋民族,以飛魚文化、拼板舟和地下屋建築聞名。飛魚季是最重要的文化活動,展現與海洋共生的智慧。',
      features: ['飛魚文化', '拼板舟', '地下屋', '海洋祭儀'],
    },
    {
      id: 'kavalan',
      name: '噶瑪蘭族',
      nameEn: 'Kavalan',
      nameIndigenous: 'Kebalan',
      population: '約 1,500 人',
      region: '宜蘭、花蓮',
      color: 'from-cyan-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '原居宜蘭平原的平埔族群,以香蕉絲編織和海祭文化著稱。近年積極復振語言與傳統文化。',
      features: ['香蕉絲編織', '海祭', '語言復振', '平埔文化'],
    },
    {
      id: 'thao',
      name: '邵族',
      nameEn: 'Thao',
      nameIndigenous: 'Thao',
      population: '約 800 人',
      region: '南投',
      color: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '居住在日月潭周邊,是台灣人口最少的原住民族。以獨木舟文化和祖靈信仰聞名,保有豐富的湖泊生態知識。',
      features: ['獨木舟文化', '祖靈信仰', '湖泊生態', '傳統漁獵'],
    },
    {
      id: 'sakizaya',
      name: '撒奇萊雅族',
      nameEn: 'Sakizaya',
      nameIndigenous: 'Sakizaya',
      population: '約 1,000 人',
      region: '花蓮',
      color: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '2007年正名的族群,以火神祭紀念歷史事件。積極復振語言與文化,展現強韌的民族認同。',
      features: ['火神祭', '語言復振', '歷史記憶', '文化重建'],
    },
    {
      id: 'seediq',
      name: '賽德克族',
      nameEn: 'Seediq',
      nameIndigenous: 'Seediq',
      population: '約 1 萬人',
      region: '南投、花蓮',
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '2008年正名,以 Gaya(祖訓)為核心的文化體系。織布與狩獵是重要的傳統技藝,霧社事件是重要的歷史記憶。',
      features: ['Gaya 祖訓', '織布工藝', '狩獵文化', '霧社事件'],
    },
    {
      id: 'truku',
      name: '太魯閣族',
      nameEn: 'Truku',
      nameIndigenous: 'Truku',
      population: '約 3.3 萬人',
      region: '花蓮、南投',
      color: 'from-blue-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '2004年正名,以 Gaya(祖訓)為文化核心。擅長織布、狩獵,居住在中央山脈東側的峽谷地帶。',
      features: ['Gaya 祖訓', '織布技術', '峽谷文化', '狩獵傳統'],
    },
    {
      id: 'kanakanavu',
      name: '卡那卡那富族',
      nameEn: 'Kanakanavu',
      nameIndigenous: 'Kanakanavu',
      population: '約 400 人',
      region: '高雄',
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '2014年正名,人口稀少但文化獨特。以米貢祭和河祭聞名,積極進行語言與文化復振工作。',
      features: ['米貢祭', '河祭', '語言復振', '小米文化'],
    },
    {
      id: 'hla-alua',
      name: '拉阿魯哇族',
      nameEn: 'Hla\'alua',
      nameIndigenous: 'Hla\'alua',
      population: '約 400 人',
      region: '高雄',
      color: 'from-pink-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '2014年正名,以聖貝祭(貝神祭)為重要祭儀。保有獨特的語言與文化,積極推動文化傳承。',
      features: ['聖貝祭', '貝神信仰', '語言保存', '文化傳承'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">台灣原住民16族</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            台灣是南島語系民族的起源地之一,16個原住民族群各有獨特的語言、文化與生活智慧。
            讓我們一起認識這些珍貴的文化資產,理解他們與土地共生的永續智慧。
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">關於台灣原住民族</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    台灣原住民族是台灣最早的居民,屬於南島語系民族。根據考古學與語言學研究,
                    台灣可能是南島語系民族向太平洋與印度洋擴散的起源地。目前政府認定的原住民族共有16族,
                    總人口約58萬人,占台灣總人口約2.5%。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    每個族群都擁有獨特的語言、文化、社會組織與生活方式。從高山到海洋,從狩獵到農耕,
                    原住民族發展出與自然環境緊密結合的生活智慧,這些傳統知識對於當代的永續發展具有重要啟發。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tribes Grid */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tribes.map((tribe) => (
            <Card key={tribe.id} className="overflow-hidden hover:shadow-xl transition-all group">
              {/* Tribe Image with Gradient Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                  style={{ backgroundImage: `url(${tribe.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${tribe.color} opacity-60`} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-1">{tribe.name}</h3>
                  <p className="text-sm text-white/90">{tribe.nameEn} / {tribe.nameIndigenous}</p>
                </div>
              </div>

              <CardContent className="p-5">
                {/* Population & Region */}
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {tribe.population}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {tribe.region}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {tribe.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tribe.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Learn More Button */}
                <Button variant="outline" className="w-full gap-2" asChild>
                  <Link href={`/cultures/${tribe.id}`}>
                    深入了解 <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

