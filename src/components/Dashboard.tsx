import { Pencil, Trash2, Plus, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Activity } from "@/routes/index";
export function Dashboard({
  activities,
  onNew,
  onEdit,
  onDelete,
}: {
  activities: Activity[];
  onNew: () => void;
  onEdit: (a: Activity) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="md:pl-60">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Minhas Atividades</h1>
          <p className="text-sm text-muted-foreground mt-1">Gerencie as turmas e horários da sua academia.</p>
        </div>
        <Button onClick={onNew} className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="h-4 w-4 mr-1" /> Nova Atividade
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        {activities.map((a) => (
          <article
            key={a.id}
            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-16 w-16 md:h-20 md:w-20 shrink-0 rounded-lg bg-gradient-to-br from-primary/15 to-accent/30 grid place-items-center text-primary font-bold">
              {a.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">{a.name}</h3>
              <p className="text-xs text-muted-foreground truncate flex items-center gap-1 mt-0.5">
                <MapPin className="h-3 w-3" /> {a.gym} — {a.address}
              </p>
              <span className="inline-flex items-center gap-1 mt-2 rounded-full bg-accent text-accent-foreground px-2.5 py-0.5 text-xs font-semibold">
                <Clock className="h-3 w-3" /> {a.days} • {a.time}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-1.5 shrink-0">
              <button
                onClick={() => onEdit(a)}
                aria-label="Editar"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button
                onClick={() => onDelete(a.id)}
                aria-label="Excluir"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
      <Button
        onClick={onNew}
        className="sm:hidden fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
        aria-label="Nova atividade"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
}
