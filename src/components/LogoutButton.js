import { useAuth0 } from '@auth0/auth0-react';

const ghrepo = process.env.REACT_APP_GITHUB_REPO;

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
                <button
                  onClick={() => {
                    logout({ returnTo: window.location.origin + '/' + ghrepo + '/' });
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Sign Out
                </button>
        )
    )
}

export default LogoutButton
