import { createConnection } from 'typeorm';

export const databaseConfig = [
  {
    useFactory: async () => await createConnection({
      type: 'mongodb',
      url: 'mongodb+srv://wellness-platform:uXf8VrFo1GNkL3mG@wellness-platform.fd0wb.mongodb.net/wellness-platform?retryWrites=true&w=majority',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];