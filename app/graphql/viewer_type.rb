ViewerType = GraphQL::ObjectType.define do
  name "Viewer"
  description "This is the viewer. i.e. the root for non-node queries"

  field :whoami, !types.String

  # Posts
  connection :posts, PostType.connection_type

end
