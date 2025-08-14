class OrdemServico < ApplicationRecord

  enum status: {
    aguardando_checklist: "aguardando_checklist",
    aguardando_orcamento: "aguardando_orcamento",
    em_andamento: "em_andamento",
    concretizado: "concretizado"
  }

  validates :numero_os, uniqueness: true
  validates :nome_cliente, presence: true


  def numero_os_formatado
    return '' if numero_os.nil?
    format('%04d', numero_os)
  end


end
