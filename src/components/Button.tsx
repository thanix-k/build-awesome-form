export default function Button({ children, ...props }: React.ComponentPropsWithoutRef<"button">) {
  return <button className="p-2 font-semibold outline-none bg-white rounded-xl hover:bg-white/90 focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-4 focus-visible:outline-white/50" {...props}>{children}</button>;
}
