class MoviesController < ApplicationController
  before_action :authorized, only: [:create]
      def index
        movies = Movie.all
        render json: movies, include: :reviews
      end
    
      def show
        movie = Movie.find(params[:id])
        render json: movie, include: :reviews
      end

      def create
        movie = Movie.new(movie_params)
        if movie.save
          render json: movie, status: :created, include: :reviews
        else
          render json: movie.errors, status: :unprocessable_entity
        end
      end

    private

    def movie_params
      params.require(:movie).permit(:title, :image, :price, :description)
    end

    def authorized
      return render json: { errors: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
