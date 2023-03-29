class ReviewsController < ApplicationController
# GET /reviews
  def index
    reviews = Review.all
    render json: reviews
  end
end
