import { Bot } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <span className="font-mono font-bold">TEAM #0000</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">© 2026 FRC Team. Todos os direitos reservados.</p>
          <p className="text-xs text-muted-foreground">Gracious Professionalism™ • Coopertition®</p>
        </div>
      </div>
    </footer>
  )
}
