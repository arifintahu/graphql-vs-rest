import { startServer } from "./server";
import { syncDB } from "./model/orm";

async function startApp() {
  await syncDB();
  startServer();
}

startApp();