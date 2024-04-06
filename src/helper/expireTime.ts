const getExpireTime = () => {
  const expirationTime = new Date(Date.now() + 5 * 60 * 1000);
  return expirationTime.toISOString();;
};

export default getExpireTime;