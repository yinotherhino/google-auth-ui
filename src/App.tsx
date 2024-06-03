import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const CLIENT_ID = "891507305106-9km4ajq24bvi1v534vcitigpklt6r77e.apps.googleusercontent.com";

function App() {
  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential!);
    console.log("Login Success: currentUser:", decoded);
  };

  const handleLoginFailure = (error: unknown) => {
    console.log("Login failed:", error);
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <div>
          <h2>React Google Login</h2>
          <GoogleLogin theme="filled_blue" onSuccess={handleLoginSuccess} onError={() => handleLoginFailure} />
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
