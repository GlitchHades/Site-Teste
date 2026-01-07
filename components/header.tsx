import Link from "next/link"
import { Bot } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <span className="font-mono font-bold text-lg">TEAM #0000</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#jornada" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Jornada
          </Link>
          <Link href="#trofeus" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Troféus
          </Link>
          <Link href="#equipe" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Equipe
          </Link>
        </nav>
      </div>
    </header>
  )
}
