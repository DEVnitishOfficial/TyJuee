import { ASK_JUNO_GRADIENT } from "@/lib/constants/framework-constants";
import { AlertTriangle, MoreVertical } from "lucide-react";


type Props = {
  onClose?: () => void;
};

export function RecentSearchAndUpdates(
  { isRecentSearchOpen, setIsRecentSearchOpen, isRecentUpdatesOpen, setIsRecentUpdatesOpen }
   : 
   {
    isRecentSearchOpen:boolean; 
    isRecentUpdatesOpen:boolean; 
    setIsRecentSearchOpen:React.Dispatch<React.SetStateAction<boolean>>; 
    setIsRecentUpdatesOpen:React.Dispatch<React.SetStateAction<boolean>>; 
  }) {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-16 items-start">

      {/* Chat / Recently Searched */}
      <div className="relative w-full sm:w-auto flex justify-center">
        {isRecentSearchOpen ? (
          <RecentlySearchedPanel 
          onClose={() => setIsRecentSearchOpen(false)}
          />
        ) : (
          <IconSquare
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            onClick={() => setIsRecentSearchOpen(true)}
            icon={<img src="/chat.svg" className="w-7 h-7 sm:w-8 sm:h-8" alt="chat" />}
          />
        )}
      </div>

      {/* Radio / Recent Updates */}
      <div className="relative w-full sm:w-auto flex justify-center">
        {isRecentUpdatesOpen ? (
          <RecentUpdatesPanel onClose={() => setIsRecentUpdatesOpen(false)} />
        ) : (
          <IconSquare
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            onClick={() => setIsRecentUpdatesOpen(true)}
            icon={<img src="/radio.svg" className="w-7 h-7 sm:w-8 sm:h-8" alt="radio" />}
          />
        )}
      </div>

    </div>
  )
}

export function RecentlySearchedPanel({ onClose }: Props) {
  return (
    <div className="w-72 rounded-2xl border-2 border-purple-400 bg-white shadow-xl">
      {/* Header */}
      <div className={"flex items-center justify-between px-4 py-3 rounded-t-2xl"}>
        <h3
          className="font-semibold"
          style={{
            background: ASK_JUNO_GRADIENT,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Recently Searched
        </h3>
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-purple-600"
        >
          ✕ Close
        </button>
      </div>

      {/* List */}
      <ul className="divide-y overflow-y-auto h-[310px] custom-scrollbar">
        {Array.from({ length: 20 }).map((_, i) => (
          <li
            key={i}
            className="flex items-center justify-between px-4 py-3 text-sm hover:bg-purple-50"
          >
            <span>Name of Chat</span>
            <MoreVertical size={16} className="text-purple-500" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconSquare({ icon,
  onClick,
  className = ""
}: {
  icon: React.ReactNode
  onClick: () => void;
  className: string
}) {
  return (
    <button onClick={onClick} className={`w-14 h-14 rounded-2xl border-2 border-purple-400 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition ${className}`}>
      {icon}
    </button>
  );
}

export function RecentUpdatesPanel({ onClose }: Props) {
  return (
    <div className="w-72 rounded-2xl border-2 border-purple-400 bg-white shadow-xl">
      {/* Header */}
      <div className={`flex items-center justify-between px-4 py-3 rounded-t-2xl `}>
        <h3 className="font-semibold"
          style={{
            background: ASK_JUNO_GRADIENT,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Recent Updates</h3>
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-purple-600"
        >
          ✕ Close
        </button>
      </div>

      {/* Updates */}
      <div className="space-y-3 px-4 py-4">
        <UpdateItem
          icon={<img src="emergency_heat.svg" className="text-red-500 h-8 w-8 -mt-3" />}
          bg="bg-red-50"
        />
        <UpdateItem
          icon={<AlertTriangle size={23} className="text-yellow-500 -mt-1" />}
          bg="bg-yellow-50"
        />
        <UpdateItem
          icon={<img src="brightness_alert.svg" className="text-green-500 h-8 w-8 -mt-3" />}
          bg="bg-green-50"
        />
      </div>
    </div>
  );
}

function UpdateItem({
  icon,
  bg,
}: {
  icon: React.ReactNode;
  bg: string;
}) {
  return (
    <div className={`flex gap-3 items-start p-3 rounded-xl ${bg}`}>
      <div className="mt-1">{icon}</div>
      <div className="text-sm">
        <p className="font-medium">
          Alert & Notification name Alert &
        </p>
        <p className="text-purple-600 underline cursor-pointer">
          Search with Juno
        </p>
      </div>
    </div>
  );
}