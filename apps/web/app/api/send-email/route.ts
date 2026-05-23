import transporter from "@/lib/mailer";
import { NextRequest, NextResponse } from "next/server";

// ─── Types ───────────────────────────────────────────────────────────────────

type FormType = "contact" | "feedback" | "quote" | "support" | "register" | "ticket" | "travelQuote";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

interface FeedbackData {
  name: string;
  rating: number;
  comments: string;
}

interface QuoteData {
  company: string;
  name: string;
  email: string;
  service: string;
  details: string;
}

interface SupportData {
  name: string;
  email: string;
  issue: string;
  description: string;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
}

interface EmailTemplate {
  subject: string;
  html: string;
}

type FormDataMap = {
  contact:      ContactData;
  feedback:     FeedbackData;
  quote:        QuoteData;
  support:      SupportData;
  register:     RegisterData;
  ticket:       TicketData;
  travelQuote:  TravelQuoteData;  // ← add this
};


interface TicketData {
  tripType: string;
  from: string;
  to: string;
  departure: string;
  return?: string;
  travelClass: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  nationality: string;
  dob: string;
  passport: string;
  issueDate: string;
  expiryDate: string;
  email: string;
  phone: string;
}

interface TravelQuoteData {
  country: string;
  airport: string;
  timeSpan: string;
  travelType: string;
  duration: string;
  adults: number;
  children: number;
  preferences: string;
  specialRequests?: string;
}


// ─── Templates ───────────────────────────────────────────────────────────────

const templates: { [K in FormType]: (data: FormDataMap[K]) => EmailTemplate } = {
  contact: (data) => ({
    subject: `New Contact Message from ${data.name}`,
    html: `
      <h2>Contact Form</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Message:</b> ${data.message}</p>
    `,
  }),

  ticket: (data) => ({
  subject: `✈️ Ticket Request: ${data.from} → ${data.to} (${data.tripType})`,
  html: `
    <h2>Air Ticket Request</h2>

    <h3>✈️ Flight Details</h3>
    <p><b>Trip Type:</b> ${data.tripType}</p>
    <p><b>From:</b> ${data.from}</p>
    <p><b>To:</b> ${data.to}</p>
    <p><b>Departure:</b> ${data.departure}</p>
    ${data.return ? `<p><b>Return:</b> ${data.return}</p>` : ""}
    <p><b>Class:</b> ${data.travelClass}</p>

    <h3>👤 Passenger</h3>
    <p><b>Name:</b> ${data.firstName} ${data.middleName ?? ""} ${data.lastName}</p>
    <p><b>Nationality:</b> ${data.nationality}</p>
    <p><b>Date of Birth:</b> ${data.dob}</p>

    <h3>🛂 Passport</h3>
    <p><b>Passport No:</b> ${data.passport}</p>
    <p><b>Issue Date:</b> ${data.issueDate}</p>
    <p><b>Expiry Date:</b> ${data.expiryDate}</p>

    <h3>📧 Contact</h3>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Phone:</b> ${data.phone}</p>
  `,
}),


travelQuote: (data) => ({
  subject: `🌍 Travel Quote Request — ${data.country} (${data.travelType})`,
  html: `
    <h2>Custom Travel Quote Request</h2>

    <h3>🌍 Destination</h3>
    <p><b>Country:</b> ${data.country}</p>
    <p><b>Airport:</b> ${data.airport}</p>
    <p><b>Time Span:</b> ${data.timeSpan || "Not specified"}</p>

    <h3>✈️ Trip Details</h3>
    <p><b>Travel Type:</b> ${data.travelType}</p>
    <p><b>Duration:</b> ${data.duration}</p>

    <h3>👥 Travelers</h3>
    <p><b>Adults:</b> ${data.adults}</p>
    <p><b>Children:</b> ${data.children}</p>

    <h3>⭐ Preferences</h3>
    <p>${data.preferences || "None selected"}</p>

    <h3>📝 Special Requests</h3>
    <p>${data.specialRequests || "None"}</p>
  `,
}),

  feedback: (data) => ({
    subject: `Feedback Received - Rating: ${data.rating}/5`,
    html: `
      <h2>Feedback Form</h2>
      <p><b>From:</b> ${data.name}</p>
      <p><b>Rating:</b> ${data.rating}/5</p>
      <p><b>Comments:</b> ${data.comments}</p>
    `,
  }),

  quote: (data) => ({
    subject: `Quote Request from ${data.company}`,
    html: `
      <h2>Quote Request</h2>
      <p><b>Company:</b> ${data.company}</p>
      <p><b>Contact:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Service:</b> ${data.service}</p>
      <p><b>Details:</b> ${data.details}</p>
    `,
  }),

  support: (data) => ({
    subject: `Support Ticket: ${data.issue}`,
    html: `
      <h2>Support Request</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Issue:</b> ${data.issue}</p>
      <p><b>Description:</b> ${data.description}</p>
    `,
  }),

  register: (data) => ({
    subject: `New Registration: ${data.name}`,
    html: `
      <h2>Registration Form</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
    `,
  }),
};

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json() as { formType: FormType } & Record<string, unknown>;
    const { formType, ...data } = body;

    if (!formType || !(formType in templates)) {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    const templateFn = templates[formType] as unknown as (data: Record<string, unknown>) => EmailTemplate;
    const { subject, html } = templateFn(data);

    await transporter.sendMail({
      from: `"Hassan Travels" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Email sending failed:", errorMessage);
    return NextResponse.json(
      { error: "Failed to send email", details: errorMessage },
      { status: 500 }
    );
  }
}