type Error = {
  response: {
    data: {
      error: {
        message: string;
        status: number;
      };
    };
    status: number;
  };
};

export default Error;
