import http from 'http';
import {file} from './i.mjs';

const listener = (req,res)=>res.end(file(req.url?.split('/').slice(-1)[0]));
http.createServer(listener).listen(3030);
