import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { useEffect } from 'react';
import DashBoard from '../components/DashBoard';

const Protected = () => {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('/auth/signin');
  }, [status]);

  if (status === 'authenticated') return <DashBoard></DashBoard>;

  return <div>loading</div>;
};

export default Protected;
