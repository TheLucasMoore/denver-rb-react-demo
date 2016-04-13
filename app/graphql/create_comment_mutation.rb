CreateCommentMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types:
  name "CreateComment"

  # Accessible from `input` in the resolve function:
  input_field :post_id, !types.ID
  input_field :body, !types.String

  # The result has access to these fields,
  # resolve must return a hash with these keys
  return_field :post, PostType
  return_field :created_comment_edge, CommentType.edge_type

  # The resolve proc is where you alter the system state.
  resolve -> (inputs, ctx) {
    post = post.find(inputs['post_id'])
    comment = post.comments.create! inputs.to_h.except('clientMutationId')
    connection_class = GraphQL::Relay::BaseConnection.connection_for_items([comment])
    created_comment_edge = connection_class.new([comment], {}).edges[0]
    { created_comment_edge: created_comment_edge, post: post }
  }
end
