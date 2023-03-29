class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :user_name
      t.integer :score
      t.string :comment
      t.text :description
      t.integer :movie_id
      t.integer :user_id
      t.timestamps
    end
  end
end
