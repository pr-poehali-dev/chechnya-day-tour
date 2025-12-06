
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
import TransferCalculatorPage from "@/pages/TransferCalculatorPage";
import RestaurantsPage from "@/pages/RestaurantsPage";
import GalleryPage from "@/pages/GalleryPage";
import ReviewsPage from "@/pages/ReviewsPage";
import JeepToursPage from "@/pages/JeepToursPage";
import HorseRidingPage from "@/pages/HorseRidingPage";
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
              <Route path="/activities/jeep-tours" element={<JeepToursPage />} />
              <Route path="/activities/horse-riding" element={<HorseRidingPage />} />
              <Route path="/hotels" element={<HotelsPage />} />
              <Route path="/facts" element={<FactsPage />} />
              <Route path="/top-places" element={<TopPlacesPage />} />
              <Route path="/transfer" element={<TransferCalculatorPage />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
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