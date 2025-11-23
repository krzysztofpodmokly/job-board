import { AppSidebar } from '@/components/sidebar/AppSidebar';
import { SidebarNavMenuGroup } from '@/components/sidebar/SidebarNavMenuGroup';
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { SidebarOrganizationButton } from '@/features/organizations/components/SidebarOrganizationButton';
import { ClipboardListIcon, LogInIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function EmployerLayout({ children }: { children: ReactNode }) {
  return (
    <AppSidebar
      content={
        <>
          <SidebarGroup>
            <SidebarGroupLabel>Job Listings</SidebarGroupLabel>
            <SidebarGroupAction title="Add Job Listing" asChild>
              <Link href="/employer/job-listings/new">
                <PlusIcon /> <span className="sr-only">Add Job Listing</span>
              </Link>
            </SidebarGroupAction>
          </SidebarGroup>
          <SidebarNavMenuGroup
            className="mt-auto"
            items={[
              { href: '/', icon: <ClipboardListIcon />, label: 'Job Board' },

              {
                href: '/sign-in',
                icon: <LogInIcon />,
                label: 'Sign In',
                authStatus: 'signedOut',
              },
            ]}
          />
        </>
      }
      footerButton={<SidebarOrganizationButton />}
    >
      {children}
    </AppSidebar>
  );
}
