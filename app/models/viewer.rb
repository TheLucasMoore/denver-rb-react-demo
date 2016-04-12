class Viewer

  def posts
    Post.all
  end

  def whoami
    'You are a viewer!'
  end

end
