import { NextResponse, type NextRequest } from "next/server";
export function proxy(request: NextRequest) {
  const hostname = (request.headers.get("host") || "")
    .split(":")[0]
    .toLowerCase();
  if (
    hostname === "daricabeyazesyatamiri.com" ||
    hostname === "www.daricabeyazesyatamiri.com"
  ) {
    const target = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      "https://gebzebeyazesyatamiri.com",
    );
    return NextResponse.redirect(target, 301);
  }
  return NextResponse.next();
}
