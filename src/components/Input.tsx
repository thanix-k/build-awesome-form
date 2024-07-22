export default function Input({ label,...props }) {
    return <label className="flex flex-col">
        {label && <span className="text-white mb-2">{label}</span>}
        <input className="p-2 outline-none bg-black/10 rounded-xl outline outline-1 outline-offset-0 outline-white/10 hover:outline-white/20 focus:outline-[#796bfa] text-white" {...props} />
  </label>;
}