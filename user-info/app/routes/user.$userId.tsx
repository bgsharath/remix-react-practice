import { Link, useLoaderData } from '@remix-run/react';
import axios from 'axios';
export async function loader({params}:{params:any}) {    
    const {data} = await axios(`https://jsonplaceholder.typicode.com/posts/${params.userId}`)
    return {data};
}

export default function UserId() {
  const {data} = useLoaderData();
  return (
    <div>
      <Link to="/user">User Data</Link>
        <h1>indvidual user</h1>
        {JSON.stringify(data,null,2)}
    </div>
  )
}
