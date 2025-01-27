import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'What qualifications do I need to become a music therapist?',
    message: 'What qualifications do I need to become a music therapist?'
  },
  {
    heading: 'Day-to-day responsibilities of a hospital music therapist',
    message: 'Day-to-day responsibilities of a hospital music therapist'
  },
  {
    heading: 'Career opportunities in music therapy',
    message: 'Career opportunities in music therapy'
  },
  {
    heading: 'Music therapy salary and job outlook',
    message: 'Music therapy salary and job outlook'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
