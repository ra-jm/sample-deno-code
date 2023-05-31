import { Application, Router } from "https://deno.land/x/oak/mod.ts";
// Get API's list from DB and configure it.

const endpoints = [
  {
    path: "/api/sendsms",
    method: "POST",
    fn: "fn_sendsms",
    version: 0,
    roles: [],
  },
];

export default async function setup(app: Application) {
  const router = new Router();

  endpoints.forEach((e) => {
    router.add("DELETE", "/api/deleteemail", "/api/deleteemail", (c) => {
      
    });

    router.add(e.method as any, e.fn, e.path, (c) => {
      console.log(e);

      router.add("GET", "/api/sendemail", "/api/sendemail", (c) => {
        console.log(e);

        c.response.body = "EMAIL";
      });

      c.response.body = "SMS";
    });
  });

  app.use(router.routes());
}
