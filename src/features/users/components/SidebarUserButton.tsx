import { SidebarMenuButton } from '@/components/ui/sidebar';
import { SignOutButton } from '@/services/clerk/components/AuthButtons';
import { getCurrentUser } from '@/services/clerk/lib/getCurrentAuth';
import { LogOutIcon } from 'lucide-react';
import { Suspense } from 'react';
import { SidebarUserButtonClient } from './_SidebarUserButtonClient';

const SidebarUserButton = () => {
  return (
    <Suspense>
      <SidebarUserSuspense />
    </Suspense>
  );
};

const SidebarUserSuspense = async () => {
  const { user } = await getCurrentUser({ allData: true });

  console.log('sidebar user', user);

  if (!user) {
    return (
      <SignOutButton>
        <SidebarMenuButton>
          <LogOutIcon />
          <span>Log Out</span>
        </SidebarMenuButton>
      </SignOutButton>
    );
  }

  return <SidebarUserButtonClient user={user} />;
};

export default SidebarUserButton;
