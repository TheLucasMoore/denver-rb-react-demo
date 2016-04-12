namespace :graphql do
  desc 'output the graphql schema'
  task :schema => :environment do
    STDOUT.puts JSON.dump(Schema.execute GraphQL::Introspection::INTROSPECTION_QUERY)
  end
end
