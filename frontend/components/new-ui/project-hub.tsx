import { ASK_JUNO_GRADIENT } from "@/lib/constants/framework-constants";
import { CalendarDays, Filter, Info, Search, SlidersHorizontal } from "lucide-react";



type Variant = "critical" | "high" | "medium" | "low";

const VARIANT_MAP = {
  critical: {
    border: "border-red-400",
    bg: "bg-red-50",
    icon: <img src="emergency_heat.svg" className="text-red-500 h-8 w-8" />,
    tag: "Critical",
    tagColor: "bg-red-100 text-red-600",
  },
  high: {
    border: "border-yellow-400",
    bg: "bg-yellow-50",
    icon: <img src="warning.svg" className="text-red-500 h-8 w-8" />,
    tag: "High",
    tagColor: "bg-yellow-100 text-yellow-600",
  },
  medium: {
    border: "border-blue-400",
    bg: "bg-blue-50",
    icon: <Info className="text-blue-500" size={30} />,
    tag: "Medium",
    tagColor: "bg-blue-100 text-blue-600",
  },
  low: {
    border: "border-green-400",
    bg: "bg-green-50",
    icon: <img src="brightness_alert.svg" className="text-green-500 h-8 w-8" />,
    tag: "Low",
    tagColor: "bg-green-100 text-green-600",
  },
};

export function ProjectHub() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-6 space-y-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Project Hub</h2>
          <p className="text-sm text-gray-400">5 most recent projects</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input
              placeholder="Search"
              className="pl-9 pr-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Filter Icons */}
          <button className="p-2 rounded-full border hover:bg-gray-50">
            <Filter size={16} />
          </button>
          <button className="p-2 rounded-full border hover:bg-gray-50">
            <SlidersHorizontal size={16} />
          </button>

          <button className="text-sm text-purple-600 font-medium">
            View All Projects
          </button>
        </div>
      </div>

      {/* Recent Projects */}
      <div>
        <p className="text-sm text-gray-400 mb-3">5 most recent projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <ProjectCard variant="critical" />
          <ProjectCard variant="high" />
          <ProjectCard variant="low" />
          <ProjectCard variant="medium" />
          <ProjectCard variant="high" />
        </div>
      </div>

      {/* Impacted Projects */}
      <div>
        <p className="text-sm text-gray-400 mb-3">5 most impacted projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <ProjectCard variant="low" />
          <ProjectCard variant="medium" />
          <ProjectCard variant="high" />
          <ProjectCard variant="critical" />
          <ProjectCard variant="high" />
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ variant }: { variant: Variant }) {
  const v = VARIANT_MAP[variant];

  return (
    <div
      className={`rounded-xl border ${v.border} ${v.bg} p-4 space-y-3 shadow-sm hover:shadow-md transition`}
    >
      {/* Title */}
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-semibold">
          Clean Power Plan
          <br />
          Review Taskforce
        </h3>
        {v.icon}
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Progress</span>
          <span>90%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-purple-600 rounded-full w-[90%]" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          <img src="/avatar1.svg" className="w-6 h-6 rounded-full border" />
          <img src="/avatar2.svg" className="w-6 h-6 rounded-full border" />
          <img src="/avatar3.svg" className="w-6 h-6 rounded-full border" />
        </div>

        <span className={`text-xs px-2 py-0.5 rounded-full ${v.tagColor}`}>
          {v.tag}
        </span>
      </div>

      {/* Date */}
      <div className="text-xs text-gray-400 flex items-center gap-1">
        <CalendarDays color="#8D48F7" size={21} /> 05/12/25
      </div>
    </div>
  );
}

export function ActionButtonFull({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full border border-purple-300 px-4 py-2 text-sm cursor-pointer"
      style={{
        background: ASK_JUNO_GRADIENT,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      {icon}
      {label}
    </button>
  );
}

export function ActionButtonIcon({
  icon,
  onClick,
}: {
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-xl border border-purple-300
                 flex items-center justify-center
                 hover:bg-purple-50 transition"
    >
      {icon}
    </button>
  );
}