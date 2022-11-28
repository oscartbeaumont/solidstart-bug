import { isServer } from "solid-js/web";
import { useRouteData } from "solid-start";
import { createServerAction$, createServerData$ } from "solid-start/server";
import { useSession } from "~/utils/demo";

export function routeData() {
  return useSession();
}

export default function Home() {
  const session = useRouteData<typeof routeData>();
  const [, action] = createServerAction$(async (_, { request }) => {
    console.log("SERVER ONLY: ACTION");
    if (!isServer) throw new Error("This should only run on the server");
    return "todo";
  });

  return (
    <main>
      <h1>Two</h1>
      <code>{session()}</code>
      <br />
      <button onclick={() => action()}>
        Clicking me triggers a `createServerData$` function on client
      </button>
    </main>
  );
}
