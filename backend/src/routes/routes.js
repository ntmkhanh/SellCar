

app.route('/api/users/')
    // .get(userController.findAllUser)
    .post(userController.createAccount)

app.route('/api/users/:id')
    .get(userController.findOneUser)