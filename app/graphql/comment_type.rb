CommentType = GraphQL::ObjectType.define do
  name "Comment"
  description "This is a Comment"

  global_id_field :id
  field :body, !types.String

end
