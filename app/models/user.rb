class User < ApplicationRecord
    # When using has_secure_passwordLinks to an external site., Rails will use the bcrypt gem to hash and salt all passwords on the User model.
    # The has_secure_passwordLinks to an external site. method also provides two new instance methods on your User model: password and password_confirmation. These methods don't correspond to database columns! Instead, to make these methods work, users table must have a password_digest column
    has_secure_password
    validates :password, presence: true
    validates :username, presence: true, uniqueness: true
    has_many :reviews
    has_many :movies, through: :reviews
end
