CommentType = GraphQL::ObjectType.define do
  name "Comment"
  description "This is a Comment"

  field :id, !types.ID
  field :author_email, !types.String
  field :body, !types.String

end
