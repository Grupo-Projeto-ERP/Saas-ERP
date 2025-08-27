require "test_helper"

class OrdemDeServicosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ordem_de_servico = ordem_de_servicos(:one)
  end

  test "should get index" do
    get ordem_de_servicos_url, as: :json
    assert_response :success
  end

  test "should create ordem_de_servico" do
    assert_difference("OrdemDeServico.count") do
      post ordem_de_servicos_url, params: { ordem_de_servico: { data_entrada: @ordem_de_servico.data_entrada, data_saida: @ordem_de_servico.data_saida, nome_cliente: @ordem_de_servico.nome_cliente, status: @ordem_de_servico.status } }, as: :json
    end

    assert_response :created
  end

  test "should show ordem_de_servico" do
    get ordem_de_servico_url(@ordem_de_servico), as: :json
    assert_response :success
  end

  test "should update ordem_de_servico" do
    patch ordem_de_servico_url(@ordem_de_servico), params: { ordem_de_servico: { data_entrada: @ordem_de_servico.data_entrada, data_saida: @ordem_de_servico.data_saida, nome_cliente: @ordem_de_servico.nome_cliente, status: @ordem_de_servico.status } }, as: :json
    assert_response :success
  end

  test "should destroy ordem_de_servico" do
    assert_difference("OrdemDeServico.count", -1) do
      delete ordem_de_servico_url(@ordem_de_servico), as: :json
    end

    assert_response :no_content
  end
end
