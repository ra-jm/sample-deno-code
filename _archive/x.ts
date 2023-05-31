import * as mod from "https://deno.land/std@0.185.0/uuid/mod.ts";

export default async function fn(param: any) {
  const uid = await mod.v5.generate(
    "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    new TextEncoder().encode("python.or")
  );
  console.log("Function execution success");
  console.log(uid);
  console.log(param.sendSMS());
}
