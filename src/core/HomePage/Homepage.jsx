import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Github,
  Trophy,
  Layout,
  Calculator,
  User,
  BarChart3,
  ChevronRight,
  Code2,
  Timer,
  ClipboardList,
  FolderSearch,
  Images,
} from "lucide-react";

export const HomePage = () => {
  const navigate = useNavigate();

  const coreItems = [
    {
      path: "/pulse",
      name: "The Pulse",
      icon: <Activity />,
      color: "text-emerald-400",
    },
    {
      path: "/github",
      name: "GitHub Tracker",
      icon: <Github />,
      color: "text-blue-400",
    },
    {
      path: "/hackathons",
      name: "Hackathon Hub",
      icon: <Trophy />,
      color: "text-amber-400",
    },
    {
      path: "/community-timeline",
      name: "Community Timeline",
      icon: <Timer />,
      color: "text-pink-400",
    },
  ];

  const sandboxItems = [
    { path: "/cgpa", name: "CGPA Analyzer", icon: <Calculator /> },
    { path: "/profile", name: "Profile UI", icon: <User /> },
    { path: "/stats", name: "Stats Widgets", icon: <BarChart3 /> },
    {
      path: "/showcase",
      name: "Project Showcase",
      icon: <ClipboardList />,
      dev: "Newbie Slot",
    },
    {
      path: "/rsearch",
      name: "Resource Search",
      icon: <FolderSearch />,
      dev: "Newbie Slot",
    },
    {
      path: "/tgallery",
      name: "Team Gallery",
      icon: <Images />,
      dev: "Newbie Slot",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12">
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-slate-900 p-2 rounded-lg text-white">
            <Code2 size={28} />
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
            5am Commits
          </h1>
        </div>
        <p className="text-slate-600 text-lg max-w-xl">
          Systems-grade platform for high-velocity contributors.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
          Core
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="group bg-white border border-slate-200 p-6 rounded-xl text-left hover:border-slate-400 transition-all shadow-sm"
            >
              <div className={`mb-4 ${item.color}`}>{item.icon}</div>
              <h3 className="text-slate-900 font-bold">{item.name}</h3>
              <div className="mt-2 text-xs text-slate-600 group-hover:text-slate-400 transition-colors flex items-center">
                Explore <ChevronRight size={12} />
              </div>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
          Sandbox Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sandboxItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-4 bg-slate-100 border border-slate-200 p-4 rounded-xl text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <div className="text-slate-500">{item.icon}</div>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
