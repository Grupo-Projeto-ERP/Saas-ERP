require "test_helper"

class OrdemDeServicoTest < ActiveSupport::TestCase
  test "gera numero_os automaticamente e sequencialmente" do
    ordem1 = OrdemServico.create!(nome_cliente: "Cliente 1")
    ordem2 = OrdemServico.create!(nome_cliente: "Cliente 2")

    assert ordem1.numero_os.present?, "numero_os da primeira ordem deve estar presente"
    assert ordem2.numero_os.present?, "numero_os da segunda ordem deve estar presente"

     assert_equal ordem1.numero_os + 1, ordem2.numero_os, "numero_os da segunda ordem deve ser +1 da primeira"
  end

  test "numero_os_formatado formata com zeros à esquerda" do
    ordem = OrdemServico.create!(nome_cliente: "Cliente Teste")
    expected = ordem.numero_os.to_s.rjust(4, "0")
    assert_equal expected, ordem.numero_os_formatado
  end
end
