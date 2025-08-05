class OrdemDeServicosController < ApplicationController
  before_action :set_ordem_de_servico, only: %i[ show update destroy ]

  # GET /ordem_de_servicos
  def index
    @ordem_de_servicos = OrdemDeServico.all

    render json: @ordem_de_servicos
  end

  # GET /ordem_de_servicos/1
  def show
    render json: @ordem_de_servico
  end

  # POST /ordem_de_servicos
  def create
    @ordem_de_servico = OrdemDeServico.new(ordem_de_servico_params)

    if @ordem_de_servico.save
      render json: @ordem_de_servico, status: :created, location: @ordem_de_servico
    else
      render json: @ordem_de_servico.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ordem_de_servicos/1
  def update
    if @ordem_de_servico.update(ordem_de_servico_params)
      render json: @ordem_de_servico
    else
      render json: @ordem_de_servico.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ordem_de_servicos/1
  def destroy
    @ordem_de_servico.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ordem_de_servico
      @ordem_de_servico = OrdemDeServico.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ordem_de_servico_params
      params.require(:ordem_de_servico).permit(:nome_cliente, :data_entrada, :data_saida, :status)
    end
end
