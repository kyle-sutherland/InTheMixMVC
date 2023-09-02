// withAuth.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const AuthComponent: React.FC = (props) => {
    const router = useRouter();
    const { data: session } = useSession();

    // If there's no session, redirect to login
    if (!session) {
      router.push('/login');
      return null;
    }

    // If there's a session, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;

