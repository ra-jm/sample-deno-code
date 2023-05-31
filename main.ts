import { Application } from "https://deno.land/x/oak/mod.ts";
import { Status } from 'https://deno.land/std@0.187.0/http/server.ts';

import setupAPI from "./system/api/index.ts";

const app = new Application();

await setupAPI(app);

app.addEventListener("listen", () => {
  console.log("Application running on 8000");
});

await app.listen({ port: 8000 });
