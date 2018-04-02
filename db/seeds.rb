# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
City.destroy_all


# Test cities
atlanta = City.create(name: "Atlanta", image:"https://grouptour.com/wp-content/uploads/2016/06/SkyView.jpg",
    description: "Atlanta is the capital and most populous city of the state of Georgia in the United States. With an estimated 2016 population of 472,522, it is the cultural and economic center of the Atlanta metropolitan area, home to 5.8 million people and the ninth-largest metropolitan area in the United States.")

san_francisco = City.create(name: "San Francisco", image:"https://cdn.vox-cdn.com/thumbor/RVhobHgNC4xy7NSqXvVs13OdJIk=/0x0:4000x4000/1200x800/filters:focal(1680x1680:2320x2320)/cdn.vox-cdn.com/uploads/chorus_image/image/55649931/IM_Photo5.0.jpg",
    description: "San Francisco has several nicknames, including 'The City by the Bay', 'Golden Gate City', 'Frisco', 'SF', 'San Fran', and 'Fog City', as well as older ones like 'The City that Knows How', 'Baghdad by the Bay', 'The Paris of the West', or, as locals call it, 'The City'. As of 2017, San Francisco is ranked high on world liveability rankings.")

london = City.create(name: "London", image:"https://www.england.nhs.uk/london/wp-content/uploads/sites/8/2013/09/london-eye-1400x520.jpg",
    description: "London is the capital and largest city of England and the United Kingdom. The River Thames travels through the city.")

# Test posts 
Post.create(city_id: atlanta.id, title: "Great Burgers!", text:"Check out the Vortex for great burgers and beer.  Yoou have to be 21 to get in, so that may be a problem for families, but it's always a good place to eat.")
Post.create(city_id: atlanta.id, title: "Traffic is terrible", text:"I've never feared for my life like I do on Atlanta roads....")

Post.create(city_id: london.id, title: "Wonderful People!", text: "Everyone is so friendly to visiters!")
Post.create(city_id: london.id, title: "Amazing Pubs!", text: "Amazing pubs in London!")

Post.create(city_id: san_francisco.id, title: "Great Smog!", text: "The smog is killing me.")
Post.create(city_id: san_francisco.id, title: "Incredible Greenery", text: "The scenery and culture around here, are, like, awesome, man...")

