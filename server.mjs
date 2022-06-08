import http from 'http';
import {file} from './i.mjs';

const listener = (req,res)=>{
  try{res.end(file(req.url.split('/').slice(-1)[0]))}
  catch(e){res.end(e.message)}
};
http.createServer(listener).listen(3030);
