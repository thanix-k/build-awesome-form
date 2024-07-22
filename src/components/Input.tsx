export default function Input({id, label,...props }) {
    return <div className="flex flex-col">
        {label && <label className="text-white mb-2 pointer-events-none" for={id}>{label}</label>}
        <input id={id} className="p-2 outline-none bg-black/10 rounded-xl outline outline-1 outline-offset-0 outline-white/10 hover:outline-white/20 focus:outline-custom-purple text-white" {...props} />
  </div>;
}