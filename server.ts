import express from "express";
import todorouter from './src/router/todorouter';
import cookieParser from "cookie-parser";
const app = express()

var myLogger = function (req:any, res:any, next:any) {

  console.log('LOGGED')
  next()
}

// app.use(myLogger)
app.get('/', myLogger,function (req, res){
  res.send("hello")
})
// app.get('/hello', function (req, res,next) {
//   res.send('Hello World!')
//   console.log('toi den day')
//   next()
// })

const port = 3000
// var options = {
//   dotfiles: 'ignore',
//   etag: false,
//   extensions: ['htm', 'html'],
//   index: false,
//   maxAge: '1d',
//   redirect: false,
//   setHeaders: function (res:any, path:any, stat:any) {
//     res.set('x-timestamp', Date.now())
//   }
// }

// app.use(todorouter)
app.use(express.static('src/asset/images'))

// app.get('/asset/imgaes/Avatar.jpg', function (req, res) {
//   res.send('Hello World!')
// })
  // app.get('/', function (req, res) {
  //   // Cookies that have not been signed
  //   console.log('Cookies: ', req.cookies)
  
  //   // Cookies that have been signed
  //   console.log('Signed Cookies: ', req.signedCookies)
  // })
  
app.listen(port,()=>{
    console.log(`Connect server at http://localhost:${port}`);
    
})   
