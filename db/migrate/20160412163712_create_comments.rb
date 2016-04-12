class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :author_email
      t.text :body
      t.belongs_to :post, index: true, foreign_key: { on_delete: :cascade }

      t.timestamps null: false
    end
  end
end
