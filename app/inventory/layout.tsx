export default function InventoryLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="h-full w-screen">
        {children}
        <nav></nav>
      </section>
    )
  }