PostType = GraphQL::ObjectType.define do
  name "Post"
  description "This is a Post"

  global_id_field :id
  field :author_email, !types.String
  field :title, !types.String
  field :body, !types.String

  # Posts
  connection :comments, CommentType.connection_type

end
