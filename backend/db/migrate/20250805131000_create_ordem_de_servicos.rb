class CreateOrdemDeServicos < ActiveRecord::Migration[7.1]
  def change
    create_table :ordem_de_servicos do |t|
      t.string :nome_cliente
      t.date :data_entrada
      t.date :data_saida
      t.string :status

      t.timestamps
    end
  end
end
