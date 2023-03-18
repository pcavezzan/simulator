import { expressConfig } from './config/express.config';
import { config } from './config/application.config';
import { logger } from './config/logger.config';

(function launchServer() {
  const app = expressConfig();
  app.listen(config.get('PORT'), () => {
    logger.info(`Server started on port ${ config.get('PORT') }`);
  });
})();
