import routes from "./routes";

const navigationConfig = [
  {
    name: "Root",
    path: "/",
    element: <routes.Root />,
    errorElement: <routes.ErrorConfig />,
    children: [
      {
        name: "Runners",
        path: "/runners",
        element: <routes.HomeConfig />,
        onMenu: true,
      },
      {
        name: "Mission",
        path: '/',
        element: <routes.MissionConfig />,
      },
      {
        name: "Progress",
        path: '/money-raised',
        element: <routes.ProgressConfig />,
      },
      {
        name: "Contact Us",
        path: "/contact",
        element: <routes.ContactConfig />,
        onMenu: true,
        description: "The way a user can contact sol good media"
      },
      {
        name: "404",
        path: '/404',
        element: <routes.NoRouteConfig />,
        onMenu: false,
        description: 'end point if there is no route'
      }
    ],
  },
];

export default navigationConfig;
