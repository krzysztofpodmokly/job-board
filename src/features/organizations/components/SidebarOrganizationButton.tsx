import { SidebarMenuButton } from '@/components/ui/sidebar';
import { SignOutButton } from '@/services/clerk/components/AuthButtons';
import {
  getCurrentOrganization,
  getCurrentUser,
} from '@/services/clerk/lib/getCurrentAuth';
import { LogOutIcon } from 'lucide-react';
import { Suspense } from 'react';
import { SidebarOrganizationButtonClient } from './_SidebarOrganizationButtonClient';

export function SidebarOrganizationButton() {
  return (
    <Suspense>
      <SidebarOrganizationSuspense />
    </Suspense>
  );
}

async function SidebarOrganizationSuspense() {
  const [test, { organization }] = await Promise.all([
    getCurrentUser({ allData: true }),
    getCurrentOrganization({ allData: true }),
  ]);

  if (test.user == null || organization == null) {
    return (
      <SignOutButton>
        <SidebarMenuButton>
          <LogOutIcon />
          <span>Log Out</span>
        </SidebarMenuButton>
      </SignOutButton>
    );
  }

  return (
    <SidebarOrganizationButtonClient
      user={test.user}
      organization={organization}
    />
  );
}
