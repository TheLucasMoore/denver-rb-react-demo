class GraphQlController < ActionController::Base

  def query
    render json: execute
  end

  private

  def execute
    Schema.execute(
      params[:query],
      variables: params[:variables]
    )
  end
end
