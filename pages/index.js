import Link from 'next/link';
export default () => {
  const foo = (
    <div>
      Hello Worl.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );

  console.log('ok');
  return foo;
};
