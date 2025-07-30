Rails.application.routes.draw do
  resources :service_orders do
    collection do
      get 'next_number'
    end
  end
end
