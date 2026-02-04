async function getUser(id: string) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return res.json();
}

export default async function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        {user.firstName} {user.lastName}
      </h1>

      <div className="space-y-2 text-gray-700">
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}
