export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      w-full 
      min-h-screen 
      overflow-x-hidden
      flex 
      flex-col
    ">
      {children}
    </div>
  );
}
