import React from "react";
import { ChildInvitationContext } from "@/app/types/auth";

interface InvitationInfoCardProps {
  context: ChildInvitationContext;
}

export function InvitationInfoCard({ context }: InvitationInfoCardProps) {
  return (
    <div className="flex items-center gap-3.5 bg-white border border-[#EADFD0] rounded-2xl p-4 mb-6">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center font-fredoka font-semibold text-lg shrink-0"
        style={{
          backgroundColor: context.avatarBgColor,
          color: context.avatarTextColor,
        }}
      >
        {context.avatarInitial}
      </div>
      <div>
        <div className="text-xs text-[#94887B] leading-none mb-1">
          Te invitaron a seguir a
        </div>
        <div className="font-fredoka font-semibold text-base text-[#3F362E] leading-tight">
          {context.childName} · {context.roomName}
        </div>
      </div>
    </div>
  );
}
