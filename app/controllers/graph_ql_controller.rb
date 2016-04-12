class GraphQlController < ActionController::Base
  before_action :log_query

  def query
    render json: execute
  end

  private

  def log_query
    puts GraphQLFormatter.new(params[:query]).to_s
  end

  def execute
    Schema.execute(
      params[:query],
      debug: true,
      variables:
             params[:variables]
    )
  end
end
