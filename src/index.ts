import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import mikroOrmConfig from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();

  // const postFirst = orm.em.create(Post, { title: 'This is the first post' });
  // await orm.em.persistAndFlush(postFirst);

  // const posts = await orm.em.find(Post, {});
  // console.log(posts);
};

main();
