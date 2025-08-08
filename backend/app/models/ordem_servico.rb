class OrdemServico < ApplicationRecord

  enum status: {
    aguardando_checklist: 0,
    aguardando_orcamento: 1,
    em_andamento: 2,
    concretizado: 3
  }

  validates :numero_os, uniqueness: true
  validates :nome_cliente, presence: true


  def numero_os_formatado
    return '' if numero_os.nil?
    format('%04d', numero_os)
  end


end
