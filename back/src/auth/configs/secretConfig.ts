export default () => ({
  appSecret: process.env.NODE_ENV !== 'production' ? '.env.dev' : '.env.prod',
});