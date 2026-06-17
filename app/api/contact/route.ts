import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Chivez FOKAM BEKO",
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: process.env.CONTACT_RECEIVER_EMAIL,
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `[Portfolio Chivez] ${safeSubject}`,
        htmlContent: `
<div style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#1e293b;">
  <div style="max-width:700px;margin:0 auto;padding:32px 16px;">

    <div style="background:linear-gradient(135deg,#0f172a,#1e3a8a);border-radius:28px 28px 0 0;padding:34px;color:#ffffff;">
      <p style="margin:0 0 10px;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#93c5fd;font-weight:700;">
        Portfolio Comptabilité · Finance · Audit
      </p>

      <h1 style="margin:0;font-size:28px;line-height:1.25;">
        Nouveau message reçu
      </h1>

      <p style="margin:14px 0 0;color:rgba(255,255,255,.78);font-size:15px;line-height:1.7;">
        Une personne vient de prendre contact depuis le portfolio professionnel de
        <strong>Chivez FOKAM BEKO</strong>, étudiante en BUT GEA, parcours Gestion Comptable,
        Fiscale et Financière, à la recherche d’une alternance en Comptabilité, Contrôle et Audit.
      </p>
    </div>

    <div style="background:#ffffff;padding:32px;border-radius:0 0 28px 28px;box-shadow:0 20px 55px rgba(15,23,42,.12);">

      <div style="margin-bottom:24px;">
        <p style="margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#2563eb;font-weight:700;">
          Expéditeur
        </p>

        <h2 style="margin:0;color:#0f172a;font-size:22px;">
          ${safeName}
        </h2>

        <p style="margin:8px 0 0;color:#64748b;font-size:15px;">
          ${safeEmail}
        </p>
      </div>

      <div style="background:#eff6ff;border-radius:20px;padding:22px;margin-bottom:22px;border:1px solid #dbeafe;">
        <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#2563eb;font-weight:700;">
          Sujet
        </p>

        <p style="margin:0;color:#1e3a8a;font-size:17px;font-weight:700;">
          ${safeSubject}
        </p>
      </div>

      <div style="border:1px solid #e2e8f0;border-radius:20px;padding:22px;">
        <p style="margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#2563eb;font-weight:700;">
          Message
        </p>

        <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;white-space:pre-line;">
          ${safeMessage}
        </p>
      </div>

      <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e2e8f0;">
        <p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.7;">
          Ce message a été envoyé depuis le formulaire de contact du portfolio de Chivez FOKAM BEKO.
          Répondez directement à cet email pour contacter l’expéditeur.
        </p>
      </div>

    </div>
  </div>
</div>
`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Erreur lors de l’envoi du message." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Message envoyé avec succès.",
    });
  } catch {
    return NextResponse.json(
      { message: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}