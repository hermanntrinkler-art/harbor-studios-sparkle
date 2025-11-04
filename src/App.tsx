import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RecipePixieDetails from "./pages/RecipePixieDetails";
import CaptainsLogDetails from "./pages/CaptainsLogDetails";
import SocialPostProDetails from "./pages/SocialPostProDetails";
import OceanMindDetails from "./pages/OceanMindDetails";
import Privacy from "./pages/Privacy";
import DataDeletion from "./pages/DataDeletion";
import Terms from "./pages/Terms";
import Support from "./pages/Support";
import RecipePixieGuide from "./pages/support/RecipePixieGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/recipe-pixie" element={<RecipePixieDetails />} />
        <Route path="/projects/captains-log" element={<CaptainsLogDetails />} />
        <Route path="/projects/social-post-pro" element={<SocialPostProDetails />} />
        <Route path="/projects/ocean-mind" element={<OceanMindDetails />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support/recipe-pixie" element={<RecipePixieGuide />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
