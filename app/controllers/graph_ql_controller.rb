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
    case params[:variables]
    when String
      JSON.load(params[:variables])
    when Hash
      params[:variables]
    else
      {}
    end
  rescue JSON::ParserError
    {}
  end

end
