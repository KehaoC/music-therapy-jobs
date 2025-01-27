'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeartPulse, Mic2, Music } from "lucide-react"
import Link from "next/link"
import { useState } from "react"


export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#E0F4F1] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-[#40E0D0]/20 transform -rotate-12">
        <Music size={120} />
      </div>
      <div className="absolute bottom-20 right-10 text-[#40E0D0]/20 transform rotate-12">
        <HeartPulse size={120} />
      </div>
      <div className="absolute top-1/2 right-20 text-[#40E0D0]/10 transform rotate-45">
        <Mic2 size={80} />
      </div>

      {/* Hero Section with Search */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 relative z-10">
        <div className="max-w-2xl w-full mx-auto text-center">
          <div className="mb-2 flex justify-center">
            <Music className="text-[#40E0D0] h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#20B2AA]">
            Everything you want to know about music therapy jobs
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Harmonize your career with the perfect opportunity
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter location or work setting (e.g., 'New York' or 'Hospital')"
                className="h-12 text-lg border-[#40E0D0]/30 focus:border-[#40E0D0] focus:ring-[#40E0D0]"
              />
              <Link href={`/chat?query=${searchQuery}`}>
                <Button 
                  size="lg" 
                  className="h-12 px-8 bg-[#40E0D0] hover:bg-[#20B2AA] transition-colors duration-300"
                >
                  Search
                </Button>
              </Link>
            </div>
            
            <div className="text-sm text-gray-500">
              Popular searches: Hospital, School, Private Practice, Rehabilitation Center
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-[#40E0D0]/20">
              <div className="text-2xl font-bold text-[#40E0D0]">1000+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-[#40E0D0]/20">
              <div className="text-2xl font-bold text-[#40E0D0]">500+</div>
              <div className="text-gray-600">Employers</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-[#40E0D0]/20">
              <div className="text-2xl font-bold text-[#40E0D0]">24/7</div>
              <div className="text-gray-600">Job Updates</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
