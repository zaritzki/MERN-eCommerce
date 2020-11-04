import bcryptjs from 'bcryptjs'

const user = [
    {
      name: 'Admin User',
      email: 'admin@dotzar.com',
      password: bcryptjs.hashSync('letmein', 10),
      isAdmin: true
    },
    {
        name: 'Zaniel',
        email: 'zaniel@dotzar.com',
        password: bcryptjs.hashSync('letmein', 10)
    },
    {
        name: 'Yana',
        email: 'yana@dotzar.com',
        password: bcryptjs.hashSync('letmein', 10)
    }
  ]

  export default user
  