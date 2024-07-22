export function CheckBox({ label, ...props }) {
    return <label className="flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 py-2 px-3">
        <input type="checkbox" className="appearance-none outline-none size-5 bg-black/30 rounded border border-solid border-[#545251] focus:ring-2 focus:ring-[#796bfa] focus:ring-offset-2 focus:ring-offset-[#545251] checked:border-none checked:bg-[#796bfa] checked:bg-tick-mark" {...props} />
        <span className="text-white">{label}</span>
    </label>;
}