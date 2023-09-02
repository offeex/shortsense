import * as process from 'process';

export default {
  port: parseInt(process.env.PORT!) || 3000,
}