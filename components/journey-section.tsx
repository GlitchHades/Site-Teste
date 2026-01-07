import { Card, CardContent } from "@/components/ui/card"

const timeline = [
  {
    year: "2018",
    title: "Fundação da Equipe",
    description:
      "Nossa jornada começou com 10 estudantes e um sonho de competir no maior campeonato de robótica do mundo.",
  },
  {
    year: "2019",
    title: "Primeira Competição Regional",
    description: "Participamos do nosso primeiro regional e conquistamos o prêmio de Rookie All-Star Award.",
  },
  {
    year: "2020",
    title: "Expansão & Inovação",
    description: "Mesmo com os desafios do ano, mantivemos nossa equipe ativa com projetos de impacto social.",
  },
  {
    year: "2022",
    title: "Retorno Triunfante",
    description: "Voltamos às competições presenciais e alcançamos as quartas de final no regional.",
  },
  {
    year: "2023",
    title: "Campeões Regionais",
    description: "Conquistamos nosso primeiro título regional e garantimos vaga no World Championship.",
  },
  {
    year: "2024",
    title: "Houston, TX",
    description: "Representamos o Brasil no FIRST Championship em Houston, competindo com equipes do mundo todo.",
  },
]

export function JourneySection() {
  return (
    <section id="jornada" className="bg-secondary/50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Nossa Trajetória</p>
          <h2 className="text-3xl md:text-4xl font-bold">Jornada</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-foreground -translate-x-1/2 mt-6" />
                  <Card className="ml-12 md:ml-0 md:w-1/2">
                    <CardContent className="p-6">
                      <span className="text-sm font-mono text-muted-foreground">{item.year}</span>
                      <h3 className="text-lg font-bold mt-1 mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
