import client, { sender } from "@/lib/mailer";
import { templates } from "@/lib/templates/emailTemplates";
import { EmailTemplate, FormDataMap, FormType } from "@/lib/types/form.types";
import { NextRequest, NextResponse } from "next/server";
export {templates} from "@/lib/templates/emailTemplates";

// ─── Templates ───────────────────────────────────────────────────────────────



// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = (await req.json()) as { formType: FormType } & Record<
      string,
      unknown
    >;
    console.log(body);
    const { formType, email, ...data } = body;
    console.log(email);

    if (!formType || !(formType in templates)) {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    const templateFn = templates[formType] as unknown as (
      data: Record<string, unknown>,
    ) => EmailTemplate;
    const { subject, text, html } = templateFn(data);

    await client.send({
      from: sender,
      to: [{ email: "maviasajjad78@gmail.com" }],
      subject,
      text,
      html,
      category: formType, // shows up in Mailtrap dashboard per form type
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
