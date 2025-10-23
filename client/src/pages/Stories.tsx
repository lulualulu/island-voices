import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Clock, User } from 'lucide-react';

export default function Stories() {
  const { t } = useLanguage();
  
  const categories = [
    { name: t('stories.category.youth'), count: 12, color: 'bg-red-100 text-red-700' },
    { name: t('stories.category.culture'), count: 18, color: 'bg-orange-100 text-orange-700' },
    { name: t('stories.category.agriculture'), count: 16, color: 'bg-green-100 text-green-700' },
    { name: t('stories.category.craft'), count: 10, color: 'bg-blue-100 text-blue-700' },
    { name: t('stories.category.ecology'), count: 14, color: 'bg-purple-100 text-purple-700' },
    { name: t('stories.category.community'), count: 11, color: 'bg-pink-100 text-pink-700' },
  ];

  const { language } = useLanguage();
  
  const featuredStories = [
    {
      id: 1,
      tribe: '排灣族',
      category: t('stories.category.youth'),
      title: language === 'zh' ? '從台北回到霧台:青年的小米復育之路' : 'From Taipei to Wutai: A Youth\'s Journey in Millet Revival',
      excerpt: language === 'zh' ? '離開都市的工程師工作,回到部落跟著vuvu(祖父母)學習傳統農耕,用科技記錄20種小米品種的生長數據,建立部落的種子銀行...' : 'Leaving an engineering job in the city, returning to the tribe to learn traditional farming from vuvu (grandparents), using technology to record growth data of 20 millet varieties, establishing the tribe\'s seed bank...',
      author: '阿布思',
      readTime: `8 ${t('stories.readtime')}`,
      date: '2024-09',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['小米復育', '青年返鄉', '傳統知識'] : ['Millet Revival', 'Youth Return', 'Traditional Knowledge'],
    },
    {
      id: 2,
      tribe: '泰雅族',
      category: t('stories.category.agriculture'),
      title: language === 'zh' ? '長者智慧的有機實踐：石磊部落的農業創新' : 'Elder Wisdom in Organic Practice: Agricultural Innovation in Shilei Community',
      excerpt: language === 'zh' ? '在泰雅族石磊部落，長者們將傳統生態知識巧妙融入現代有機農業。運用森林中的黃柏、竹筍、梅子等在地資源，開創出獨特的天然肥料與病蟲害防治方法，證明了原住民智慧在永續農業中的無限可能...' : 'In the Tayal Shilei community, elders skillfully integrate traditional ecological knowledge into modern organic farming. Using local forest resources like huang bai, bamboo shoots, and plums, they\'ve created unique natural fertilizers and pest control methods, proving the infinite potential of indigenous wisdom in sustainable agriculture...',
      author: '石磊部落農業合作社',
      readTime: `11 ${t('stories.readtime')}`,
      date: '2024-10',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['長者智慧', '有機農業', '傳統生態知識'] : ['Elder Wisdom', 'Organic Agriculture', 'Traditional Ecological Knowledge'],
    },
    {
      id: 3,
      tribe: '泰雅族',
      category: t('stories.category.culture'),
      title: language === 'zh' ? '織布機上的文化記憶:重建泰雅織布技藝' : 'Cultural Memory on the Loom: Reviving Tayal Weaving Arts',
      excerpt: language === 'zh' ? '三代織女的傳承故事,從幾乎失傳到成立織布工坊,不僅保存了傳統圖騰,更創造了部落婦女的經濟來源,讓年輕人看見文化的價值...' : 'Three generations of weavers\' heritage story, from near extinction to establishing weaving workshops, not only preserving traditional totems but also creating economic opportunities for tribal women, showing young people the value of culture...',
      author: '尤瑪·達陸',
      readTime: `10 ${t('stories.readtime')}`,
      date: '2024-08',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['織布工藝', '女性力量', '文化傳承'] : ['Weaving Craft', 'Women Power', 'Cultural Heritage'],
    },
    {
      id: 4,
      tribe: '阿美族',
      category: t('stories.category.agriculture'),
      title: language === 'zh' ? '海稻米的重生:港口部落的農業奇蹟' : 'Revival of Sea Rice: Agricultural Miracle of Gangkou Tribe',
      excerpt: language === 'zh' ? '失傳百年的海稻米品種,在部落耆老的記憶中被找回。利用海水灌溉的獨特農法,不僅復育了珍貴品種,更創造了永續農業的新模式...' : 'The sea rice variety lost for a century was rediscovered in tribal elders\' memories. Using unique farming methods with seawater irrigation, not only reviving precious varieties but creating new models of sustainable agriculture...',
      author: '舒米·如妮',
      readTime: `12 ${t('stories.readtime')}`,
      date: '2024-07',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['海稻米', '原生種', '永續農業'] : ['Sea Rice', 'Native Species', 'Sustainable Agriculture'],
    },
    {
      id: 5,
      tribe: '達悟族',
      category: t('stories.category.ecology'),
      title: language === 'zh' ? '飛魚季的永續智慧:蘭嶼的海洋守護' : 'Sustainable Wisdom of Flying Fish Season: Ocean Conservation in Lanyu',
      excerpt: language === 'zh' ? '數千年來,達悟族嚴格遵守飛魚季的傳統規範,只在特定時間捕撈特定魚種。這套完整的海洋資源管理系統,是現代永續漁業的最佳範例...' : 'For thousands of years, the Tao people have strictly followed traditional flying fish season regulations, fishing specific species only at specific times. This complete marine resource management system is the best example of modern sustainable fisheries...',
      author: '希婻·瑪飛洑',
      readTime: `9 ${t('stories.readtime')}`,
      date: '2024-06',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['飛魚文化', '海洋保育', '傳統規範'] : ['Flying Fish Culture', 'Ocean Conservation', 'Traditional Regulations'],
    },
    {
      id: 6,
      tribe: '布農族',
      category: t('stories.category.craft'),
      title: language === 'zh' ? '皮革工藝的新生命:傳統狩獵文化的當代轉化' : 'New Life for Leather Crafts: Contemporary Transformation of Traditional Hunting Culture',
      excerpt: language === 'zh' ? '將傳統狩獵文化中的皮革處理技術,結合現代設計美學,創造出獨特的原住民品牌。每件作品都承載著部落的故事與文化意涵...' : 'Combining leather processing techniques from traditional hunting culture with modern design aesthetics, creating unique indigenous brands. Each piece carries tribal stories and cultural meanings...',
      author: '馬彼得',
      readTime: `7 ${t('stories.readtime')}`,
      date: '2024-05',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['皮革工藝', '文化創新', '品牌設計'] : ['Leather Craft', 'Cultural Innovation', 'Brand Design'],
    },
    {
      id: 7,
      tribe: '鄒族',
      category: t('stories.category.community'),
      title: language === 'zh' ? '部落共同廚房:凝聚社區的飲食文化' : 'Tribal Community Kitchen: Food Culture that Unites the Community',
      excerpt: language === 'zh' ? '透過共同廚房的建立,不僅保存了傳統料理方法,更成為部落長者與青年交流的場域,重建了現代社會逐漸流失的社區連結...' : 'Through establishing a community kitchen, not only preserving traditional cooking methods but also becoming a space for exchange between tribal elders and youth, rebuilding community connections gradually lost in modern society...',
      author: '汪啟聖',
      readTime: `6 ${t('stories.readtime')}`,
      date: '2024-04',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['飲食文化', '社區營造', '世代交流'] : ['Food Culture', 'Community Building', 'Intergenerational Exchange'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('stories.title')}</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            {t('stories.subtitle')}
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
                    {t('stories.readfull')} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {t('stories.loadmore')}
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('stories.share.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('stories.share.desc')}
          </p>
          <Button size="lg" className="gap-2">
            {t('stories.share.submit')} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

