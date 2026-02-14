import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/ScrollToTop";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RecipePixieDetails from "./pages/RecipePixieDetails";
import CaptainsLogDetails from "./pages/CaptainsLogDetails";
import CaptainsLogDetailsEN from "./pages/CaptainsLogDetailsEN";
import CaptainsLogDetailsES from "./pages/CaptainsLogDetailsES";
import CaptainsLogDetailsFR from "./pages/CaptainsLogDetailsFR";
import CaptainsLogDetailsIT from "./pages/CaptainsLogDetailsIT";
import CaptainsLogDetailsPT from "./pages/CaptainsLogDetailsPT";
import SocialPostProDetails from "./pages/SocialPostProDetails";
import OceanMindDetails from "./pages/OceanMindDetails";
import StoryPixieDetails from "./pages/StoryPixieDetails";
import PixieGuardVPNDetails from "./pages/PixieGuardVPNDetails";
import VideoPixieDetails from "./pages/VideoPixieDetails";
import BirthdayPixieDetails from "./pages/BirthdayPixieDetails";
import LegacyVaultDetails from "./pages/LegacyVaultDetails";
import Privacy from "./pages/Privacy";
import DataDeletion from "./pages/DataDeletion";
import Terms from "./pages/Terms";
import Support from "./pages/Support";
import RecipePixieGuide from "./pages/support/RecipePixieGuide";
import CaptainsLogImprint from "./pages/captains-log/CaptainsLogImprint";
import CaptainsLogImprintEN from "./pages/captains-log/CaptainsLogImprintEN";
import CaptainsLogImprintES from "./pages/captains-log/CaptainsLogImprintES";
import CaptainsLogImprintFR from "./pages/captains-log/CaptainsLogImprintFR";
import CaptainsLogImprintIT from "./pages/captains-log/CaptainsLogImprintIT";
import CaptainsLogImprintPT from "./pages/captains-log/CaptainsLogImprintPT";
import CaptainsLogPrivacy from "./pages/captains-log/CaptainsLogPrivacy";
import CaptainsLogPrivacyEN from "./pages/captains-log/CaptainsLogPrivacyEN";
import CaptainsLogPrivacyES from "./pages/captains-log/CaptainsLogPrivacyES";
import CaptainsLogPrivacyFR from "./pages/captains-log/CaptainsLogPrivacyFR";
import CaptainsLogPrivacyIT from "./pages/captains-log/CaptainsLogPrivacyIT";
import CaptainsLogPrivacyPT from "./pages/captains-log/CaptainsLogPrivacyPT";
import CaptainsLogDataDeletion from "./pages/captains-log/CaptainsLogDataDeletion";
import CaptainsLogDataDeletionEN from "./pages/captains-log/CaptainsLogDataDeletionEN";
import CaptainsLogDataDeletionES from "./pages/captains-log/CaptainsLogDataDeletionES";
import CaptainsLogDataDeletionFR from "./pages/captains-log/CaptainsLogDataDeletionFR";
import CaptainsLogDataDeletionIT from "./pages/captains-log/CaptainsLogDataDeletionIT";
import CaptainsLogDataDeletionPT from "./pages/captains-log/CaptainsLogDataDeletionPT";
import CaptainsLogTerms from "./pages/captains-log/CaptainsLogTerms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/recipe-pixie" element={<RecipePixieDetails />} />
        <Route path="/projects/captains-log" element={<CaptainsLogDetails />} />
        <Route path="/projects/captains-log/en" element={<CaptainsLogDetailsEN />} />
        <Route path="/projects/captains-log/es" element={<CaptainsLogDetailsES />} />
        <Route path="/projects/captains-log/fr" element={<CaptainsLogDetailsFR />} />
        <Route path="/projects/captains-log/it" element={<CaptainsLogDetailsIT />} />
        <Route path="/projects/captains-log/pt" element={<CaptainsLogDetailsPT />} />
        <Route path="/captains-log/imprint" element={<CaptainsLogImprint />} />
        <Route path="/captains-log/imprint/en" element={<CaptainsLogImprintEN />} />
        <Route path="/captains-log/imprint/es" element={<CaptainsLogImprintES />} />
        <Route path="/captains-log/imprint/fr" element={<CaptainsLogImprintFR />} />
        <Route path="/captains-log/imprint/it" element={<CaptainsLogImprintIT />} />
        <Route path="/captains-log/imprint/pt" element={<CaptainsLogImprintPT />} />
        <Route path="/captains-log/privacy" element={<CaptainsLogPrivacy />} />
        <Route path="/captains-log/privacy/en" element={<CaptainsLogPrivacyEN />} />
        <Route path="/captains-log/privacy/es" element={<CaptainsLogPrivacyES />} />
        <Route path="/captains-log/privacy/fr" element={<CaptainsLogPrivacyFR />} />
        <Route path="/captains-log/privacy/it" element={<CaptainsLogPrivacyIT />} />
        <Route path="/captains-log/privacy/pt" element={<CaptainsLogPrivacyPT />} />
        <Route path="/captains-log/data-deletion" element={<CaptainsLogDataDeletion />} />
        <Route path="/captains-log/data-deletion/en" element={<CaptainsLogDataDeletionEN />} />
        <Route path="/captains-log/data-deletion/es" element={<CaptainsLogDataDeletionES />} />
        <Route path="/captains-log/data-deletion/fr" element={<CaptainsLogDataDeletionFR />} />
        <Route path="/captains-log/data-deletion/it" element={<CaptainsLogDataDeletionIT />} />
        <Route path="/captains-log/data-deletion/pt" element={<CaptainsLogDataDeletionPT />} />
        <Route path="/captains-log/terms" element={<CaptainsLogTerms />} />
        <Route path="/projects/social-post-pro" element={<SocialPostProDetails />} />
        <Route path="/projects/ocean-mind" element={<OceanMindDetails />} />
        <Route path="/projects/storypixie" element={<StoryPixieDetails />} />
        <Route path="/projects/pixieguard-vpn" element={<PixieGuardVPNDetails />} />
        <Route path="/projects/video-pixie" element={<VideoPixieDetails />} />
        <Route path="/projects/birthday-pixie" element={<BirthdayPixieDetails />} />
        <Route path="/projects/legacy-vault" element={<LegacyVaultDetails />} />
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
