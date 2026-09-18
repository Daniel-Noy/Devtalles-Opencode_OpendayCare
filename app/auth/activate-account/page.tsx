import type { Metadata } from "next";
import { ActivateAccountForm } from "@/app/components/auth/activate-account-form";
import { mockInvitationContext } from "@/app/data/auth.mock";

export const metadata: Metadata = {
  title: "Activar cuenta | OpenDayCare",
  description: "Crea tu contraseña para activar tu cuenta de familia en OpenDayCare.",
};

export default function ActivateAccountPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBF4EC] p-6 sm:p-10">
      <main className="w-full flex justify-center">
        <ActivateAccountForm invitationContext={mockInvitationContext} />
      </main>
    </div>
  );
}
