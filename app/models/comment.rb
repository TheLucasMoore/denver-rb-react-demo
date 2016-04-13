class Comment < ActiveRecord::Base
  belongs_to :post
  validates :post_id, :body, presence: true
end
