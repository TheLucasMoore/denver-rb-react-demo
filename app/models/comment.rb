class Comment < ActiveRecord::Base
  belongs_to :post

  validates :author_email, email: true
  validates :author_email, :body, presence: true
end
