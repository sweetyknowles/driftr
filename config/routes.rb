Rails.application.routes.draw do
  namespace :api do
    get '/cities', to: 'cities#index'
    
  end

  namespace :api do
    get '/cities/:id', to: 'cities#show'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
