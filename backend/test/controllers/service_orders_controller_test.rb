require "test_helper"

class ServiceOrdersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @service_order = service_orders(:one)
  end

  test "should get index" do
    get service_orders_url, as: :json
    assert_response :success
  end

  test "should create service_order" do
    assert_difference("ServiceOrder.count") do
      post service_orders_url, params: { service_order: { client_name: @service_order.client_name, entry_date: @service_order.entry_date, exit_date: @service_order.exit_date, os_number: @service_order.os_number, status: @service_order.status } }, as: :json
    end

    assert_response :created
  end

  test "should show service_order" do
    get service_order_url(@service_order), as: :json
    assert_response :success
  end

  test "should update service_order" do
    patch service_order_url(@service_order), params: { service_order: { client_name: @service_order.client_name, entry_date: @service_order.entry_date, exit_date: @service_order.exit_date, os_number: @service_order.os_number, status: @service_order.status } }, as: :json
    assert_response :success
  end

  test "should destroy service_order" do
    assert_difference("ServiceOrder.count", -1) do
      delete service_order_url(@service_order), as: :json
    end

    assert_response :no_content
  end
end
