import { Checkout } from "@creem_io/nextjs";

const CREEM_API_KEY = process.env.CREEM_API_KEY;
const testMode = CREEM_API_KEY?.startsWith("creem_test_") ?? false;

export const GET = Checkout({
  apiKey: CREEM_API_KEY!,
  testMode,
  defaultSuccessUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://loopcanvas.video"}/profile`,
});
