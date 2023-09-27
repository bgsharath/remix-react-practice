import { Link, Outlet, useLoaderData } from "@remix-run/react";
import axios from "axios";
import UserList from "~/component/UserList";

export async function loader() {
  //we can connect mongo db
  const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
  return {
    data: data,
  };
}

export default function UserHome() {
  const data = useLoaderData();

  return (
    <>
      <div>UserHome</div>
      <Link to="/user/new">New User</Link>
      <UserList data={data} />
    </>
  );
}
