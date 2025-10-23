import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import TribeDetail from "./pages/TribeDetail";
import Cultures from "./pages/Cultures";
import CultureDetail from "./pages/CultureDetail";
import Sustainability from "./pages/Sustainability";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import About from "./pages/About";

function Router() {
  // Get the base path for GitHub Pages
  const base = import.meta.env.PROD ? "/island-voices" : "";
  
  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/cultures"} component={Cultures} />
        <Route path={"/cultures/:id"} component={CultureDetail} />
        <Route path={"/sustainability"} component={Sustainability} />
        <Route path={"/stories"} component={Stories} />
        <Route path={"/stories/:id"} component={StoryDetail} />
        <Route path={"/marketplace"} component={Marketplace} />
        <Route path={"/marketplace/:id"} component={TribeDetail} />
        <Route path={"/about"} component={About} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
