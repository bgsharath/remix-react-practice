import { redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

export async function action({request}:{request:any}) {
    const body = await request.formData();
    const newUser = {
        title: body.get('title'),
        description: body.get('description')
    }
    console.log(newUser);
    return redirect('/user')
}

export default function New() {
  return (
    <>
    <Link to="/user">User Data</Link>
    <div>Add new user</div><br></br>
    <Form method="post">
        <input type="text" name="title" placeholder="title"/><br></br><br></br>
        <input type="text" name="description" placeholder="description"/><br></br><br></br>
        <button type="submit">Submit</button>
    </Form>
    </>
  )
}
