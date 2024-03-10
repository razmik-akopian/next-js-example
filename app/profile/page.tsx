import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/configs/auth";

export async function generateMetadata() {
  const session = await getServerSession(authConfig);

  return {
    title: `${session?.user?.name ?? "User"} | NextJS`,
  };
}

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div className="centered-row">
      <h1>Hello, {session?.user?.name ?? "User"}!</h1>
      {session?.user?.image && (
        <Image
          src={session?.user?.image}
          alt="Profile picture"
          width={120}
          height={120}
        />
      )}
    </div>
  );
}
