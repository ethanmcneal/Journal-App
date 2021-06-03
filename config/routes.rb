Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :prompts
    resources :logs

    get '/api_test', to: 'static#api_test'
    get '/api_test_2', to: 'static#api_test_2'
  end
end
