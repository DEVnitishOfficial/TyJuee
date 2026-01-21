import { ASK_JUNO_GRADIENT } from "@/lib/constants/framework-constants";

export function Header() {
  return (
    <>
      {/* Logo */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center">
          <span className="text-white text-3xl font-bold">{<img src={"new_home_icon.png"} />}</span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="font-semibold text-3xl"
        style={{
          background: ASK_JUNO_GRADIENT,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
        Welcome John, how can I help you today?
      </h1>
    </>
  )
}