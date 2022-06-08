import http from 'http';
import * as fs from 'fs/promises';

const file = await fs.readFile('./i.html');
const listener = (req,res)=>res.end(file);
http.createServer(listener).listen(8000);