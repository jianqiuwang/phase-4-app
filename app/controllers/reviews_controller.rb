class ReviewsController < ApplicationController
# GET /reviews
  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find(params[:id])
    render json: review
end


end
