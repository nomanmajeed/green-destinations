import { NextResponse } from "next/server";
import { buildCareersEmail } from "@/lib/email/careers-template";
import { sendSiteEmail } from "@/lib/email/send";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const roleId = Number(body.roleId);
    const roleTitle = String(body.roleTitle ?? "").trim();
    const roleTag = String(body.roleTag ?? "").trim();
    const location = String(body.location ?? "").trim();
    const type = String(body.type ?? "").trim();
    const salary = String(body.salary ?? "").trim();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const statement = String(body.statement ?? "").trim();
    const licence = String(body.licence ?? "").trim();
    const taxiVehicle = String(body.taxiVehicle ?? "").trim();

    if (!roleTitle || !name || !email || !phone || !statement) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if ((roleId === 2 || roleId === 3) && !licence) {
      return NextResponse.json({ error: "PSV licence details are required for this role." }, { status: 400 });
    }

    if (roleId === 4 && !taxiVehicle) {
      return NextResponse.json({ error: "Licensed taxi vehicle details are required for this role." }, { status: 400 });
    }

    const emailContent = buildCareersEmail({
      roleId,
      roleTitle,
      roleTag,
      location,
      type,
      salary,
      name,
      email,
      phone,
      statement,
      licence: licence || undefined,
      taxiVehicle: taxiVehicle || undefined,
    });

    const result = await sendSiteEmail(emailContent);

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 503 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
