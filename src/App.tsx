import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import Jobs from "./pages/Jobs";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import AboutUs from "./pages/AboutUs";

import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Create QueryClient outside of component to prevent re-creation
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Preload component to load all pages in the background
const Preloader = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Preload all route components when the app loads
    const preloadPages = async () => {
      // Only preload if we're on the home page to avoid double loading
      if (location.pathname === '/') {
        // Trigger rendering of other pages in hidden iframes or load their resources
        const routes = ['/ueber-uns', '/kontakt', '/termine', '/jobs'];
        
        // Preload images by creating image objects
        routes.forEach(route => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.as = 'document';
          link.href = route;
          document.head.appendChild(link);
        });
      }
    };
    
    preloadPages();
  }, [location.pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Preloader />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ueber-uns" element={<AboutUs />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/termine" element={<Booking />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
