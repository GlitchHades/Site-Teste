import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "35+", label: "Membros Ativos" },
  { value: "6", label: "Temporadas" },
  { value: "12", label: "Prêmios" },
  { value: "1", label: "Championship" },
]

export function TeamSection() {
  return (
    <section id="equipe" className="bg-secondary/50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Quem Somos</p>
          <h2 className="text-3xl md:text-4xl font-bold">Nossa Equipe</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Nossa equipe é formada por estudantes do ensino médio e técnico, mentores voluntários e patrocinadores que
              acreditam no poder da educação STEM. Trabalhamos em subequipes de mecânica, eletrônica, programação,
              marketing e business para construir não apenas robôs, mas também futuros líderes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
