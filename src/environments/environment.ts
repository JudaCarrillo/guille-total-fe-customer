import { Env } from "../app/common/interfaces/env.interface";

export const environment: Env = {
  production: false,

  GUILLE_TOTAL_BASE_URL: 'http://localhost:8080/v1/',
  GUILLE_TOTAL_SECURITY_API: 'http://localhost:8080/v1/security-management/api/',
  GUILLE_TOTAL_SUBSCRIPTION_API: 'http://localhost:8080/v1/subscription-management/api/',
};
