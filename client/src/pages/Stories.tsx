import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Clock, User } from 'lucide-react';

export default function Stories() {
  const categories = [
    { name: '返鄉青年', count: 12, color: 'bg-red-100 text-red-700' },
    { name: '文化復振', count: 18, color: 'bg-orange-100 text-orange-700' },
    { name: '永續農業', count: 15, color: 'bg-green-100 text-green-700' },
    { name: '工藝創新', count: 10, color: 'bg-blue-100 text-blue-700' },
    { name: '生態保育', count: 14, color: 'bg-purple-100 text-purple-700' },
    { name: '社區營造', count: 11, color: 'bg-pink-100 text-pink-700' },
  ];

  const featuredStories = [
    {
      id: 1,
      tribe: '排灣族',
      category: '返鄉青年',
      title: '從台北回到霧台:青年的小米復育之路',
      excerpt: '離開都市的工程師工作,回到部落跟著vuvu(祖父母)學習傳統農耕,用科技記錄20種小米品種的生長數據,建立部落的種子銀行...',
      author: '阿布思',
      readTime: '8 分鐘',
      date: '2024-09',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      tags: ['小米復育', '青年返鄉', '傳統知識'],
    },
    {
      id: 2,
      tribe: '泰雅族',
      category: '文化復振',
      title: '織布機上的文化記憶:重建泰雅織布技藝',
      excerpt: '三代織女的傳承故事,從幾乎失傳到成立織布工坊,不僅保存了傳統圖騰,更創造了部落婦女的經濟來源,讓年輕人看見文化的價值...',
      author: '尤瑪·達陸',
      readTime: '10 分鐘',
      date: '2024-08',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      tags: ['織布工藝', '女性力量', '文化傳承'],
    },
    {
      id: 3,
      tribe: '阿美族',
      title: '海稻米的重生:港口部落的農業奇蹟',
      category: '永續農業',
      excerpt: '失傳百年的海稻米品種,在部落耆老的記憶中被找回。利用海水灌溉的獨特農法,不僅復育了珍貴品種,更創造了永續農業的新模式...',
      author: '舒米·如妮',
      readTime: '12 分鐘',
      date: '2024-07',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      tags: ['海稻米', '原生種', '永續農業'],
    },
    {
      id: 4,
      tribe: '達悟族',
      category: '生態保育',
      title: '飛魚季的永續智慧:蘭嶼的海洋守護',
      excerpt: '數千年來,達悟族嚴格遵守飛魚季的傳統規範,只在特定時間捕撈特定魚種。這套完整的海洋資源管理系統,是現代永續漁業的最佳範例...',
      author: '希婻·瑪飛洑',
      readTime: '9 分鐘',
      date: '2024-06',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      tags: ['飛魚文化', '海洋保育', '傳統規範'],
    },
    {
      id: 5,
      tribe: '布農族',
      category: '工藝創新',
      title: '皮革工藝的新生命:傳統狩獵文化的當代轉化',
      excerpt: '將傳統狩獵文化中的皮革處理技術,結合現代設計美學,創造出獨特的原住民品牌。每件作品都承載著部落的故事與文化意涵...',
      author: '馬彼得',
      readTime: '7 分鐘',
      date: '2024-05',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      tags: ['皮革工藝', '文化創新', '品牌設計'],
    },
    {
      id: 6,
      tribe: '鄒族',
      category: '社區營造',
      title: '部落共同廚房:凝聚社區的飲食文化',
      excerpt: '透過共同廚房的建立,不僅保存了傳統料理方法,更成為部落長者與青年交流的場域,重建了現代社會逐漸流失的社區連結...',
      author: '汪啟聖',
      readTime: '6 分鐘',
      date: '2024-04',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      tags: ['飲食文化', '社區營造', '世代交流'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">深度故事</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            走進部落,聆聽土地與人的對話。這些故事記錄著原住民族如何在傳統與現代之間,
            找到文化傳承與永續發展的平衡之道。
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className={`${category.color} border-0 hover:opacity-80`}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </section>

      {/* Featured Stories */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStories.map((story) => (
            <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all group">
              {/* Story Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                  style={{ backgroundImage: `url(${story.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <Badge className="bg-primary text-primary-foreground">
                    {story.tribe}
                  </Badge>
                  <Badge variant="secondary">
                    {story.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white line-clamp-2">
                    {story.title}
                  </h3>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Excerpt */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {story.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {story.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {story.author}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {story.readTime}
                    </div>
                    <span>{story.date}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Button variant="ghost" className="w-full gap-2 px-0" asChild>
                  <Link href={`/stories/${story.id}`}>
                    閱讀完整故事 <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            載入更多故事
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            分享您的部落故事
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            如果您有部落的精彩故事想要分享,或是正在進行文化復振、永續發展的計畫,
            歡迎與我們聯繫,讓更多人看見原住民族的當代實踐。
          </p>
          <Button size="lg" className="gap-2">
            投稿故事 <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

