import React from "react";
import Link from "next/link";

export function LoginForm() {
  return (
    <div className="w-full max-w-sm">
      <h2 className="font-fredoka font-semibold text-3xl text-[#3F362E] mb-1.5 leading-tight">
        Iniciar sesión
      </h2>
      <p className="text-[#94887B] text-sm mb-7">
        Ingresá para ver el día de hoy.
      </p>

      {/* Inputs */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
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
            placeholder="tu@email.com"
            className="w-full px-4 py-3.5 rounded-2xl border border-[#EADFD0] bg-white text-base text-[#3F362E] placeholder:text-[#B6A99B] focus:outline-none focus:border-[#F2937A] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-bold tracking-wider text-[#94887B] mb-2 uppercase"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3.5 rounded-2xl border border-[#EADFD0] bg-white text-base text-[#3F362E] placeholder:text-[#B6A99B] focus:outline-none focus:border-[#F2937A] transition-colors"
          />
        </div>

        <div className="text-right pt-0.5 pb-2">
          <Link
            href="#"
            className="text-[#C5503A] text-sm font-bold hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Link
          href="/"
          className="block w-full text-center py-3.5 rounded-2xl bg-[linear-gradient(180deg,#F4977E,#EE8164)] hover:brightness-105 transition text-white font-extrabold text-base shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)]"
        >
          Iniciar sesión
        </Link>
      </form>

      <p className="text-center mt-6 text-[#94887B] text-sm">
        ¿Te invitó la guardería?{" "}
        <Link
          href="/auth/activate-account"
          className="text-[#C5503A] font-extrabold hover:underline"
        >
          Activá tu cuenta
        </Link>
      </p>
    </div>
  );
}
