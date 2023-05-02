class RemoveUsernameFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :username, :string
  end
end
