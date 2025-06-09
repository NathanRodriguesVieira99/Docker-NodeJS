import { app } from './app';
import { env } from '@/config/env';

app
  .listen({
    host: env.HOST,
    port: env.PORT,
  })
  .then(() => {
    console.log(`🚀 Server is running on http://localhost:${env.PORT}`);
  });
