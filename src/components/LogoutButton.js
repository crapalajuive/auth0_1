import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
                <Button
                  onClick={() => {
                    logout({ returnTo: window.location.origin + '/auth0_1/' });
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Sign Out
                </Button>
        )
    )
}

export default LogoutButton
