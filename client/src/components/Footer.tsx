import { Link } from 'wouter';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="森乃嶼" className="w-12 h-12" />
              <div>
                <div className="font-bold text-lg text-foreground">森乃嶼</div>
                <div className="text-xs text-muted-foreground">Senan Yu</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cultures">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    族群文化
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/sustainability">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    永續生活
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/stories">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    深度故事
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/marketplace">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    部落市集
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.about')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {t('nav.about')}
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.partners')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

