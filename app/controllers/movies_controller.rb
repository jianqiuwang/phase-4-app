class MoviesController < ApplicationController
    def index
        movies = Movie.all
        render json: movies, include: :reviews
      end
    
      def show
        movie = Movie.find(params[:id])
        render json: movie, include: :reviews
      end
end
