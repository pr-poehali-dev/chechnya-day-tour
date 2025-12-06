
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ActivitiesPage from "@/pages/ActivitiesPage";
import HotelsPage from "@/pages/HotelsPage";
import FactsPage from "@/pages/FactsPage";
import TopPlacesPage from "@/pages/TopPlacesPage";
import ContactsPage from "@/pages/ContactsPage";
import TransferPage from "@/pages/TransferPage";
import RestaurantsPage from "@/pages/RestaurantsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/hotels" element={<HotelsPage />} />
              <Route path="/facts" element={<FactsPage />} />
              <Route path="/top-places" element={<TopPlacesPage />} />
              <Route path="/transfer" element={<TransferPage />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;