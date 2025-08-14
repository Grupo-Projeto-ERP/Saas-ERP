class CreateOrdemServicos < ActiveRecord::Migration[7.1]
  def up
    execute <<-SQL
      CREATE SEQUENCE numero_os_seq START 1;
    SQL

    create_table :ordem_servicos do |t|
      t.string :nome_cliente
      t.date :data_entrada
      t.date :data_saida
      t.string :status
      t.integer :numero_os, null: false, default: -> { "nextval('numero_os_seq')" }

      t.timestamps
    end

    add_index :ordem_servicos, :numero_os, unique: true
  end

  def down
    drop_table :ordem_servicos
    execute <<-SQL
      DROP SEQUENCE IF EXISTS numero_os_seq;
    SQL
  end
end
