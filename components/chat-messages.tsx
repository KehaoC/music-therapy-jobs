import { Message } from 'ai'
import { useEffect, useState } from 'react'
import { RenderMessage } from './render-message'
import { Spinner } from './ui/spinner'

// 定义组件的属性接口
interface ChatMessagesProps {
  messages: Message[]          // 聊天消息数组
  onQuerySelect: (query: string) => void  // 查询选择回调函数
  isLoading: boolean          // 加载状态
  chatId?: string            // 可选的聊天ID
}

export function ChatMessages({
  messages,
  onQuerySelect,
  isLoading,
  chatId
}: ChatMessagesProps) {
  // 管理消息展开状态的状态对象
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({})

  // 当新消息是用户消息时，重置所有展开状态
  useEffect(() => {
    const lastMessage = messages[messages.length - 1]
    if (lastMessage?.role === 'user') {
      setOpenStates({})
    }
  }, [messages])

  // 如果没有消息，不渲染任何内容
  if (!messages.length) return null

  // 计算最后一条用户消息的索引
  const lastUserIndex =
    messages.length -
    1 -
    [...messages].reverse().findIndex(msg => msg.role === 'user')

  // 判断是否显示加载动画
  const showSpinner = isLoading && messages[messages.length - 1].role === 'user'

  // 获取消息的展开状态
  const getIsOpen = (id: string) => {
    // 处理相关消息的ID
    const baseId = id.endsWith('-related') ? id.slice(0, -8) : id
    const index = messages.findIndex(msg => msg.id === baseId)
    // 如果状态未设置，则根据消息位置决定是否展开
    return openStates[id] ?? index >= lastUserIndex
  }

  // 处理消息展开状态的变化
  const handleOpenChange = (id: string, open: boolean) => {
    setOpenStates(prev => ({
      ...prev,
      [id]: open
    }))
  }

  return (
    // 消息列表容器
    <div className="relative mx-auto px-4 w-full">
      {/* 遍历渲染所有消息 */}
      {messages.map(message => (
        <div key={message.id} className="mb-4 flex flex-col gap-4">
          <RenderMessage
            message={message}
            messageId={message.id}
            getIsOpen={getIsOpen}
            onOpenChange={handleOpenChange}
            onQuerySelect={onQuerySelect}
            chatId={chatId}
          />
        </div>
      ))}
      {/* 显示加载动画 */}
      {showSpinner && <Spinner />}
    </div>
  )
}
