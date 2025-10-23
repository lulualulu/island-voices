import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Leaf, Users, Heart, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetPath } from '@/utils/paths';

export default function Home() {
  const { t } = useLanguage();
  const tribes = [
    { name: '阿美族', nameEn: 'Amis', color: 'bg-red-100 hover:bg-red-200' },
    { name: '排灣族', nameEn: 'Paiwan', color: 'bg-orange-100 hover:bg-orange-200' },
    { name: '泰雅族', nameEn: 'Atayal', color: 'bg-yellow-100 hover:bg-yellow-200' },
    { name: '布農族', nameEn: 'Bunun', color: 'bg-green-100 hover:bg-green-200' },
    { name: '卑南族', nameEn: 'Puyuma', color: 'bg-blue-100 hover:bg-blue-200' },
    { name: '魯凱族', nameEn: 'Rukai', color: 'bg-indigo-100 hover:bg-indigo-200' },
    { name: '鄒族', nameEn: 'Tsou', color: 'bg-purple-100 hover:bg-purple-200' },
    { name: '賽夏族', nameEn: 'Saisiyat', color: 'bg-pink-100 hover:bg-pink-200' },
  ];

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      titleKey: 'home.feature1.title',
      subtitleKey: 'home.feature1.subtitle',
      descKey: 'home.feature1.desc',
    },
    {
      icon: <Leaf className="h-8 w-8 text-secondary" />,
      titleKey: 'home.feature2.title',
      subtitleKey: 'home.feature2.subtitle',
      descKey: 'home.feature2.desc',
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      titleKey: 'home.feature3.title',
      subtitleKey: 'home.feature3.subtitle',
      descKey: 'home.feature3.desc',
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-primary" />,
      titleKey: 'home.feature4.title',
      subtitleKey: 'home.feature4.subtitle',
      descKey: 'home.feature4.desc',
    },
  ];

  const stories = [
    {
      title: '霧台部落的小米復育',
      tribe: '排灣族',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      description: '在海拔1000公尺的霧台部落,族人正努力復育傳統小米品種...',
    },
    {
      title: '司馬庫斯的生態旅遊',
      tribe: '泰雅族',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: '上帝的部落如何在保護森林與發展觀光之間找到平衡...',
    },
    {
      title: '港口部落的海洋文化',
      tribe: '阿美族',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      description: '太平洋畔的阿美族人,延續著與海洋共生的傳統智慧...',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 container text-center text-white">
          <img src={getAssetPath('/logo.png')} alt="森乃嶼" className="w-32 h-32 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            {t('home.hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {t('home.hero.tagline')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/cultures">
              <Button size="lg" className="gap-2">
                {t('home.hero.cta1')} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                {t('home.hero.cta2')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.section1.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('home.section1.desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{t(feature.titleKey)}</h3>
                <p className="text-sm text-muted-foreground mb-2">{t(feature.subtitleKey)}</p>
                <p className="text-sm text-muted-foreground">{t(feature.descKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tribes Quick Access */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.tribes.title')}</h2>
            <p className="text-muted-foreground">
              {t('home.tribes.desc')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tribes.map((tribe, index) => (
              <Link key={index} href={`/cultures/${tribe.nameEn.toLowerCase()}`}>
                <div
                  className={`${tribe.color} rounded-lg p-6 text-center cursor-pointer transition-all hover:scale-105 hover:shadow-lg`}
                >
                  <div className="font-bold text-lg mb-1">{tribe.name}</div>
                  <div className="text-xs text-muted-foreground">{tribe.nameEn}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/cultures">
              <Button variant="outline" className="gap-2">
                {t('home.tribes.viewall')} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.stories.title')}</h2>
          <p className="text-muted-foreground">
            {t('home.stories.desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${story.image})` }}
              />
              <CardContent className="p-6">
                <div className="text-xs text-primary font-semibold mb-2">{story.tribe}</div>
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{story.description}</p>
                <Link href="/stories">
                  <Button variant="ghost" className="gap-2 px-0">
                    {t('home.stories.readmore')} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {t('home.cta.desc')}
          </p>
          <Link href="/marketplace">
            <Button size="lg" variant="secondary" className="gap-2">
              {t('home.cta.button')} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

