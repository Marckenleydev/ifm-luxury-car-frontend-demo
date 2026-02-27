// app/reset_password/page.tsx

"use client";

import { Suspense } from "react";
import ResetPasswordContent from "./ResetPasswordContent";
import LuxuryLoader from "../components/LuxuryLoader";


export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div><LuxuryLoader/></div>}>
      <ResetPasswordContent
       />
    </Suspense>
  );
}
