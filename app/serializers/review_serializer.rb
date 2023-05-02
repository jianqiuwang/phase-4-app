class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :score, :comment, :likes, :user_id, :username
  belongs_to :user
  belongs_to :movie

  
# This method is used to get the username of the user associated with the review.
# 'object' refers to the instance of the Review that is currently being serialized.
# 'object.user' returns the User instance associated with the review due to the 'belongs_to :user' association.
# 'object.user.username' therefore gets the username of the associated user.
  def username
    object.user.username
  end
end
