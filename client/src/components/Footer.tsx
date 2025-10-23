import { Link } from 'wouter';
import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
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
              以文化為眼,凝視島嶼。透過原住民族的智慧與實踐,探索永續生活的可能性。
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
            <h3 className="font-semibold text-foreground mb-4">快速連結</h3>
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
            <h3 className="font-semibold text-foreground mb-4">關於</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    關於我們
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  聯絡我們
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  合作夥伴
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  隱私政策
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 森乃嶼 Senan Yu. 文化傳承 × 友善農業 × 生物多樣性</p>
        </div>
      </div>
    </footer>
  );
}

