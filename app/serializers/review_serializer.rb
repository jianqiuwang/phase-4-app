class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :score, :comment, :likes, :user_id
  belongs_to :user
  belongs_to :movie
end
