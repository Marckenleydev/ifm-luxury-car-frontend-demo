// app/reset_password/page.tsx

"use client";

import { Suspense } from "react";
import ResetPasswordContent from "./ResetPasswordContent";


export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent
       />
    </Suspense>
  );
}
