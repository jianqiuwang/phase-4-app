class Review < ApplicationRecord
    belongs_to :movie
    belongs_to :user

    validates :user_name, presence: true
    validates :score, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }
    validates :comment, presence: true, length: { minimum: 5, maximum: 1000 }
    validates :likes, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
