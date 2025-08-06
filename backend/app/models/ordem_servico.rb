class OrdemServico < ApplicationRecord

  enum status: {
    aguardando_checklist: 0,
    aguardando_orcamento: 1,
    em_andamento: 2,
    concretizado: 3
  }

  validates :nome_cliente, :status, :data_entrada, presence: true
  validates :numero_os, uniqueness: true

  # Não precisa mais setar numero_os manualmente, banco que gera

  def numero_os_formatado
    format('%4d', numero_os)
  end

end
