import { type LucideIconName } from '@/components/lucide-icon'

export type NavItem = { title: string; url: string; iconName: LucideIconName }

// This is sample data.
const navMain: NavItem[] = [
  { title: 'Chat', url: '/ai-sdk/chat', iconName: 'MessageCircleMore' },
  { title: 'Groq', url: '/ai-sdk/groq', iconName: 'MessageCircleMore' },
  { title: 'Assistant', url: '/ai-sdk/assistant', iconName: 'Bot' },
]

const navSecondary: NavItem[] = [
  { title: 'Chat', url: '/assistant-ui/chat', iconName: 'MessageCircleMore' },
  { title: 'Groq', url: '/assistant-ui/groq', iconName: 'MessageCircleMore' },
  { title: 'Assistant', url: '/assistant-ui/assistant', iconName: 'Bot' },
]

const dashboard = {
  navMain,
  navSecondary,
}

export default dashboard
