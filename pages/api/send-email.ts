import { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/helpers/classes/mail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address, emailContent } = JSON.parse(req.body);

  if (req.method != "POST") {
    res.status(405).send({
      message: "Method not allowed, please use POST.",
    });
  }

  // * Verify API key is set
  if (!process.env.SENDGRID_KEY) {
    res.status(500).send({
      message: "Sendgrid API key is not set. Contact your administrator.",
    });
    return;
  }

  // * Verify destination address is set
  if (!address) {
    res.status(400).send({
      message: "Missing destination address.",
    });
    return;
  }

  // * Verify email content isn't empty
  if (!emailContent) {
    res.status(400).send({
      message: "Missing email content (it cannot be empty).",
    });
    return;
  }

  const message: MailDataRequired = {
    personalizations: [
      {
        to: [
          {
            email: address,
          },
        ],
      },
    ],
    from: {
      email: "daniel@medina.com",
      name: "VOLTEC Robotics 6647",
    },
    replyTo: {
      email: address,
    },
    subject: `VOLTEC Inquiry from ${address}`,
    templateId: "d-ca1cb5ff686b4a5291dac93ff62d64ae",
    dynamicTemplateData: {
      email: address,
      message_content: emailContent,
    },
  };

  try {
    mail.setApiKey(process.env.SENDGRID_KEY);
    const response = await mail.send(message);

    res.status(200).send({
      message: response,
    });
  } catch (error) {
    res.status(500).send({
      error: error,
    });
    return;
  }
}
