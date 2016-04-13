class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :author_email, null: false
      t.string :title, null: false
      t.text :body, null: false

      t.timestamps null: false
    end
  end
end
