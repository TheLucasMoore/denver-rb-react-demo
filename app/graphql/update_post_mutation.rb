UpdatePostMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types:
  name "UpdatePost"

  # Accessible from `input` in the resolve function:
  input_field :id, !types.ID
  input_field :author_email, types.String
  input_field :title, types.String
  input_field :body, types.String

  # The result has access to these fields,
  # resolve must return a hash with these keys
  return_field :updated_post, PostType

  # The resolve proc is where you alter the system state.
  resolve -> (inputs, ctx) {
    post = Post.find!(inputs[:id])
    post.update! inputs.to_h.except('clientMutationId')
    { updated_post: post }
  }
end
