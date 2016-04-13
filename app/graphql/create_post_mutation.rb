CreatePostMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types:
  name "CreatePost"

  # Accessible from `input` in the resolve function:
  input_field :author_email, !types.String
  input_field :title, !types.String
  input_field :body, !types.String

  # The result has access to these fields,
  # resolve must return a hash with these keys
  return_field :viewer, ViewerType
  return_field :created_post_edge, PostType.edge_type

  # The resolve proc is where you alter the system state.
  resolve -> (inputs, ctx) {
    post = Post.create! inputs.to_h.except('clientMutationId')
    connection_class = GraphQL::Relay::BaseConnection.connection_for_items([post])
    created_post_edge = connection_class.new([post], {}).edges[0]
    { created_post_edge: created_post_edge, viewer: Viewer.new }
  }
end
