// redisConfig
import * as redis from "redis";
// Declare type for redis instance
let redisConn: redis.RedisClientType;

const initRedis = async () => {
  redisConn = redis.createClient({
    url: "redis://redis:6379",
  });
  redisConn.on("error", (err) => console.log(`Redis Client Error: ${err}`));
  await redisConn.connect();
  console.log("Connected to redis");
};

const getRedisClient = (): redis.RedisClientType => {
  return redisConn; // Return the instance or null
};

export { initRedis, getRedisClient };
