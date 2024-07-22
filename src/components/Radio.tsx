export function Radio({ children,label, ...props }) {
    return <label className="flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 py-2 px-3">
        <input type="radio" className="appearance-none outline-none size-5 bg-black/30 rounded-full border border-solid border-[#545251] focus:ring-2 focus:ring-[#796bfa] focus:ring-offset-2 focus:ring-offset-[#545251] checked:border-[#796bfa] checked:border-solid checked:border-[6px] checked:bg-white" {...props} />
        <span className="text-white">{label}</span>
    </label>;
}