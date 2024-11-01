import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.interval(
  "Ping backend",
  { minutes: 8 }, // every minute
  internal.store.serverHealthCheck
);

export default crons;
