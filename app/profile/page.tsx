import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth/next";

export async function generateMetadata() {
  const session = await getServerSession(authConfig);

  return {
    title: `${session?.user?.name} | NextJS`,
  };
}

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <img src={session.user.image} alt="Profile picture" />
      )}
    </div>
  );
}
