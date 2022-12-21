/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { publicLinks } from '../constants/links';
import useAuth from '../hooks/useAuth';
import useRefreshToken from '../hooks/useRefreshToken';

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  const navigate = useNavigate()
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
        
      } catch (error) {
        toast.error("Please Login again!")
        navigate(publicLinks.Login, {replace: true});
      } finally {
        // eslint-disable-next-line no-unused-expressions
        setIsLoading(false);
      }
    };

    // eslint-disable-next-line no-unused-expressions
    !auth?.access ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{isLoading ? <p>loading...</p> : <Outlet />}</>;
}

export default PersistLogin;
