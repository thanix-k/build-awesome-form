type FieldSetProps = {
    legend: string;
    children: React.ReactNode;
}

export default function FieldSet({ legend, children }: FieldSetProps) {
    return <fieldset className="flex flex-wrap gap-1">
        <legend className="text-white mb-2">{legend}</legend>
        {children}
    </fieldset>;
}