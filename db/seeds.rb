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
movie4 = Movie.create(title: "Pulp Fiction", image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", price: 11, description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.")
movie5 = Movie.create(title: "Forrest Gump", image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", price: 9, description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.")
movie6 = Movie.create(title: "The Matrix", image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", price: 14, description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.")
# Create some users
user1 = User.create(username: "john_doe", password: "password123")
user2 = User.create(username: "jane_smith", password: "password456")
user3 = User.create(username: "mike_jones", password: "password789")
user4 = User.create(username: "sarah_walker", password: "password000")
# Create some reviews
review1 = Review.create(score: 9, comment: "This movie was amazing!", likes: 3, movie: movie1, user: user1)
review2 = Review.create(score: 8, comment: "Great movie, but a bit long.", likes: 2, movie: movie2, user: user2)
review3 = Review.create(score: 10, comment: "The best superhero movie ever!", likes: 5, movie: movie3, user: user1)
review4 = Review.create(score: 10, comment: "Absolutely mind-blowing!", likes: 4, movie: movie4, user: user3)
review5 = Review.create(score: 9, comment: "Heartwarming and inspiring!", likes: 3, movie: movie5, user: user4)
review6 = Review.create(score: 8, comment: "A groundbreaking sci-fi masterpiece.", likes: 2, movie: movie6, user: user3)
review7 = Review.create(score: 7, comment: "Entertaining, but not as good as the first two Godfather movies.", likes: 1, movie: movie2, user: user1)

puts "🌱 Done seeding!"