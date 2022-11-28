import { isServer } from "solid-js/web";
import { createServerAction$, createServerData$ } from "solid-start/server";

export default function Home() {
  const session = createServerData$(async () => {
    console.log("SERVER ONLY: DATA FROM `useSession`");
    if (!isServer) throw new Error("This should only run on the server");

    return "todo";
  });
  const [, action] = createServerAction$(async (_, { request }) => {
    console.log("SERVER ONLY: ACTION");
    if (!isServer) throw new Error("This should only run on the server");
    return "todo";
  });

  return (
    <main>
      <h1>Three</h1>
      <code>{session()}</code>
      <br />
      <button onclick={() => action()}>
        This one works as expected and runs the code on the server
      </button>
    </main>
  );
}
