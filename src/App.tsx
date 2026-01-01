import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Codebase from "./pages/Codebase";
import Community from "./pages/Community";
import Opennetics from "./pages/Opennetics";
import Journal from "./pages/Journal";
import JournalEntry1 from "./pages/JournalEntry1";
import JournalEntry2 from "./pages/JournalEntry2";
import Dotfiles from "./pages/Dotfiles";
import PGP from "./pages/PGP";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/codebase" element={<Codebase />} />
          <Route path="/community" element={<Community />} />
          <Route path="/opennetics" element={<Opennetics />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/heist-aftermath" element={<JournalEntry1 />} />
          <Route
            path="/journal/chrome-installation"
            element={<JournalEntry2 />}
          />
          <Route path="/dotfiles" element={<Dotfiles />} />
          <Route path="/pgp" element={<PGP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
