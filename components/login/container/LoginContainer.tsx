import LoginForm from "../components/LoginForm";
import LoginBanner from "../components/LoginBanner";

export default function LoginContainer() {
    return (
        <div className="min-h-screen pt-23 px-42 flex flex-row items-center justify-center mx-auto gap-6">
            <LoginBanner />
            <LoginForm />
        </div>
    )
}