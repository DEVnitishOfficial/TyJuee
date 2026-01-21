"use client";
import { useState } from "react";
import { Header } from "./new-ui/header";
import { ChatBox } from "./new-ui/chatbox";
import { RecentSearchAndUpdates } from "./new-ui/recent-search-update";
import { ActionButtonFull, ActionButtonIcon, ProjectHub } from "./new-ui/project-hub";

type ViewType = "home" | "projects" | "tracker" | "alerts";

export default function NewHomePage() {
  const [isRecentSearchOpen, setIsRecentSearchOpen] = useState(false);
  const [isRecentUpdatesOpen, setIsRecentUpdatesOpen] = useState(false);
  const [activeView, setActiveView] = useState<ViewType>("home");

  return (
    <div className="w-full flex justify-center items-center py-12">
      <div className="w-full max-w-5xl text-center space-y-8 flex flex-col">

        {/* --- 1. CONTENT AREA --- */}
        <div className="flex-grow">

          {/* HOME VIEW */}
          {activeView === "home" && (
            <div className="space-y-8">
              <Header />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
                <ActionButtonFull icon={<img src="balance.svg" className="h-6 w-6" />} label="Regulations" />
                <ActionButtonFull icon={<img src="assured_workload.svg" className="h-6 w-6" />} label="Compliance" />
                <ActionButtonFull icon={<img src="gpp_maybe.svg" className="h-6 w-6" />} label="Risk" />
                <ActionButtonFull icon={<img src="approval_delegation.svg" className="h-6 w-6" />} label="Audit" />
                <ActionButtonFull icon={<img src="storefront.svg" className="h-6 w-6" />} label="Vendor Management" />
                <ActionButtonFull icon={<img src="backup_table.svg" className="h-6 w-6" />} label="Table Top" />
              </div>
              <ChatBox />
              <RecentSearchAndUpdates
                isRecentSearchOpen={isRecentSearchOpen}
                setIsRecentSearchOpen={setIsRecentSearchOpen}
                isRecentUpdatesOpen={isRecentUpdatesOpen}
                setIsRecentUpdatesOpen={setIsRecentUpdatesOpen}
              />
            </div>
          )}

          {/* PROJECTS VIEW */}
          {(activeView === "projects" || activeView === "tracker" || activeView === "alerts") && (
            <div className="space-y-8">
              <Header />
              <div className="flex justify-center gap-4 mt-4">
                <ActionButtonIcon icon={<img src="balance.svg" className="h-6 w-6" />} />
                <ActionButtonIcon icon={<img src="assured_workload.svg" className="h-6 w-6" />} />
                <ActionButtonIcon icon={<img src="gpp_maybe.svg" className="h-6 w-6" />} />
                <ActionButtonIcon icon={<img src="approval_delegation.svg" className="h-6 w-6" />} />
                <ActionButtonIcon icon={<img src="storefront.svg" className="h-6 w-6" />} />
                <ActionButtonIcon icon={<img src="backup_table.svg" className="h-6 w-6" />} />
              </div>
              <ChatBox />
            </div>
          )}
        </div>

        {/* --- 2. NAVIGATION AREA --- */}
        <div className="py-8">
          <BottomNavigation activeView={activeView} setActiveView={setActiveView} />
        </div>

        {/* --- 3. PROJECT HUB --- */}
        {activeView === "projects" && (
          <div className="mt-6">
            <ProjectHub />
          </div>
        )}

        {/* TRACKER VIEW */}
        {activeView === "tracker" && <TaskAndCalendarSection />}

        {/* ALERTS VIEW */}
        {/* {activeView === "alerts" && <NotificationsWidget />} */}

      </div>
    </div>
  );
}


function BottomNavigation({ activeView, setActiveView }: { activeView: ViewType; setActiveView: React.Dispatch<React.SetStateAction<ViewType>> }) {
  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-sm rounded-full px-8 py-2 flex gap-10 text-sm">

        <span
          onClick={() => setActiveView("projects")}
          className={`cursor-pointer px-4 py-1 rounded-full transition
        ${activeView === "projects"
              ? "bg-purple-100 text-purple-600 font-medium"
              : "text-gray-400 hover:text-purple-600"}`}
        >
          Projects
        </span>

        <span
          onClick={() => setActiveView("tracker")}
          className={`cursor-pointer px-4 py-1 rounded-full transition
        ${activeView === "tracker"
              ? "bg-purple-100 text-purple-600 font-medium"
              : "text-gray-400 hover:text-purple-600"}`}
        >
          Tracker
        </span>

        <span
          onClick={() => setActiveView("alerts")}
          className={`cursor-pointer px-4 py-1 rounded-full transition
        ${activeView === "alerts"
              ? "bg-purple-100 text-purple-600 font-medium"
              : "text-gray-400 hover:text-purple-600"}`}
        >
          Alert
        </span>

      </div>
    </div>
  )
}

export function TaskAndCalendarSection() {
  return (
    <div className="w-full px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MyTaskStatus />
        <MyCalendar />
      </div>
    </div>
  );
}


function MyTaskStatus() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-900">My Task Status</h3>
          <p className="text-xs text-gray-400">Monthly Analyzed Report</p>
        </div>
        <button className="text-xs text-purple-600 font-medium">
          View Tasks
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row gap-6 mt-6">
        {/* Progress Circle */}
        <div className="flex justify-center items-center sm:w-1/2">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-full border-[12px] border-gray-200" />
            <div className="absolute inset-0 rounded-full border-[12px] border-purple-600 border-t-transparent rotate-[225deg]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-semibold text-purple-600">
                65%
              </span>
              <span className="text-xs text-gray-400">
                65/100 tasks completed
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-4 sm:w-1/2">
          <StatusRow label="Documents/Workflows" value={50} color="bg-purple-500" />
          <StatusRow label="Assignments" value={82} color="bg-blue-500" />
          <StatusRow label="Approvals" value={17} color="bg-green-500" />

          {/* Legend */}
          <div className="flex gap-4 text-xs mt-4">
            <Legend color="bg-purple-600" label="Completed" />
            <Legend color="bg-purple-300" label="In-Progress" />
            <Legend color="bg-gray-300" label="Still Waiting" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusRow({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className={`w-2 h-2 rounded-full ${color}`} />
      {label}
    </div>
  );
}

function MyCalendar() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-900">My Calendar</h3>
        <button className="text-xs text-purple-600 font-medium">
          View Full Calendar
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        {/* Calendar */}
        <div className="md:w-1/2">
          <CalendarGrid />
        </div>

        {/* Tasks */}
        <div className="md:w-1/2 space-y-3 max-h-[260px] overflow-y-auto">
          <CalendarTask
            color="blue"
            label="Compliance"
            level="Medium"
          />
          <CalendarTask
            color="red"
            label="Risk"
            level="Critical"
          />
          <CalendarTask
            color="green"
            label="Audit"
            level="Low"
          />
        </div>
      </div>
    </div>
  );
}

function CalendarTask({
  color,
  label,
  level,
}: {
  color: "blue" | "red" | "green";
  label: string;
  level: string;
}) {
  const colorMap = {
    blue: "border-blue-400 bg-blue-50 text-blue-600",
    red: "border-red-400 bg-red-50 text-red-600",
    green: "border-green-400 bg-green-50 text-green-600",
  };

  return (
    <div
      className={`border rounded-xl p-3 flex gap-3 items-start ${colorMap[color]}`}
    >
      <div className="text-xs text-gray-500">
        8:00 – 9:00 AM
      </div>
      <div className="text-sm">
        <p className="font-medium">
          Task title goes here. This can go up to 5 words
        </p>
        <div className="flex gap-2 text-xs mt-1">
          <span className="px-2 py-0.5 rounded-full bg-white/70">
            {label}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/70">
            {level}
          </span>
        </div>
      </div>
    </div>
  );
}

function CalendarGrid() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-purple-600">
          June 2025
        </span>
        <span className="text-xs text-gray-400">◀ ▶</span>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-xs">
        {days.map((d) => (
          <div key={d} className="text-gray-400">
            {d}
          </div>
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`h-8 flex items-center justify-center rounded-full ${
              i === 18 ? "bg-purple-600 text-white" : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}











