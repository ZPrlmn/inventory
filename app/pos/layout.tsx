export default function posLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="h-full w-full">
        {children}
      </section>
    )
  }