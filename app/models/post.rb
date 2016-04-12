class Post < ActiveRecord::Base
  has_many :comments
  validates :author_email, email: true
  validates :author_email, :title, :body, presence: true
end
