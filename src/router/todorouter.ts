import express,{Router} from 'express';
const router = Router();

/**Route Methods */
// GET method route
//  router.get('/', function (req, res) {
//     res.send('GET request to the homepage')
//   })
  // POST method route
//   router.post('/', function (req, res) {
//     res.send('POST request to the homepage')
//   })//post is create new entity
//   router.put('/', function (req, res){
//     res.send('Hello Phuc')
//   })//put is update  entity
  
  // All method route
//   router.all('/secret', function (req, res, next) {
//     // res.send("Hello ") 
//     console.log('Accessing the secret section ...')
//     next() 
//   }, function (req, res){
//     res.send("hello end request")
//   })
/**Route paths */
  //Path string
//   router.get('/', function (req, res) {
//     res.send('root')
//   })
//   router.get('/about', function (req, res) {
//     res.send('about')
//   })
//   router.get('/random.text', function (req, res) {
//     res.send('random.text')
//   })
//Path  string patterns
//   router.get('/ab?cd', function (req, res) {
//     res.send('ab?cd')
//   })
//   router.get('/ab+cd', function (req, res) {
//     res.send('ab+cd')
//   })
//   router.get('/ab*cd', function (req, res) {
//     res.send('ab*cd')
//   })
//   router.get('/ab(cd)?e', function (req, res) {
//     res.send({path: req.path})
//   })
//Path  regular expressions
//   router.get(/a/, function (req, res) {
//     res.send('/a/')
//   })
//   router.get(/.*fly$/, function (req, res) {
//     res.send('/.*fly$/')
//   })

/**Route parameters */
//  router.get('/users/:userId/books/:bookId', function (req, res) {
//     res.send(req.params)
//   })
  //The name of route parameters must be made up of “word characters” ([A-Za-z0-9_]).:Tên của các tham số tuyến đường phải được tạo thành từ “các ký tự từ” ([A-Za-z0-9_]).

export default router;