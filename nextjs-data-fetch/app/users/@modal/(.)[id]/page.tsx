import Link from "next/link";

async function getUser(id: string) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return res.json();
}

export default async function UserModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">User Info</h2>

        <p>ID: {user.id}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>

        <Link
          href="/users"
          className="inline-block mt-6 text-blue-600 hover:underline"
        >
          Close
        </Link>
      </div>
    </div>
  );
}
