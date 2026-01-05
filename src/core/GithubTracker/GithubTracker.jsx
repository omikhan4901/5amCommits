import { Github
} from 'lucide-react';

export const GithubTracker = () => (
  <div className="p-8 text-white">
    <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><Github className="text-blue-400" /> GitHub Tracker</h2>
    <div className="bg-slate-900 border border-slate-800 p-12 rounded-2xl text-center text-slate-500 italic">
      Core Logic: Shohan & Nayeem. Identity mapping and GraphQL sync logic.
    </div>
  </div>
);
