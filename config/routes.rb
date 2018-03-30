Rails.application.routes.draw do
    namespace :api do
    resources :posts do
    resources :cities 
    end 
  end
end 

# ROUTE LISTING
# 2018-03-30 16:28:47 ⌚  |2.4.2| Kalpanas-MacBook-Air in ~/Desktop/driftr
# ± |post-controller U:1 ?:3 ✗| → rails routes
#          Prefix Verb   URI Pattern                              Controller#Action
# api_post_cities GET    /api/posts/:post_id/cities(.:format)     api/cities#index
#                 POST   /api/posts/:post_id/cities(.:format)     api/cities#create
#   api_post_city GET    /api/posts/:post_id/cities/:id(.:format) api/cities#show
#                 PATCH  /api/posts/:post_id/cities/:id(.:format) api/cities#update
#                 PUT    /api/posts/:post_id/cities/:id(.:format) api/cities#update
#                 DELETE /api/posts/:post_id/cities/:id(.:format) api/cities#destroy
#       api_posts GET    /api/posts(.:format)                     api/posts#index
#                 POST   /api/posts(.:format)                     api/posts#create
#        api_post GET    /api/posts/:id(.:format)                 api/posts#show
#                 PATCH  /api/posts/:id(.:format)                 api/posts#update
#                 PUT    /api/posts/:id(.:format)                 api/posts#update
#                 DELETE /api/posts/:id(.:format)                 api/posts#destroy
