class ServiceOrder < ApplicationRecord
  enum status: {
    aguardando_checklist: "aguardando_checklist",
    aguardando_orcamento: "aguardando_orcamento",
    em_andamento: "em_andamento",
    concretizado: "concretizado"
  }

  validates :client_name, :entry_date, :status, presence: true
  validates :os_number, uniqueness: true

  before_validation :generate_os_number, on: :create

  private

  def generate_os_number
    last_number = ServiceOrder.maximum(:os_number) || 0
    self.os_number = last_number + 1
  end
end
