export default function AuthLayout({ children }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 w-full">
      {children}
    </div>
  );
}
