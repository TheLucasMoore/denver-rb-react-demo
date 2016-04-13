100.times do
  post = Post.create(
    author_email: Faker::Internet.email,
    title: Faker::Hipster.sentence,
    body: Faker::Hipster.paragraphs(rand 2..10).map { |p| "<p>#{p}</p>" }.join("\n")
  )

  20.times do
    post.comments.create(
      body: Faker::Hipster.sentence
    )
  end
end
