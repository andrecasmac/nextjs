export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Header</div>
      <div>Sidebar</div>
      <div>{children}</div>
    </div>
  );
}
