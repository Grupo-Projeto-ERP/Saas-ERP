# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2025_07_28_200656) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "service_orders", force: :cascade do |t|
    t.integer "os_number", null: false
    t.string "client_name", null: false
    t.date "entry_date", null: false
    t.date "exit_date"
    t.string "status", default: "aguardando_checklist", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["os_number"], name: "index_service_orders_on_os_number", unique: true
  end

end
