import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">FIRST Robotics Competition</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
          Construindo o Futuro com Robótica
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-pretty">
          Somos uma equipe apaixonada por inovação, engenharia e trabalho em equipe. Desde 2018, competimos no FIRST
          Robotics Competition, inspirando a próxima geração de engenheiros e cientistas.
        </p>
        <Button variant="outline" size="lg" asChild>
          <a href="#jornada" className="gap-2">
            Conheça Nossa História
            <ArrowDown className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}
