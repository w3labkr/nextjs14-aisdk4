import * as React from 'react'

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { AssistantProvider } from '@/context/assistant-ui/assistant-provider'
import { AssistantSidebar } from '@/components/custom-ui/assistant-sidebar'

export default function AssistantPage() {
  return (
    <AssistantProvider api="/api/assistant-ui/assistant">
      <AssistantSidebar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Assistant UI</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Assistant</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </AssistantSidebar>
    </AssistantProvider>
  )
}
