'use client'

import * as React from 'react'
import Link from 'next/link'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/custom-ui/sidebar'
import { LucideIcon } from '@/components/lucide-icon'

import { type NavItem } from '@/config/dashboard'

export function NavSecondary({ items }: { items: NavItem[] }) {
  return (
    <SidebarGroup className="p-0">
      <SidebarGroupLabel>Assistant UI</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={item.isActive}>
                <Link href={item.url}>
                  <LucideIcon name={item.iconName} />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
