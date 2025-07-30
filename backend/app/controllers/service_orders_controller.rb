class ServiceOrdersController < ApplicationController
  before_action :set_service_order, only: %i[ show update destroy ]

  # GET /service_orders
def index
  @orders = ServiceOrder.order(os_number: :desc)

  render json: @orders.map { |order|
    {
      os_number: format('%04d', order.os_number),
      client_name: order.client_name,
      entry_date: order.entry_date,
      exit_date: order.exit_date,
      status: order.status,
      created_at: order.created_at,
      updated_at: order.updated_at
    }
  }
end

  # GET /service_orders/1
  def show
    render json: @service_order
  end

  # POST /service_orders
  def create
    @service_order = ServiceOrder.new(service_order_params)

    if @service_order.save
      render json: @service_order, status: :created, location: @service_order
    else
      render json: @service_order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /service_orders/1
  def update
    if @service_order.update(service_order_params)
      render json: @service_order
    else
      render json: @service_order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /service_orders/1
  def destroy
    @service_order.destroy!
  end

  # GET /service_orders/next_number
def next_number
  last_number = ServiceOrder.maximum(:os_number).to_i
  next_number = format('%04d', last_number + 1)
  render json: { next_os_number: next_number }
end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service_order
      @service_order = ServiceOrder.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
  def service_order_params
  permitted = [:entry_date, :exit_date, :status]
  permitted << :client_name if action_name == "create"
  params.require(:service_order).permit(permitted)
end

end
