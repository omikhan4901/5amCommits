import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// --- Core COMPONENTS (Learning Modules) ---

import { HomePage } from "./core/HomePage/Homepage";
import { CommunityPulse } from "./core/CommunityPulse/CommunityPulse";
import { HackathonPage } from "./core/HackathonPage/HackathonPage";
import { GithubTracker } from "./core/GithubTracker/GithubTracker";

// --- SANDBOX COMPONENTS (Learning Modules) ---
import { CGPAAnalyzer } from "./features/CGPAAnalyzer/CGPAAnalyzer";
import { ProfileUI } from "./features/ProfileUI/ProfileUI";
import { StatsWidgets } from "./features/StatsWidgets/StatsWidgets";
import { ProjectShowcase } from "./features/ProjectShowcase/ProjectShowcase";
import { ResourceSearch } from "./features/ResourceSearch/ResourceSearch";
import { TeamGallery } from "./features/TeamGallery/TeamGallery";
import CommunityTimeline from "./core/CommunityTimeline/CommunityTimeline";

// --- APP WRAPPER (Routing) ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-500/30">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/community-timeline" element={<CommunityTimeline />} />
            <Route path="/pulse" element={<CommunityPulse />} />
            <Route path="/github" element={<GithubTracker />} />
            <Route path="/hackathons" element={<HackathonPage />} />
            <Route path="/cgpa" element={<CGPAAnalyzer />} />
            <Route path="/profile" element={<ProfileUI />} />
            <Route path="/stats" element={<StatsWidgets />} />
            <Route path="/showcase" element={<ProjectShowcase />} />
            <Route path="/rsearch" element={<ResourceSearch />} />
            <Route path="/tgallery" element={<TeamGallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
