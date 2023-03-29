# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding data..."
# Create some movies
movie1 = Movie.create(title: "The Shawshank Redemption", image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81yPE07T9wL._AC_UF1000,1000_QL80_.jpg", price: 10, description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.")
movie2 = Movie.create(title: "The Godfather", image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", price: 12, description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.")
movie3 = Movie.create(title: "The Dark Knight", image: "https://soundvapors.com/wp-content/uploads/2020/06/tdk-1024x1024.jpg", price: 15, description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.")

# Create some users
user1 = User.create(user_name: "john_doe")
user2 = User.create(user_name: "jane_smith")

# Create some reviews
review1 = Review.create(user_name: "john_doe", score: 9, comment: "This movie was amazing!", likes: 3, movie: movie1, user: user1)
review2 = Review.create(user_name: "jane_smith", score: 8, comment: "Great movie, but a bit long.", likes: 2, movie: movie2, user: user2)
review3 = Review.create(user_name: "john_doe", score: 10, comment: "The best superhero movie ever!", likes: 5, movie: movie3, user: user1)
puts "🌱 Done seeding!"