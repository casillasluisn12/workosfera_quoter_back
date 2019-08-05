// const { NODE_ENV } = process.env
const config = {
	dev: 'mongodb://localhost/dev', //local mongodb
	prod: 'mongodb://localhost/prod', //local mongodb
	webhost: '',
	secretKey: 'secretKey',
  //heroku:'mongodb://tennant:n12estudio@ds125648-a0.mlab.com:25648,ds125648-a1.mlab.com:25648/heroku_pm4xdcpb?replicaSet=rs-ds125648',
  // heroku:'mongodb://worko_db:%40Worko2018@ds119523.mlab.com:19523/heroku_gd9s4xbn'

};

export default config;
