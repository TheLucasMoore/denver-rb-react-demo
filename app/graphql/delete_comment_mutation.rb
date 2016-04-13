DeleteCommentMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types:
  name "DeleteComment"

  # Accessible from `input` in the resolve function:
  input_field :post_id, !types.ID
  input_field :id, !types.ID

  # The result has access to these fields,
  # resolve must return a hash with these keys
  return_field :post, PostType
  return_field :deleted_comment_id, !types.ID

  # The resolve proc is where you alter the system state.
  resolve -> (inputs, ctx) {
    post = Post.find!(inputs[:post_id])
    comment = post.comments.find!(inputs[:id])
    comment.destroy!
    { deleted_comment_id: comment.id, post: post }
  }
end
