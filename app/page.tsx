'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Hotel, UtensilsCrossed, PartyPopper, Car, ShoppingBag, Bot } from "lucide-react"
import Link from "next/link"

const cities = [
  { name: "Atlanta", country: "USA", stadium: "Mercedes-Benz Stadium" },
  { name: "Boston", country: "USA", stadium: "Gillette Stadium" },
  { name: "Dallas", country: "USA", stadium: "AT&T Stadium" },
  { name: "Guadalajara", country: "Mexico", stadium: "Estadio Akron" },
  { name: "Houston", country: "USA", stadium: "NRG Stadium" },
  { name: "Kansas City", country: "USA", stadium: "Arrowhead Stadium" },
  { name: "Los Angeles", country: "USA", stadium: "SoFi Stadium" },
  { name: "Mexico City", country: "Mexico", stadium: "Estadio Azteca" },
  { name: "Miami", country: "USA", stadium: "Hard Rock Stadium" },
  { name: "Monterrey", country: "Mexico", stadium: "Estadio BBVA" },
  { name: "New York / New Jersey", country: "USA", stadium: "MetLife Stadium" },
  { name: "Philadelphia", country: "USA", stadium: "Lincoln Financial Field" },
  { name: "San Francisco", country: "USA", stadium: "Levi's Stadium" },
  { name: "Seattle", country: "USA", stadium: "Lumen Field" },
  { name: "Toronto", country: "Canada", stadium: "BMO Field" },
  { name: "Vancouver", country: "Canada", stadium: "BC Place" },
]

const features = [
  { icon: Hotel, title: "Hotels", description: "Find the best accommodations" },
  { icon: UtensilsCrossed, title: "Restaurants", description: "Local dining experiences" },
  { icon: PartyPopper, title: "Watch Parties", description: "Join fellow fans" },
  { icon: MapPin, title: "Activities", description: "City attractions & tours" },
  { icon: Car, title: "Transportation", description: "Getting around made easy" },
  { icon: ShoppingBag, title: "Merch", description: "Official World Cup gear" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">⚽ WorldCup Hub</h1>
              <p className="text-lg text-gray-600 mt-2">Your Complete World Cup 2026 Guide</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Bot className="h-4 w-4" />
                <span>AI Assistant</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to World Cup 2026! 🏆
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The ultimate digital platform for World Cup fans. Explore all 16 host cities, 
            find the best hotels, restaurants, watch parties, and everything you need for the perfect World Cup experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <feature.icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cities Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore All 16 Host Cities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Card key={city.name} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {city.name}
                  </CardTitle>
                  <CardDescription>{city.country}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{city.stadium}</span>
                  </div>
                  <div className="space-y-2">
                    <Link href={`/city/${city.name.toLowerCase().replace(/\s/g, '-')}`}>
                      <Button className="w-full" size="sm">
                        Explore {city.name}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Assistant CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <Bot className="h-16 w-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-4">Need Help Planning Your Trip?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our AI assistant can help you find the perfect hotels, restaurants, activities, 
            and everything else you need for World Cup 2026!
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Chat with AI Assistant
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">WorldCup Hub</h3>
            <p className="text-gray-400 mb-4">
              Your complete guide to World Cup 2026 across all 16 host cities
            </p>
            <p className="text-sm text-gray-500">
              Built with ❤️ for World Cup fans everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}