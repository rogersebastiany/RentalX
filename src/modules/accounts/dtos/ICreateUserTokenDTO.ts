interface ICRreateUserTokenDTO {
  user_id: string;

  expiry_date: Date;

  refresh_token: string;
}

export { ICRreateUserTokenDTO };
