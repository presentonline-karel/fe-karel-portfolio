// Utils
import useReadingProgress from "@/utils/useReadingProgress";

export default function ProgressBar() {
  const completion = useReadingProgress();

  return (
    <div className="relative">
      <div
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-prim-500 h-[3px] w-full bottom-0"
      />
    </div>
  )
}