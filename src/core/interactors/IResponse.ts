export type IResponse<typeData> = {
  status: number;
  data?: typeData;
  error?: string;
};
