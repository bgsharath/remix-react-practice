import { Link } from "@remix-run/react";

export default function UserList({data}:{data:any}) {    
  return (
    <ul>
        {data.data.map((item:any)=>(
            <li><Link to={`/user/${item.id}`}>{item.title}</Link></li>
        ))}
    </ul>
  )
}
