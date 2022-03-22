import React, { useEffect, useState } from 'react';
import { getUserByID } from '../../api';
import './CurrentUser.scss';

type Props = {
  userId: number,
  clearUsers: (userId: number) => void
};

export const CurrentUser: React.FC<Props> = ({
  userId,
  clearUsers,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  useEffect(() => {
    getUserByID(userId)
      .then(setUser)
      .catch(() => setHasLoadingError(true));
  }, [userId]);

  return (
    <div className="CurrentUser">
      {hasLoadingError ? (
        <p>Oops... Page loading error! Try again...</p>
      ) : (
        <>
          {user ? (
            <>
              <h2 className="CurrentUser__title">
                <span>
                  Selected user:&nbsp;
                  {userId}
                </span>
              </h2>

              <h3 className="CurrentUser__name">{user.name}</h3>
              <p className="CurrentUser__email">{user.email}</p>
              <p className="CurrentUser__phone">{user.phone}</p>

              <button
                className="button button--center"
                type="button"
                onClick={() => clearUsers(0)}
              >
                Clear
              </button>
            </>
          ) : (
            <p>
              Loading...
            </p>
          )}
        </>
      )}
    </div>
  );
};
