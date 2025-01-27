"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

// Toaster组件的属性类型，继承自 Sonner 组件的所有属性
type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  // 获取当前主题设置，默认为 "system"
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      // 设置主题
      theme={theme as ToasterProps["theme"]}
      // 添加基础类名
      className="toaster group"
      // 配置 toast 的样式选项
      toastOptions={{
        classNames: {
          // toast 容器的样式
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          // toast 描述文本的样式
          description: "group-[.toast]:text-muted-foreground",
          // 操作按钮的样式
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          // 取消按钮的样式
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
