import { isServer } from "solid-js/web";
import { createServerData$ } from "solid-start/server";

export const useSession = () =>
  createServerData$(async () => {
    console.log("SERVER ONLY: DATA FROM `useSession`");
    if (!isServer) throw new Error("This should only run on the server");

    return "todo";
  });
