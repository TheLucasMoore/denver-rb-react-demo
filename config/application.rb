require File.expand_path('../boot', __FILE__)

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DenverRbReactDemo
  class Application < Rails::Application
    config.browserify_rails.commandline_options = '-t babelify --extension=".jsx" --extension=".js"'
    config.browserify_rails.evaluate_node_modules = true
    config.browserify_rails.use_browserifyinc = true
    config.assets.paths << Rails.root.join("node_modules")
    config.active_record.raise_in_transactional_callbacks = true
  end
end
