PostType = GraphQL::ObjectType.define do
  name "User"
  interfaces [NodeIdentification.interface]
  # `id` exposes the UUID
  global_id_field :id

  connection :friends, CommentType.connection_type
end
