import React from "react";
import Link from "next/link";
import { ChildInvitationContext } from "@/app/types/auth";
import { InvitationInfoCard } from "./invitation-info-card";

interface ActivateAccountFormProps {
  invitationContext: ChildInvitationContext;
}

export function ActivateAccountForm({
  invitationContext,
}: ActivateAccountFormProps) {
  return (
    <div className="w-full max-w-md">
      {/* Brand Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[linear-gradient(155deg,#F8C3A8,#F2937A)] flex items-center justify-center mb-6 shadow-[0_12px_26px_-10px_rgba(238,129,100,0.65)]">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </div>

      <h1 className="font-fredoka font-semibold text-3xl leading-tight mb-2 text-[#3F362E]">
        Bienvenida a OpenDayCare
      </h1>
      <p className="text-[#94887B] text-base leading-relaxed mb-6">
        Te invitaron a seguir el día de tu hijo. Creá tu contraseña para activar la cuenta.
      </p>

      {/* Child Invitation Summary Card */}
      <InvitationInfoCard context={invitationContext} />

      {/* Form with empty inputs & placeholders */}
      <form className="space-y-4">
        <div>
          <label
            htmlFor="invitationCode"
            className="block text-xs font-bold tracking-wider text-[#94887B] mb-2 uppercase"
          >
            Código de invitación
          </label>
          <input
            id="invitationCode"
            type="text"
            placeholder="Ej. 7K4P9"
            className="w-full px-4 py-3.5 rounded-2xl border border-[#EADFD0] bg-white text-lg tracking-widest font-bold text-[#3F362E] font-fredoka placeholder:text-[#B6A99B] placeholder:tracking-normal placeholder:font-sans focus:outline-none focus:border-[#F2937A] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold tracking-wider text-[#94887B] mb-2 uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="ejemplo@correo.com"
            className="w-full px-4 py-3.5 rounded-2xl border border-[#EADFD0] bg-white text-base text-[#3F362E] placeholder:text-[#B6A99B] focus:outline-none focus:border-[#F2937A] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-bold tracking-wider text-[#94887B] mb-2 uppercase"
          >
            Crear contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingresá tu contraseña"
            className="w-full px-4 py-3.5 rounded-2xl border border-[#EADFD0] bg-white text-base text-[#3F362E] placeholder:text-[#B6A99B] focus:outline-none focus:border-[#F2937A] transition-colors"
          />
        </div>

        {/* Media authorization consent */}
        <label className="flex items-start gap-3 bg-[#FBF1D6] rounded-2xl p-4 cursor-pointer select-none">
          <span className="w-6 h-6 rounded-lg bg-[#5FB97E] flex items-center justify-center mt-0.5 shrink-0">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span className="text-sm text-[#8A7234] leading-relaxed">
            Autorizo a la guardería a tomar y compartir fotos de mi hijo dentro de la app.
          </span>
        </label>

        {/* CTA Button */}
        <Link
          href="/"
          className="block w-full text-center py-3.5 rounded-2xl bg-[linear-gradient(180deg,#F4977E,#EE8164)] hover:brightness-105 transition text-white font-extrabold text-base shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)]"
        >
          Activar mi cuenta
        </Link>
      </form>

      <p className="text-center mt-6 text-[#94887B] text-sm">
        ¿Ya tenés cuenta?{" "}
        <Link
          href="/auth/login"
          className="text-[#C5503A] font-extrabold hover:underline"
        >
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
}
