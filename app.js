const express = require('express');
const dotenv = require('dotenv').config;
const fetch = require('node-fetch');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

const api_key = process.env.API_KEY;


app.get('/uk', async (req, res) => {
  const url = `https://newsapi.org/v2/everything?q=(UK OR United Kingdom OR Britain OR England OR Scotland OR Wales OR London)&from=2024-03-16&domains=bbc.co.uk,theguardian.com,dailymail.co.uk&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)

  .then(res => res.json())  
  
  res.send({ response }); 
});

app.get('/usa', async (req, res) => { 
  const url = `https://newsapi.org/v2/everything?q=(USA OR United States)&from=2024-03-16&domains=cnn.com,axios.com,nbcnews.com&language=en&apiKey=${api_key}`;

  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});

app.get('/canada', async (req, res) => { 
  const url = `https://newsapi.org/v2/everything?q=(Canada OR Toronto OR Vancouver)&from=2024-03-16&domains=ctvnews.ca,globalnews.ca,thestar.com&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});

app.get('/australia', async (req, res) => { 
  const url = `https://newsapi.org/v2/everything?q=(Australia OR Queensland OR New South Wales)&from=2024-03-16&domains=abc.net.au,9news.com.au,smh.com.au&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});

app.get('/japan', async (req, res) => { 
  const url = `https://newsapi.org/v2/everything?q=(Japan OR Tokyo Or Osaka OR Fukuoka OR Okinawa)&from=2024-03-16&domains=japantimes.co.jp,nhk.or.jp,mainichi.jp&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});

app.get('/saudiarabia', async (req, res) => { 
  const url = `https://newsapi.org/v2/everything&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});

app.get('/china', async (req, res) => { 
  const url = `https://newsapi.org/v2/everything?q=(China OR Beijing OR Shanghai OR Shenzhen OR Guangzhou)&from=2024-03-16&domains=globaltimes.cn,scmp.com&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});


app.get('/coronavirus', async (req, res) => { 
  const url = `https://newsapi.org/v2/everything?q=covid&from=2024-03-16&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});


app.get('/entertainment', async (req, res) => { 
  const url = `https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});

app.get('/business', async (req, res) => { 
  const url = `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});

app.get('/sports', async (req, res) => { 
  const url = `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});

app.get('/technology', async (req, res) => { 
  const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});

app.get('/politics', async (req, res) => { 
  const url = `https://newsapi.org/v2/everything?q=politics&from=2024-03-16&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});

app.get('/world', async (req, res) => { 
  const url = `https://newsapi.org/v2/top-headlines?category=general&from=2024-03-16&language=en&apiKey=${api_key}`;
  
  const response = await fetch(url)
  .then(res => res.json())  
  
  res.send({ response });
});

app.listen(port, () => {
  console.log(`app listening on ${port}`)
});


app.use(express.static(path.join(__dirname, "./client/build")))

app.get('*', (req, res) => {

  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

