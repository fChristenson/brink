export const Request = (method: string, body?: any): RequestInit => {
  return {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body: body && JSON.stringify(body)
  };
};
