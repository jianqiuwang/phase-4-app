class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  before_action :authorized, only: [:edit, :update, :destroy]

  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find(params[:id])
    render json: review
  end

  def create
    user = User.find(params[:user_id])
    review = Review.new(review_params) 
    review.username = user.username # Set the review's username to the user's username
  
    if review.save # Save the review to the database
      render json: review, status: :created, include: [:movie]
    else
      render json: review.errors, status: :unprocessable_entity
    end
  end
    
    def update
      review = Review.find(params[:id])
      if review.user_id == session[:user_id]
        review.update(review_params)
        render json: review, status: :ok
      else
        render json: { errors: "You can only edit your own reviews." }, status: :forbidden
      end
    end

    def destroy
      review = Review.find(params[:id])
      if review.user_id == session[:user_id]
        review.destroy
        render json: { message: 'Review was successfully destroyed.' }, status: :ok
      else
        render json: { errors: "You can only delete your own reviews." }, status: :forbidden
      end
    end

  private
  def review_params
    params.require(:review).permit(:score, :comment, :user_id, :movie_id)
  end

  def render_not_found
      render json: { error: "Review not found" }, status: :not_found
  end

  def authorized
    return render json: {errors: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end
end
