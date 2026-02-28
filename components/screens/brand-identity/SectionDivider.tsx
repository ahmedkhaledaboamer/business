
export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2 overflow-hidden">
      <div className="w-24 h-[1px] bg-gradient-to-l from-[#C9A84C]/60 to-transparent" />
      <div className="mx-3 w-1.5 h-1.5 rotate-45 bg-[#C9A84C]/60" />
      <div className="w-24 h-[1px] bg-gradient-to-r from-[#C9A84C]/60 to-transparent" />
    </div>);
}