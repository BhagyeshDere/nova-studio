export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        w-full
        min-h-screen
        mx-auto
        overflow-x-hidden
      "
    >
      {children}
    </div>
  );
}
