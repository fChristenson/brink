export const rootRoute = {
  template: "/",
  route: () => "/"
};

export const pageRoute = {
  template: "/page/:id",
  route: (id: string) => `/page/${id}`
};

export const previewRoute = {
  template: "/preview/:id",
  route: (id: string) => `/preview/${id}`
};
