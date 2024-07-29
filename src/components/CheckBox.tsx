type CheckBoxProps = {
    label: string;
} & React.ComponentPropsWithoutRef<"input">;

export function CheckBox({ label, ...props }:CheckBoxProps) {
    return <label className="flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 py-1 px-2">
        <input type="checkbox" className="appearance-none cursor-pointer outline-none size-5 bg-black/30 rounded border border-solid border-custom-grey focus:ring-2 focus:ring-custom-purple focus:ring-offset-2 focus:ring-offset-custom-grey checked:border-none checked:bg-custom-purple checked:bg-tick-mark" {...props} />
        <span className="text-white">{label}</span>
    </label>;
}