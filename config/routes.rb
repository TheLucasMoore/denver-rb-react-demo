Rails.application.routes.draw do
  root to: 'application#root'
  post 'graphql' => 'graph_ql#query'
  get '*path' => 'application#root'
end
