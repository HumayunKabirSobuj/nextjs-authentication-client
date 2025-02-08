import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div>
      {session?.user && (
        <div>
          <Image
            src={session?.user?.image as string}
            alt="profile"
            height={150}
            width={150}
            className="mx-auto mt-10 rounded-full"
          />
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged-in User: {session?.user?.email}
          </h1>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
