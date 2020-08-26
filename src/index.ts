import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: 'bible_discuss',
    type: 'postgresql',
    user: 'postgres',
    password: '1234567890',
    debug: !__prod__,
  });
};
main();
