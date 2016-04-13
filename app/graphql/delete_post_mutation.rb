DeletePostMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types:
  name "DeletePost"

  # Accessible from `input` in the resolve function:
  input_field :id, !types.ID

  # The result has access to these fields,
  # resolve must return a hash with these keys
  return_field :viewer, ViewerType
  return_field :deleted_post_id, !types.ID

  # The resolve proc is where you alter the system state.
  resolve -> (inputs, ctx) {
    _, id = NodeIdentification.from_global_id(inputs[:id])
    post = Post.find(id)
    post.destroy!
    { deleted_post_id: post.id, viewer: Viewer.new }
  }
end
