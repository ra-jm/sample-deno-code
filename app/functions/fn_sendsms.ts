import { AppContext } from "../../types.ts";

export default function run(context: AppContext) {
  const myUUID = crypto.randomUUID();
  context.log(`SMS Sent ${myUUID}`);
  return true;
}
