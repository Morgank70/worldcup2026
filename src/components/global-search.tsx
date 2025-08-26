'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Hotel, UtensilsCrossed, PartyPopper, Car, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const cities = [
  "Atlanta", "Boston", "Dallas", "Guadalajara", "Houston", "Kansas City",
  "Los Angeles", "Mexico City", "Miami", "Monterrey", "New York / New Jersey",
  "Philadelphia", "San Francisco", "Seattle", "Toronto", "Vancouver"
]

const categories = [
  { value: "all", label: "All Categories", icon: Search },
  { value: "hotels", label: "Hotels", icon: Hotel },
  { value: "restaurants", label: "Restaurants", icon: UtensilsCrossed },
  { value: "watch-parties", label: "Watch Parties", icon: PartyPopper },
  { value: "activities", label: "Activities", icon: MapPin },
  { value: "transportation", label: "Transportation", icon: Car },
  { value: "merch", label: "Merchandise", icon: ShoppingBag },
]

export function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const router = useRouter()

  const handleSearch = () => {
    if (!searchQuery.trim() && !selectedCity) return
    
    // Build search URL based on selections
    let searchUrl = '/search?'
    const params = new URLSearchParams()
    
    if (searchQuery.trim()) {
      params.append('q', searchQuery.trim())
    }
    
    if (selectedCity) {
      params.append('city', selectedCity)
    }
    
    if (selectedCategory !== 'all') {
      params.append('category', selectedCategory)
    }
    
    router.push(`/search?${params.toString()}`)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search hotels, restaurants, activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pl-10 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* City Selector */}
          <div className="w-full md:w-48">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500">
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Cities</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city.toLowerCase().replace(/\s/g, '-')}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Category Selector */}
          <div className="w-full md:w-48">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center space-x-2">
                        <Icon className="h-4 w-4" />
                        <span>{category.label}</span>
                      </div>
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <Button 
            onClick={handleSearch}
            className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Search
          </Button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-sm text-gray-600 font-medium mr-2">Quick Links:</span>
          {cities.slice(0, 8).map((city) => (
            <Link 
              key={city}
              href={`/city/${city.toLowerCase().replace(/\s|\//g, '-')}`}
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              {city}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}