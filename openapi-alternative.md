Any api is Request => Response

openapi generalises this like:

```ts
type Paths = {
  [pathname]: {
    [method]: {
      summary: string;
      description: string;
      operationId: string;
      parameters: {}[];
      security: any[];
      requestBody: {
        content: {
          [mediaType]: { schema: any };
        };
      };
      responses: {
        [statusCode: number]: {
          description: string;
          content: {
            [mediaType: string]: { schema: any };
          };
        };
      };
    };
  };
};
```

but wouldn't it be possible using a simple json schema, so it could be seen as an open function?

```ts
const openfunctionsForRequestResponseExample = { getRoot: {
  description: "",
  params: [
    {
      name: "request";
      description: "Request object";
      required: true;
      schema: {
        type: "object";
        additionalProperties: {
          pathname: { type: "string"; enum: ["/"] };
          searchParams: {
            type: "object";
            properties: {
              q: { type: "array"; items: { type: "string" } };
            };
          };
          headers: {
            type: "object";
            properties: {
              authorization: { type: "string"; pattern: "Bearer (.*)" };
              "content-type": { type: "string"; enum: ["application/json"] };
            };
          };
          body: { type: "object"; properties: {} }
        }
      }
    },
  ],
  result: {
    name: "user";
    description: "Created user object";
    schema: { $ref: "#/components/schemas/User" };
  };
}}
```
