AddCommentMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types:
  name "AddComment"

  # Accessible from `input` in the resolve function:
  input_field :postId, !types.ID
  input_field :authorId, !types.ID
  input_field :content, !types.String

  # The result has access to these fields,
  # resolve must return a hash with these keys
  return_field :post, PostType
  return_field :comment, CommentType

  # The resolve proc is where you alter the system state.
  resolve -> (inputs, ctx) {
    post = Post.find(inputs[:postId])
    comment = post.comments.create!(author_id: inputs[:authorId], content: inputs[:content])

    {comment: comment, post: post}
  }
end
