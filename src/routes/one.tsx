import { isServer } from "solid-js/web";
import { createServerAction$ } from "solid-start/server";
import { useSession } from "~/utils/demo";

export default function Home() {
  const session = useSession();
  const [, action] = createServerAction$(async (_, { request }) => {
    console.log("SERVER ONLY: ACTION");
    if (!isServer) throw new Error("This should only run on the server");
    return "todo";
  });

  return (
    <main>
      <h1>One</h1>
      <code>{session()}</code>
      <br />
      <button onclick={() => action()}>
        Clicking me triggers a `createServerData$` function on client
      </button>
    </main>
  );
}
