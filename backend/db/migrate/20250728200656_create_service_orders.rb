class CreateServiceOrders < ActiveRecord::Migration[7.1]
  def change
    create_table :service_orders do |t|
      t.integer :os_number, null: false
      t.string :client_name, null: false
      t.date :entry_date, null: false
      t.date :exit_date
      t.string :status, null: false, default: "aguardando_checklist"

      t.timestamps
    end

    add_index :service_orders, :os_number, unique: true
  end
end
