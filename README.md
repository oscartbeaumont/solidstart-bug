# SolidStart

A basic SolidStart app demonstrating a bug where `createServerData$` is run on the client on a mutation of a `createServerAction$`.

Using client side routing to open `/one` and `/two` will crash straight away however if you open then directly in the browser they will only crash when the `createServerAction$` is run.

## Usage

```bash
pnpm i
pnpm run dev
```