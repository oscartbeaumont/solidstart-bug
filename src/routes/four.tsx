import { isServer } from "solid-js/web";
import { useRouteData } from "solid-start";
import { createServerAction$, createServerData$ } from "solid-start/server";

export function routeData() {
  return createServerData$(async () => {
    console.log("SERVER ONLY: DATA FROM `routeData`");
    if (!isServer) throw new Error("This should only run on the server");

    return "todo";
  });
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
      <h1>Four</h1>
      <code>{session()}</code>
      <br />
      <button onclick={() => action()}>
        This one works as expected and runs the code on the server
      </button>
    </main>
  );
}
