class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :price, :description
  has_many :reviews
end
