type Error = {
  response: {
    data: {
      error: {
        message: string;
        status: number;
      };
    };
    status: number;
    message: string;
  };
};

export default Error;
