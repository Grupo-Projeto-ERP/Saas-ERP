class OrdemDeServicosController < ApplicationController
  # Só listar todas e criar uma nova OS

  # GET /ordem_de_servicos
  def index
    ordens = OrdemServico.order(created_at: :desc)
    render json: ordens.map { |ordem|
    {
      numero_os: ordem.numero_os_formatado,
      nome_cliente: ordem.nome_cliente,
      data_entrada: ordem.data_entrada,
      data_saida: ordem.data_saida,
      status: ordem.status,
      created_at: ordem.created_at,
      updated_at: ordem.update_at
    }
  }

  end

  # POST /ordem_de_servicos
  def create
    ordem = OrdemServico.new(ordem_params)

    if ordem.save
      render json: {
        numero_os: ordem.numero_os_formatado,
        nome_cliente: ordem.nome_cliente,
        data_entrada: ordem.data_entrada,
        data_saida: ordem.data_saida,
        status: ordem.status,
        created_at: ordem.created_at,
        updated_at: ordem.update_at
      }, status: :created

    else
      render json: { errors: ordem.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def ordem_params
    params.require(:ordem_servico).permit(:nome_cliente, :data_entrada, :data_saida, :status)
  end
end
