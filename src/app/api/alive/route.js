// app/api/alive/route.js
import { Router } from 'worktop';
import * as Cache from 'worktop/cache';

const API = new Router();

API.add('GET', '/api/alive', (req, res) => {
  res.end('OK');
});

export const runtime = 'edge';
export default Cache.listen(API.run);
