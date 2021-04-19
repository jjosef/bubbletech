import mongoose from 'mongoose';
import { config } from './index.js';

if (!mongoose.connection.readyState) {
  mongoose.connect(config.MONGOOSE_CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}

const db = mongoose.connection;

export { db };