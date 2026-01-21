import { ASK_JUNO_GRADIENT } from "@/lib/constants/framework-constants";
import {ArrowUp, Send} from 'lucide-react'

export function ChatBox() {
  return (
    <div className="relative rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-purple-100 p-4">
      <textarea
        placeholder="Start Chatting"
        className="w-full resize-none bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 min-h-[100px]"
      />

      {/* Suggestions */}
      <div className="flex flex-wrap gap-2 mt-3">
        <SuggestionChip label="FERC Research" />
        <SuggestionChip label="NIST AI RMF Requirements" />
        <SuggestionChip label="FERC Research" />
      </div>

      {/* Send Buttons */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button className="w-9 h-9 rounded-full border border-purple-300 flex items-center justify-center text-purple-600 hover:bg-purple-100">
          <ArrowUp size={16} />
        </button>
        <button className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700">
          <Send size={16} />
        </button>
      </div>
    </div>
  )
}

function SuggestionChip({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 rounded-full border border-purple-300 text-xs text-purple-600 bg-white font-semibold
    "
      style={{
        background: ASK_JUNO_GRADIENT,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
      {label}
    </span>
  );
}