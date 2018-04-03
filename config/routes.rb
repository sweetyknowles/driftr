Rails.application.routes.draw do

  root "cities#index"
  
  namespace :api do 
    resources :cities do
      resources :posts
    end 
  end 

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
