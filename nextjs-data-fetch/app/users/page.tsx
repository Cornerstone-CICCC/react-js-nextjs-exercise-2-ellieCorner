import Link from "next/link";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://dummyjson.com/users");
  const { users } = await res.json();

  return users;
}

export default async function UserListServer() {
  const users = await getUsers();

  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.firstName}</Link>
        </li>
      ))}
    </ul>
  );
}
