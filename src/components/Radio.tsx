export function Radio({ label, ...props }) {
    return <label className="flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 py-1 px-2">
        <input type="radio" className="appearance-none outline-none size-5 bg-black/30 rounded-full border border-solid border-custom-grey focus:ring-2 focus:ring-custom-purple focus:ring-offset-2 focus:ring-offset-custom-grey checked:border-custom-purple checked:border-solid checked:border-6 checked:bg-white" {...props} />
        <span className="text-white">{label}</span>
    </label>;
}