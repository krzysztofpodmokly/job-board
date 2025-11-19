import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { SidebarUserButtonClient } from "./_SidebarUserButtonClient";

const SidebarUserButton = () => {
  return (
    <Suspense>
      <SidebarUserSuspense />
    </Suspense>
  );
};

const SidebarUserSuspense = async () => {
  const { userId } = await auth();

  return (
    <SidebarUserButtonClient
      user={{ email: "test@test.com", name: "Test", imageUrl: "" }}
    />
  );
};

export default SidebarUserButton;
