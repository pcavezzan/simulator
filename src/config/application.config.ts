const convict = require('convict');

export const config = convict({
  ENV: {
    doc: 'The application environment.',
    format: ['prd', 'dev', 'test'],
    default: 'dev',
    env: 'ENV',
    arg: 'env'
  },
  PORT: {
    doc: 'Applicatoin port',
    format: 'Number',
    default: '4000',
    env: 'PORT',
    arg: 'port'
  }
});