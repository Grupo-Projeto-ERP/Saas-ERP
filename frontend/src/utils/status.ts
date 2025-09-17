export const statusMap: Record<string, string> = {
    aguardando_checklist: "Aguardando Checklist",
    aguardando_orçamento: "Aguardando Orçamento",
    em_andamento: "Em andanemnto",
    concretizado: "Concretizado",
};

export function formatStatus(status: string): string {
    return statusMap[status] || status;
}

