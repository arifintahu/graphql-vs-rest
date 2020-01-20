import { verifyToken } from "../main_function/user";

export async function context({ req, connection, payload }) {
  // get the user token from the headers & connectin context
  let token = "";
  if (connection) {
    token = connection.context.authorization || "";
  }
  if (req) {
    token = req.headers.authorization || "";
  }
  if(payload) {
    token = payload.authorization || "";
  }

  // default to empty context
  if (!token || !token.length) {
    return {};
  }
  // try to retrieve a user with the token
  const user = await verifyToken(token);

  // add the user to the context
  return { user };
}