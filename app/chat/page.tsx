'use client'
import { Chat } from '@/components/chat'
import { generateId } from 'ai'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  // 从 url 中获得参数
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''
  console.log("query: ", query)

  const id = generateId()
  return <Chat id={id} query={query} />
  // 先不返回带query 的，因为要测试，不能浪费 api
  // return <Chat id={id}/>
}
