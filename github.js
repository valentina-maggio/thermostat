import got from 'got';

got('https://api.github.com/repos/sinatra/sinatra').then((response) => {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
});