class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :score, :comment, :likes
  belongs_to :user
  belongs_to :movie
end
