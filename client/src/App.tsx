import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
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

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/cultures"} component={Cultures} />
      <Route path={"/cultures/:id"} component={CultureDetail} />
      <Route path={"/sustainability"} component={Sustainability} />
      <Route path={"/stories"} component={Stories} />
      <Route path={"/marketplace"} component={Marketplace} />
      <Route path={"/marketplace/:id"} component={TribeDetail} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
