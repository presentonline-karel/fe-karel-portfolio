export default function Wrapper({ className, children }: { className?: string, children: JSX.Element | JSX.Element[] }) {
  return (
    <div className={`px-4 sm:px-12 lg:px-20 xl:max-w-8xl xl:mx-auto hd:py-[120px] hd:border-x-[0.4px] hd:border-neutrals-300 ${className}`}>
      {children}
    </div>
  )
}