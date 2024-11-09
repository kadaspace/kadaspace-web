# DOCS

-   make use of the `catchAsync` method to catch any error in the app as shown below. This will help avoid having try catch in every controller

```ts
const getAuthUser = catchAsync(async (req, res) => {
    const user = await User.create({
        name: "John Doe",
        username: "john_doe_2",
        email: "john_doe_2@email.com",
        role: "admin",
        password: "12345678",
    });

    res.json({ user });
});
```

-   The Response format should be like. 

```json
{
    "statusCode": "status",
    "payload": {
        "statusCode": "status",
        "error": "Error here or null",
        "message": "Message here",
        "data": "data here or null"
    },
    "headers": {}
}
```

We have a `AppResponse` in `lib/index.js`  method to help return correct format. Example use case
```ts
return res.json(AppResponse({status: 200, message: "User created successfully", data: user}));		
```
