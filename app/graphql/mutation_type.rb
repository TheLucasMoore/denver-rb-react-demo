MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createPost, field: CreatePostMutation.field
  field :updatePost, field: UpdatePostMutation.field
  field :deletePost, field: DeletePostMutation.field
  field :createComment, field: CreateCommentMutation.field
  field :updateComment, field: UpdateCommentMutation.field
  field :deleteComment, field: DeleteCommentMutation.field
end
