export function checkAuthentication(ctx) {
  if (!ctx || !ctx.user) {
    throw new Error("you should login before accessing this API");
  }
  return true;
}