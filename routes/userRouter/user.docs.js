const userSignupDoc = {
  tags: ["User"],
  description: "User Sign up router",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            firstName: {
              type: "string",
              description: "FirstName of the user",
              example: "razi",
            },
            lastName: {
              type: "string",
              description: "Lastname of the user",
              example: "BK",
            },
            email: {
              type: "string",
              description: "email of the user",
              example: "razi@gmail.com",
            },
            password: {
              type: "string",
              description: "password of the user",
              example: "razi@12skfj",
            },
            timeZone: {
              type: "string",
              description: "timeZone of the user",
              example: "GMT+5:30",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              firstName: {
                type: "string",
                description: "FirstName of the user",
                example: "razi",
              },
              lastName: {
                type: "string",
                description: "Lastname of the user",
                example: "BK",
              },
              email: {
                type: "string",
                description: "email of the user",
                example: "razi@gmail.com",
              },
              password: {
                type: "string",
                description: "password of the user",
                example: "razi@12skfj",
              },
              timeZone: {
                type: "string",
                description: "timeZone of the user",
                example: "GMT+5:30",
              },
            },
          },
        },
      },
    },
    400: {
      description: "Bad Request",
    },
    500: {
      description: "Internal Server Error",
    },
  },
};

const userRouteDoc = {
  "/api/user": {
    post: userSignupDoc,
  },
};

module.exports = userRouteDoc;
