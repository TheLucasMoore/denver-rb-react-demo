class Viewer

  def posts
    Post.order(created_at: :desc)
  end

  def whoami
    'You are a viewer!'
  end

end
