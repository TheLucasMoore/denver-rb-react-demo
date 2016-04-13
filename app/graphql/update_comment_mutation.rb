UpdateCommentMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types:
  name "UpdateComment"

  # Accessible from `input` in the resolve function:
  input_field :id, !types.ID
  input_field :body, types.String

  # The result has access to these fields,
  # resolve must return a hash with these keys
  return_field :updated_comment, CommentType

  # The resolve proc is where you alter the system state.
  resolve -> (inputs, ctx) {
    comment = Comment.find!(inputs[:id])
    comment.update! inputs.to_h.except('clientMutationId')
    { updated_comment: comment }
  }
end
