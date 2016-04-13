QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "This type is reserved for all root level queries."

  # Used by Relay to lookup objects by Relay's UUID
  field :node, field: NodeIdentification.field

  # The relay loopback
  # We use this because Relay needs all root query fields to return
  # single objects.
  field :viewer, ViewerType do
    resolve ->(*){ Viewer.new }
  end

end
