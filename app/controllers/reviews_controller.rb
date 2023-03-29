class ReviewsController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find(params[:id])
    render json: review
  end

  def create
    review = Review.create(review_params)
    if review.errors.empty?
        render json: review, status: :created, include: [:movie]
    else
        render json: review.errors, status: :unprocessable_entity
    end
  end



  private
  def review_params
    params.require(:review).permit(:user_name, :score, :comment, :likes, :movie_id, :user_id)
  end

  def render_not_found
      render json: { error: "Camper not found" }, status: :not_found
  end
end
