'use client'
import { Chat } from '@/components/chat'
import { generateId } from 'ai'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// Create a separate component for the chat content
function ChatContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''
  console.log("query: ", query)

  const id = generateId()
  return <Chat id={id} query={query} />
}

// Main page component with Suspense boundary
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatContent />
    </Suspense>
  )
}
