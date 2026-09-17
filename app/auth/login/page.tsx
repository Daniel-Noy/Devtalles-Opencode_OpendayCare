import type { Metadata } from "next";
import { AuthHeroPanel } from "@/app/components/auth/auth-hero-panel";
import { LoginForm } from "@/app/components/auth/login-form";

export const metadata: Metadata = {
  title: "Iniciar sesión | OpenDayCare",
  description: "Accede para ver y gestionar el día a día de la guardería.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] bg-[#FBF4EC]">
      {/* Left decorative hero banner */}
      <AuthHeroPanel />

      {/* Right login form */}
      <main className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
        <LoginForm />
      </main>
    </div>
  );
}
