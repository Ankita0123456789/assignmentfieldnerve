const Header = ({title, description}: {title: string, description: string}) => {
  return (
    <header className="sticky top-0 z-20 -mx-4 mb-4 border-b border-zinc-200 bg-white px-4 py-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
        <p className="mt-1 text-sm text-zinc-600">
          {description}
        </p>
    </header>
  )
}

export default Header
