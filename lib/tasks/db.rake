namespace :db do
  task :rebuild => [:drop, :migrate, :seed]
end
