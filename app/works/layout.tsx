export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        w-full
        max-w-[100vw]
        min-h-screen
        mx-auto
        overflow-x-hidden
        relative
      "
    >
      {children}
    </div>
  );
}
