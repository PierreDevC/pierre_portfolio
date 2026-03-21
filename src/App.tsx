import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationProvider } from "@/contexts/NavigationContext";
import SmoothScroll from "@/components/SmoothScroll";
import Index from "./pages/Index";
import MortWise from "./pages/MortWise";
import CalendApp from "./pages/CalendApp";
import CryptoTrade from "./pages/CryptoTrade";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SmoothScroll>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/mortwise" element={<MortWise />} />
              <Route path="/calendapp" element={<CalendApp />} />
              <Route path="/cryptotrade" element={<CryptoTrade />} />
              <Route path="/projects" element={<AllProjects />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SmoothScroll>
        </BrowserRouter>
      </TooltipProvider>
    </NavigationProvider>
  </QueryClientProvider>
);

export default App;
