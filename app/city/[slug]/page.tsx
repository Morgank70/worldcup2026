'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlobalSearch } from "@/components/global-search"
import { MapPin, Hotel, UtensilsCrossed, PartyPopper, Car, ShoppingBag, ArrowLeft, Trophy, Star, Users, Calendar, Bot } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

const cityData: Record<string, any> = {
  "atlanta": {
    name: "Atlanta",
    country: "USA",
    stadium: "Mercedes-Benz Stadium",
    description: "The heart of the South, Atlanta combines rich history with modern innovation.",
    hotels: [
      { name: "The St. Regis Atlanta", price: "$450/night", rating: 4.8 },
      { name: "Atlanta Marriott Marquis", price: "$280/night", rating: 4.5 },
      { name: "Hotel Indigo Atlanta Downtown", price: "$220/night", rating: 4.6 }
    ],
    restaurants: [
      { name: "Bacchanalia", cuisine: "Contemporary American", rating: 4.9 },
      { name: "The Optimist", cuisine: "Seafood", rating: 4.7 },
      { name: "Staplehouse", cuisine: "Southern", rating: 4.8 }
    ],
    activities: [
      { name: "Georgia Aquarium", type: "Attraction" },
      { name: "Martin Luther King Jr. National Historical Park", type: "Historical" },
      { name: "Atlanta BeltLine", type: "Outdoor" }
    ]
  },
  "new-york---new-jersey": {
    name: "New York / New Jersey",
    country: "USA", 
    stadium: "MetLife Stadium",
    description: "The city that never sleeps offers endless entertainment and World Cup excitement.",
    hotels: [
      { name: "The Plaza", price: "$800/night", rating: 4.7 },
      { name: "1 Hotels Brooklyn Bridge", price: "$400/night", rating: 4.6 },
      { name: "Pod Hotels", price: "$150/night", rating: 4.3 }
    ],
    restaurants: [
      { name: "Le Bernardin", cuisine: "French Seafood", rating: 4.9 },
      { name: "Peter Luger", cuisine: "Steakhouse", rating: 4.6 },
      { name: "Xi'an Famous Foods", cuisine: "Chinese", rating: 4.4 }
    ],
    activities: [
      { name: "Central Park", type: "Outdoor" },
      { name: "9/11 Memorial", type: "Historical" },
      { name: "Broadway Shows", type: "Entertainment" }
    ]
  }
}

export default function CityPage() {
  const params = useParams()
  const slug = params?.slug as string
  
  // Get city data or use default
  const city = cityData[slug] || {
    name: slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    country: "TBD",
    stadium: "Stadium TBD",
    description: "Detailed information coming soon!",
    hotels: [],
    restaurants: [],
    activities: []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Cities</span>
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{city.name}</h1>
                <p className="text-lg text-gray-600">{city.country} • {city.stadium}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Bot className="h-4 w-4" />
              <span>AI Assistant</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* City Overview */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <CardContent className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6" />
                <span className="text-lg font-semibold">{city.stadium}</span>
              </div>
              <p className="text-lg opacity-90">{city.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Hotels Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <Hotel className="h-6 w-6 text-blue-600" />
            <span>Hotels</span>
          </h2>
          {city.hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.hotels.map((hotel: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{hotel.name}</CardTitle>
                    <CardDescription>⭐ {hotel.rating}/5.0</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-green-600 mb-4">{hotel.price}</p>
                    <Button className="w-full">Book Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600">Hotel listings coming soon! Check back for the best accommodations in {city.name}.</p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Restaurants Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <UtensilsCrossed className="h-6 w-6 text-blue-600" />
            <span>Restaurants</span>
          </h2>
          {city.restaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.restaurants.map((restaurant: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                    <CardDescription>{restaurant.cuisine}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">⭐ {restaurant.rating}/5.0</span>
                      <Button size="sm">View Menu</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600">Restaurant listings coming soon! Discover the best dining experiences in {city.name}.</p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Activities Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <PartyPopper className="h-6 w-6 text-blue-600" />
            <span>Activities & Attractions</span>
          </h2>
          {city.activities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.activities.map((activity: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{activity.name}</CardTitle>
                    <CardDescription>{activity.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600">Activity listings coming soon! Explore the best {city.name} has to offer.</p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Car className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold">Transportation</h3>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <ShoppingBag className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold">World Cup Merch</h3>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <PartyPopper className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold">Watch Parties</h3>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Bot className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold">AI Assistant</h3>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}