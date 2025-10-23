import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  const navItems = {
    zh: [
      { href: '/', label: '首頁' },
      { href: '/cultures', label: '族群文化' },
      { href: '/sustainability', label: '永續生活' },
      { href: '/stories', label: '深度故事' },
      { href: '/marketplace', label: '部落市集' },
      { href: '/about', label: '關於我們' },
    ],
    en: [
      { href: '/', label: 'Home' },
      { href: '/cultures', label: 'Cultures' },
      { href: '/sustainability', label: 'Sustainability' },
      { href: '/stories', label: 'Stories' },
      { href: '/marketplace', label: 'Marketplace' },
      { href: '/about', label: 'About' },
    ],
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">島</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-foreground">島嶼之聲</div>
                <div className="text-xs text-muted-foreground">Island Voices</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems[language].map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('zh')}>
                  中文
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {navItems[language].map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

