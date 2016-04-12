Rails.application.routes.draw do
  root to: 'application#root'
  post 'graphql' => 'graph_ql#query'
  mount GraphiQL::Rails::Engine, at: "/graphql", graphql_path: '/graphql'
  get '*path' => 'application#root'
end
