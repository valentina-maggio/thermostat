import got from 'got';

// const response_value = JSON.parse(get)

const handleReceivedResponse = (response) => {
  console.log(JSON.parse(response.body));
}

got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);