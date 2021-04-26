// logger será um singleton -> é uma instancia de uma classe que estará disponível em toda app
import pino from 'pino';
import config from 'config';

export default pino({
  enabled: config.get('App.logger.enabled'),
  level: config.get('App.logger.level'),
});
