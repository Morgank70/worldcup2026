'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlobalSearch } from "@/components/global-search"
import { MapPin, Hotel, UtensilsCrossed, PartyPopper, Car, ShoppingBag, Trophy, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface SearchResult {
  name: string
  city: string
  rating: number
  image: string
  type?: string
  price?: string
  cuisine?: string
  icon?: any
}

const searchResults = {
  hotels: [
    { name: "The St. Regis Atlanta", city: "Atlanta", price: "$450/night", rating: 4.8, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop" },
    { name: "The Plaza New York", city: "New York", price: "$800/night", rating: 4.7, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop" },
    { name: "Four Seasons Los Angeles", city: "Los Angeles", price: "$650/night", rating: 4.9, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop" },
  ],
  restaurants: [
    { name: "Bacchanalia", city: "Atlanta", cuisine: "Contemporary American", rating: 4.9, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop" },
    { name: "Le Bernardin", city: "New York", cuisine: "French Seafood", rating: 4.9, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop" },
    { name: "Providence", city: "Los Angeles", cuisine: "Seafood", rating: 4.8, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop" },
  ],
  activities: [
    { name: "Georgia Aquarium", city: "Atlanta", type: "Attraction", rating: 4.7, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop" },
    { name: "Statue of Liberty", city: "New York", type: "Historical", rating: 4.8, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop" },
    { name: "Hollywood Walk of Fame", city: "Los Angeles", type: "Entertainment", rating: 4.5, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop" },
  ]
}

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const city = searchParams.get('city') || ''
  const category = searchParams.get('category') || 'all'

  const getResults = (): SearchResult[] => {
    if (category === 'all') {
      return [
        ...searchResults.hotels.map(item => ({ ...item, type: 'hotel', icon: Hotel } as SearchResult)),
        ...searchResults.restaurants.map(item => ({ ...item, type: 'restaurant', icon: UtensilsCrossed } as SearchResult)),
        ...searchResults.activities.map(item => ({ ...item, type: 'activity', icon: MapPin } as SearchResult))
      ]
    } else if (category === 'hotels') {
      return searchResults.hotels.map(item => ({ ...item, type: 'hotel', icon: Hotel } as SearchResult))
    } else if (category === 'restaurants') {
      return searchResults.restaurants.map(item => ({ ...item, type: 'restaurant', icon: UtensilsCrossed } as SearchResult))
    } else if (category === 'activities') {
      return searchResults.activities.map(item => ({ ...item, type: 'activity', icon: MapPin } as SearchResult))
    }
    return []
  }

  const results = getResults()
  const filteredResults = city 
    ? results.filter(result => result.city.toLowerCase().replace(/\s|\//g, '-') === city)
    : results

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
                <Link href="/">
                  <h1 className="text-3xl font-bold hover:text-blue-400 transition-colors">WorldCup Hub</h1>
                </Link>
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button & Results Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" className="mb-4 flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Homepage</span>
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Search Results
              </h1>
              <p className="text-gray-600">
                {query && `Results for "${query}"`}
                {city && ` in ${city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`}
                {category !== 'all' && ` - ${category.charAt(0).toUpperCase() + category.slice(1)}`}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-sm text-gray-500">
                {filteredResults.length} results found
              </span>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((result, index) => {
              const Icon = result.icon
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative h-48">
                    <Image
                      src={result.image}
                      alt={result.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                        <Icon className="h-3 w-3" />
                        <span className="capitalize">{result.type}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                        {result.city}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {result.name}
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between">
                      <span>
                        {result.cuisine || result.type || 'General'}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{result.rating}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      {result.price && (
                        <span className="text-2xl font-bold text-green-600">
                          {result.price}
                        </span>
                      )}
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{result.city}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        {result.type === 'hotel' ? 'Book' : 'Visit'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No results found</h2>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or browse all cities
            </p>
            <Link href="/">
              <Button>Browse All Cities</Button>
            </Link>
          </div>
        )}

        {/* Popular Searches */}
        {filteredResults.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Searches</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Hotel className="h-5 w-5 text-blue-600" />
                  <span>Hotels</span>
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/search?category=hotels&city=atlanta" className="text-blue-600 hover:underline">Hotels in Atlanta</Link></li>
                  <li><Link href="/search?category=hotels&city=new-york-new-jersey" className="text-blue-600 hover:underline">Hotels in New York</Link></li>
                  <li><Link href="/search?category=hotels&city=los-angeles" className="text-blue-600 hover:underline">Hotels in Los Angeles</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <UtensilsCrossed className="h-5 w-5 text-green-600" />
                  <span>Restaurants</span>
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/search?category=restaurants&city=atlanta" className="text-blue-600 hover:underline">Atlanta Restaurants</Link></li>
                  <li><Link href="/search?category=restaurants&city=new-york-new-jersey" className="text-blue-600 hover:underline">NYC Dining</Link></li>
                  <li><Link href="/search?category=restaurants&city=mexico-city" className="text-blue-600 hover:underline">Mexico City Food</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Activities</span>
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/search?category=activities&city=seattle" className="text-blue-600 hover:underline">Seattle Attractions</Link></li>
                  <li><Link href="/search?category=activities&city=toronto" className="text-blue-600 hover:underline">Toronto Tours</Link></li>
                  <li><Link href="/search?category=activities&city=miami" className="text-blue-600 hover:underline">Miami Activities</Link></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <Trophy className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">WorldCup Hub</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your official guide to FIFA World Cup 2026 across USA, Canada, and Mexico.
            </p>
            <p className="text-xs text-gray-500">
              © 2024 WorldCup Hub. Built for World Cup 2026 fans worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <p className="text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  )
}