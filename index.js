const http = require('http');
const port = 8000;
const server = http.createServer();

server.listen(port, function(err){
    if(err){
        console.log('Error while server is up', err);
        return ;
    }
    console.log(`Server is up and running on port ${port}`);
    return ;
})