import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Users, Heart, Target, Lightbulb, Building } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      key: 'altruistic',
      question: t('about.values.altruistic.question')
    },
    {
      icon: Users,
      key: 'listening',
      question: null
    },
    {
      icon: Leaf,
      key: 'resilience',
      question: null
    },
    {
      icon: Lightbulb,
      key: 'collaboration',
      question: null
    },
    {
      icon: Target,
      key: 'impact',
      question: null
    },
    {
      icon: Building,
      key: 'transparency',
      question: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container py-12 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.hero.subtitle')}
          </p>
          <div className="flex justify-center">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              {t('about.hero.tagline')}
            </Badge>
          </div>
        </div>

        {/* Mission Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              {t('about.mission.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.mission.description')}
            </p>
            <div className="p-6 bg-muted rounded-lg border-l-4 border-primary">
              <p className="text-foreground font-medium italic">
                "{t('about.mission.quote')}"
              </p>
            </div>
          </div>
          <div className="lg:order-first">
            <img 
              src="/api/placeholder/600/400" 
              alt={t('about.mission.imageAlt')}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Objectives Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              {t('about.objectives.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('about.objectives.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <Card key={num} className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold text-lg">{num}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {t(`about.objectives.${num}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`about.objectives.${num}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              {t('about.values.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.key} className="p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {t(`about.values.${value.key}.title`)}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {t(`about.values.${value.key}.description`)}
                    </p>
                    {value.question && (
                      <div className="p-3 bg-muted/50 rounded border-l-2 border-primary/30">
                        <p className="text-sm text-foreground/80 italic">
                          "{value.question}"
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-muted rounded-lg p-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            {t('about.team.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.team.description')}
          </p>
          <div className="flex justify-center">
            <Badge variant="outline" className="text-base px-4 py-2">
              {t('about.team.tagline')}
            </Badge>
          </div>
        </section>

        {/* Impact Section */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">
            {t('about.impact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.impact.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {['ecology', 'benefits', 'resources'].map((key) => (
              <div key={key} className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">{t(`about.impact.${key}.icon`)}</span>
                </div>
                <h3 className="font-semibold text-foreground">
                  {t(`about.impact.${key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(`about.impact.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}