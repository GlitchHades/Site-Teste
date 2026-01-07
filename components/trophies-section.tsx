import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Star, Medal } from "lucide-react"

const trophies = [
  {
    icon: Trophy,
    title: "Regional Winner",
    event: "São Paulo Regional 2023",
    description: "1º lugar na competição regional, garantindo vaga no Championship.",
  },
  {
    icon: Award,
    title: "Engineering Inspiration",
    event: "São Paulo Regional 2022",
    description: "Reconhecimento pelo impacto na comunidade e inspiração de futuros engenheiros.",
  },
  {
    icon: Star,
    title: "Rookie All-Star Award",
    event: "São Paulo Regional 2019",
    description: "Melhor equipe novata da competição em sua primeira temporada.",
  },
  {
    icon: Medal,
    title: "Quality Award",
    event: "Off-Season 2023",
    description: "Prêmio pela qualidade de engenharia e robustez do robô.",
  },
  {
    icon: Award,
    title: "Safety Award",
    event: "São Paulo Regional 2023",
    description: "Reconhecimento pelas práticas exemplares de segurança.",
  },
  {
    icon: Trophy,
    title: "Dean's List Finalist",
    event: "Championship 2024",
    description: "Estudante finalista no programa de liderança da FIRST.",
  },
]

export function TrophiesSection() {
  return (
    <section id="trofeus" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Conquistas</p>
          <h2 className="text-3xl md:text-4xl font-bold">Troféus & Prêmios</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trophies.map((trophy, index) => (
            <Card key={index} className="group hover:border-foreground/20 transition-colors">
              <CardContent className="p-6">
                <trophy.icon className="h-8 w-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <h3 className="font-bold mb-1">{trophy.title}</h3>
                <p className="text-xs font-mono text-muted-foreground mb-3">{trophy.event}</p>
                <p className="text-sm text-muted-foreground">{trophy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
