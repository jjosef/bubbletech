const config = {
  MONGOOSE_CONNECT_URL: process.env.MONGOOSE_CONNECT_URL || 'mongodb://root:password@localhost'
}

export { config };