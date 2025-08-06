Rails.application.routes.draw do
  resources :ordem_de_servicos, only: [:index, :create]
end
