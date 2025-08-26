'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlobalSearch } from "@/components/global-search"
import { MapPin, Hotel, UtensilsCrossed, PartyPopper, Car, ShoppingBag, Trophy, Calendar, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const cities = [
  { 
    name: "Atlanta", 
    country: "USA", 
    stadium: "Mercedes-Benz Stadium",
    capacity: "71,000",
    image: "https://images.unsplash.com/photo-1554072675-66db59dba46f?w=500&h=300&fit=crop",
    landmarks: ["Georgia Aquarium", "World of Coca-Cola", "Atlanta BeltLine"]
  },
  { 
    name: "Boston", 
    country: "USA", 
    stadium: "Gillette Stadium",
    capacity: "65,878",
    image: "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=500&h=300&fit=crop",
    landmarks: ["Freedom Trail", "Fenway Park", "USS Constitution"]
  },
  { 
    name: "Dallas", 
    country: "USA", 
    stadium: "AT&T Stadium",
    capacity: "80,000",
    image: "https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?w=500&h=300&fit=crop",
    landmarks: ["Reunion Tower", "Dallas Arboretum", "Deep Ellum"]
  },
  { 
    name: "Guadalajara", 
    country: "Mexico", 
    stadium: "Estadio Akron",
    capacity: "49,850",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=500&h=300&fit=crop",
    landmarks: ["Historic Center", "Hospicio Cabañas", "Tlaquepaque"]
  },
  { 
    name: "Houston", 
    country: "USA", 
    stadium: "NRG Stadium",
    capacity: "72,220",
    image: "https://images.unsplash.com/photo-1577689467668-6d5c7d2df806?w=500&h=300&fit=crop",
    landmarks: ["Space Center Houston", "Museum District", "Buffalo Bayou Park"]
  },
  { 
    name: "Kansas City", 
    country: "USA", 
    stadium: "Arrowhead Stadium",
    capacity: "76,416",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    landmarks: ["Union Station", "Country Club Plaza", "National WWI Museum"]
  },
  { 
    name: "Los Angeles", 
    country: "USA", 
    stadium: "SoFi Stadium",
    capacity: "70,240",
    image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=500&h=300&fit=crop",
    landmarks: ["Hollywood Sign", "Santa Monica Pier", "Griffith Observatory"]
  },
  { 
    name: "Mexico City", 
    country: "Mexico", 
    stadium: "Estadio Azteca",
    capacity: "87,523",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=500&h=300&fit=crop",
    landmarks: ["Zócalo", "Templo Mayor", "Chapultepec Castle"]
  },
  { 
    name: "Miami", 
    country: "USA", 
    stadium: "Hard Rock Stadium",
    capacity: "64,767",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    landmarks: ["South Beach", "Art Deco District", "Wynwood Walls"]
  },
  { 
    name: "Monterrey", 
    country: "Mexico", 
    stadium: "Estadio BBVA",
    capacity: "53,500",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=500&h=300&fit=crop",
    landmarks: ["Cerro de la Silla", "Macroplaza", "Santa Lucia Riverwalk"]
  },
  { 
    name: "New York / New Jersey", 
    country: "USA", 
    stadium: "MetLife Stadium",
    capacity: "82,500",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=300&fit=crop",
    landmarks: ["Statue of Liberty", "Times Square", "Central Park"]
  },
  { 
    name: "Philadelphia", 
    country: "USA", 
    stadium: "Lincoln Financial Field",
    capacity: "69,176",
    image: "https://images.unsplash.com/photo-1470506028280-a011fb34b6f7?w=500&h=300&fit=crop",
    landmarks: ["Liberty Bell", "Independence Hall", "Philadelphia Museum of Art"]
  },
  { 
    name: "San Francisco", 
    country: "USA", 
    stadium: "Levi's Stadium",
    capacity: "68,500",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    landmarks: ["Golden Gate Bridge", "Alcatraz Island", "Fisherman's Wharf"]
  },
  { 
    name: "Seattle", 
    country: "USA", 
    stadium: "Lumen Field",
    capacity: "69,000",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    landmarks: ["Space Needle", "Pike Place Market", "Chihuly Garden"]
  },
  { 
    name: "Toronto", 
    country: "Canada", 
    stadium: "BMO Field",
    capacity: "45,500",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=500&h=300&fit=crop",
    landmarks: ["CN Tower", "Royal Ontario Museum", "Casa Loma"]
  },
  { 
    name: "Vancouver", 
    country: "Canada", 
    stadium: "BC Place",
    capacity: "54,500",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=500&h=300&fit=crop",
    landmarks: ["Stanley Park", "Capilano Bridge", "Granville Island"]
  },
]

const stats = [
  { icon: Trophy, label: "Host Cities", value: "16" },
  { icon: Users, label: "Stadium Capacity", value: "1M+" },
  { icon: Calendar, label: "Match Days", value: "32" },
  { icon: Star, label: "Countries", value: "3" },
]

const features = [
  { icon: Hotel, title: "Premium Hotels", description: "Luxury accommodations near stadiums", color: "bg-blue-600" },
  { icon: UtensilsCrossed, title: "Local Cuisine", description: "Authentic dining experiences", color: "bg-green-600" },
  { icon: PartyPopper, title: "Fan Zones", description: "Official watch parties & events", color: "bg-blue-600" },
  { icon: MapPin, title: "City Guides", description: "Must-see attractions & tours", color: "bg-green-600" },
  { icon: Car, title: "Transportation", description: "Stadium shuttles & city transit", color: "bg-blue-600" },
  { icon: ShoppingBag, title: "Official Merchandise", description: "Authentic World Cup gear", color: "bg-green-600" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">WorldCup Hub</h1>
                <p className="text-gray-300 text-sm">Official FIFA World Cup 2026 Guide</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <Link href="/cities" className="text-white hover:text-blue-400 font-medium">Cities</Link>
                <Link href="/tickets" className="text-white hover:text-blue-400 font-medium">Tickets</Link>
                <Link href="/travel" className="text-white hover:text-blue-400 font-medium">Travel</Link>
                <Link href="/news" className="text-white hover:text-blue-400 font-medium">News</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Global Search */}
      <GlobalSearch />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            FIFA WORLD CUP
            <span className="block text-4xl md:text-6xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              2026
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            The ultimate destination for World Cup 2026. Discover all 16 host cities across USA, Canada, and Mexico. 
            Find premium hotels, authentic restaurants, and unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Explore Host Cities
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold">
              Plan Your Trip
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for World Cup 2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional directory services curated for the ultimate World Cup experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              16 Host Cities Await You
            </h2>
            <p className="text-xl text-gray-600">
              From iconic landmarks to world-class stadiums
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link 
                key={city.name}
                href={`/city/${city.name.toLowerCase().replace(/\s|\//g, '-')}`}
                className="group block"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="relative h-48">
                    <Image
                      src={city.image}
                      alt={`${city.name} skyline`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                        {city.country}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                      {city.name}
                    </CardTitle>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {city.stadium}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-sm text-gray-500 mb-2">
                      Capacity: {city.capacity}
                    </div>
                    <div className="text-xs text-gray-600">
                      {city.landmarks.slice(0, 2).join(" • ")}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black via-blue-900 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience World Cup 2026?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of fans in the greatest sporting event on Earth. 
            Start planning your perfect World Cup journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold">
              Start Planning Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold">
              Browse All Cities
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <Trophy className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">WorldCup Hub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your official guide to FIFA World Cup 2026 across USA, Canada, and Mexico.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Cities</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/city/new-york-new-jersey" className="hover:text-white">New York</Link></li>
                <li><Link href="/city/los-angeles" className="hover:text-white">Los Angeles</Link></li>
                <li><Link href="/city/mexico-city" className="hover:text-white">Mexico City</Link></li>
                <li><Link href="/city/toronto" className="hover:text-white">Toronto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/hotels" className="hover:text-white">Hotels</Link></li>
                <li><Link href="/restaurants" className="hover:text-white">Restaurants</Link></li>
                <li><Link href="/transportation" className="hover:text-white">Transportation</Link></li>
                <li><Link href="/tickets" className="hover:text-white">Match Tickets</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 WorldCup Hub. Built for World Cup 2026 fans worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}