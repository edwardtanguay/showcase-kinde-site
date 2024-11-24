import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { ProtectedArea } from "./components/ProtectedArea";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function App() {
	const { login, register } = useKindeAuth();
	return (
		<>
			<h1>Showcase Kinde</h1>
			<p>This is the kinde site.</p>
			<p>
				repo:{" "}
				<a
					href="https://github.com/edwardtanguay/showcase-kinde-site"
					target="_blank"
				>
					https://github.com/edwardtanguay/showcase-kinde-site
				</a>
			</p>
			<p>
				site:{" "}
				<a
					href="https://showcase-kinde-site.vercel.app"
					target="_blank"
				>
					https://showcase-kinde-site.vercel.app
				</a>
			</p>
			<hr />
			<button onClick={() => register()} type="button">
				Register
			</button>
			<button onClick={() => login()} type="button">
				Log In
			</button>
			<hr />

			<KindeProvider
				clientId="499d4ffefd5e4e1393e86e6c19efd69d"
				domain="https://edwardtanguay.kinde.com"
				redirectUri="http://localhost:5173"
				logoutUri="http://localhost:5173"
			>
				<ProtectedArea />
			</KindeProvider>
		</>
	);
}

export default App;
