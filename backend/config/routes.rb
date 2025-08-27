Rails.application.routes.draw do
  get "/docs", to: redirect("/openapi.yml")
  resources :ordem_de_servicos, only: [:index, :create]
end
