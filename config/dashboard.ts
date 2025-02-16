import { type LucideIconName } from '@/components/lucide-icon'

export type NavItem = { title: string; url: string; iconName: LucideIconName; isActive: boolean }

// This is sample data.
const navMain: NavItem[] = [
  { title: 'Chat', url: '/ai-sdk/chat', iconName: 'MessageCircleMore', isActive: false },
  { title: 'Assistant', url: '/ai-sdk/assistant', iconName: 'Bot', isActive: false },
]

const navSecondary: NavItem[] = [
  { title: 'Chat', url: '/assistant-ui/chat', iconName: 'MessageCircleMore', isActive: false },
  { title: 'Groq', url: '/assistant-ui/groq', iconName: 'MessageCircleMore', isActive: false },
  { title: 'Assistant', url: '/assistant-ui/assistant', iconName: 'Bot', isActive: false },
]

const dashboard = {
  navMain,
  navSecondary,
}

export default dashboard
