import dotenv from 'dotenv';
dotenv.config();

//환경변수에 value가 없다면 에러를 던져주는 함수
function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`key ${key} is undefined`);
  }
  return value;
}
export const config = {
  jwt: {
    secretKey: required('JWT_SECRET'),
    expiresInSec: parseInt(required('JWT_EXPIRES_SEC', 86400)),
  },
  bcrypt: {
    saltRounds: parseInt(required('BCRUPT_SALT_ROUNDS', 12)),
  },
  host: {
    port: required('HOST_PORT', 8080),
  },
  db: {
    host: required('DB_HOST'),
    user: required('DB_USER'),
    database: required('DB_DATABASE'),
    // password: required('DB_PASSWORD'),
  },
};
