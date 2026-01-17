import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import AudioPlayer from "./components/AudioPlayer";
import Index from "./pages/Index";
import Background from "./pages/Background";
import Codebase from "./pages/Codebase";
import Community from "./pages/Community";
import Opennetics from "./pages/Opennetics";
import Certifications from "./pages/Certifications";
import Journal from "./pages/Journal";
import JournalEntry1 from "./pages/JournalEntry1";
import JournalEntry2 from "./pages/JournalEntry2";
import Dotfiles from "./pages/Dotfiles";
import PGP from "./pages/PGP";
import NotFound from "./pages/NotFound";
import backgroundMusic from "./assets/audio/background-music.mp3";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AudioPlayer src={backgroundMusic} />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/background" element={<Background />} />
          <Route path="/codebase" element={<Codebase />} />
          <Route path="/community" element={<Community />} />
          <Route path="/opennetics" element={<Opennetics />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/heist-aftermath" element={<JournalEntry1 />} />
          <Route path="/journal/chrome-installation" element={<JournalEntry2 />} />
          <Route path="/dotfiles" element={<Dotfiles />} />
          <Route path="/pgp" element={<PGP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
