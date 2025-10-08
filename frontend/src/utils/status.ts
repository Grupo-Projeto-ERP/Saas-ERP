export const statusMap: Record<string, string> = {
    aguardando_checklist: "Aguardando Checklist",
    aguardando_orcamento: "Aguardando Orçamento",
    em_andamento: "Em andamento",
    concretizado: "Concretizado",
};

export function formatStatus(status: string): string {
    return statusMap[status] || status;
}

