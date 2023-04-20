export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 3000,
  defaultLimit: process.env.DEFAULT_LIMIT || 7,
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET || 'apisolutions',
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || 'apisolutions',
});
