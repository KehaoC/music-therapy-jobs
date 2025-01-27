"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface SearchResult {
  id: string
  title: string
  location: string
  company: string
  type: string
  description: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("query") || "")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault()
    
    if (!searchQuery.trim()) return

    setLoading(true)
    const params = new URLSearchParams({
      query: searchQuery,
      max_results: "20",
      search_depth: "basic"
    })
    
    router.push(`/search?${params.toString()}`)
    
    try {
      // TODO: Replace with actual API call
      const mockResults: SearchResult[] = [
        {
          id: "1",
          title: "Music Therapist",
          location: "New York, NY",
          company: "Memorial Hospital",
          type: "Full-time",
          description: "Join our team as a Music Therapist working with patients in rehabilitation..."
        },
        {
          id: "2",
          title: "Senior Music Therapist",
          location: "Boston, MA",
          company: "Children's Medical Center",
          type: "Full-time",
          description: "Looking for an experienced Music Therapist to work with pediatric patients..."
        }
      ]
      setResults(mockResults)
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (searchParams.get("query")) {
      handleSearch()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F4F1]/30 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="flex items-center gap-4 mb-8">
          <Music className="text-[#40E0D0] h-8 w-8" />
          <h1 className="text-2xl font-bold text-gray-800">Music Therapy Jobs</h1>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jobs..."
            className="h-12 text-lg border-[#40E0D0]/30 focus:border-[#40E0D0] focus:ring-[#40E0D0]"
          />
          <Button
            type="submit"
            size="lg"
            className="h-12 px-8 bg-[#40E0D0] hover:bg-[#20B2AA] transition-colors duration-300"
          >
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </form>

        {/* Results */}
        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#40E0D0] mx-auto"></div>
            </div>
          ) : results.length > 0 ? (
            results.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-[#40E0D0]/20 hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>{job.company}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <Button
                  variant="outline"
                  className="text-[#40E0D0] border-[#40E0D0] hover:bg-[#40E0D0]/10"
                >
                  View Details
                </Button>
              </div>
            ))
          ) : searchParams.get("query") ? (
            <div className="text-center py-8 text-gray-600">
              No results found for "{searchParams.get("query")}"
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
