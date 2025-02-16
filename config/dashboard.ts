import { Bot, MessageCircleMore } from 'lucide-react'

// This is sample data.
const navMain = [
  { title: 'Chat', url: '/ai-sdk/chat', icon: MessageCircleMore, isActive: false },
  { title: 'Assistant', url: '/ai-sdk/assistant', icon: Bot, isActive: false },
]

const navSecondary = [
  { title: 'Chat', url: '/assistant-ui/chat', icon: MessageCircleMore, isActive: false },
  { title: 'Groq', url: '/assistant-ui/groq', icon: MessageCircleMore, isActive: false },
  { title: 'Assistant', url: '/assistant-ui/assistant', icon: Bot, isActive: false },
]

const dashboard = {
  navMain,
  navSecondary,
}

export default dashboard
