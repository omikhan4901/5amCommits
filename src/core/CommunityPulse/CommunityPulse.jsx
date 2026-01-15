import { Activity } from "lucide-react";

export const CommunityPulse = () => (
  <div className="p-8 text-slate-900">
    <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
      <Activity className="text-emerald-400" /> Scoring Engine
    </h2>
    <div className="bg-slate-100 border border-slate-200 p-12 rounded-2xl text-center text-slate-500 italic">
      Core Logic: Omi & Ratul. Time-series data and decay algorithms go here.
    </div>
  </div>
);
