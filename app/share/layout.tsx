export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col ">
      <div className="flex flex-col bg-white p-10 lg:m-10 m-6 rounded-xl">
        {children}
      </div>
    </div>
  );
}
