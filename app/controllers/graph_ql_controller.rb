class GraphQlController < ActionController::Base

  def query
    render json: execute
  end

  private

  def execute
    Schema.execute(
      params[:query],
      variables: variables
    )
  end

  def variables
    JSON.load(params[:variables])
  end

end
