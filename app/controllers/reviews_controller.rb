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
    user = User.find(params[:user_id]) # Find the user based on the user_id in the params
    review = Review.new(review_params) # Initialize a new review with the permitted parameters
    review.username = user.username # Set the review's username to the user's username
  
    if review.save # Save the review to the database
      render json: review, status: :created, include: [:movie]
    else
      render json: review.errors, status: :unprocessable_entity
    end
  end
  
    
    def update
        review = Review.find(params[:id])
        if review.update(review_params)
          render json: review, status: :ok, include: [:movie]
        else
          render json: review.errors, status: :unprocessable_entity
        end
    end

    def destroy
        review = Review.find(params[:id])
        if review.destroy
          render json: { message: 'Review successfully deleted' }, status: :ok
        else
          render json: { error: 'Error deleting review' }, status: :unprocessable_entity
        end
      end

  private
  def review_params
    params.require(:review).permit(:score, :comment, :user_id, :movie_id)
  end

  def render_not_found
      render json: { error: "Review not found" }, status: :not_found
  end
end
