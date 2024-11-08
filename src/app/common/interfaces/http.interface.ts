export interface IHttpResponse<T> {
  success: boolean;

  data: {
    item?: T;
    items?: T[];
  };

  message: string;
  error?: string;

  token?: IToken;
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: string;
  refreshTokenExpiresAt: string;
}
