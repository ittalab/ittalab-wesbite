import type { Metadata } from "next";

import { LegalList, LegalPage, LegalSection } from "@/components/apps/legal";

const dataCollectionRows = [
  { data: "Email address", reason: "Account creation and login", required: "Yes" },
  { data: "Username and display name", reason: "Identifying you to other players in leagues", required: "Yes" },
  { data: "Profile picture", reason: "Displayed on your profile and in leaderboards", required: "Optional" },
  { data: "Favourite football club", reason: "Personalising your profile and app experience", required: "Optional" },
  { data: "Bio", reason: "Shown on public profile", required: "Optional" },
  { data: "Match predictions", reason: "Core feature - calculating points and league rankings", required: "Yes" },
  { data: "Hot takes and comments", reason: "Social feed features", required: "Optional" },
  { data: "Push notification token", reason: "Sending match reminders and result notifications", required: "Optional" },
  { data: "Notification preferences", reason: "Respecting your notification settings", required: "Optional" },
] as const;

export const metadata: Metadata = {
  title: "FanPitch Privacy Policy",
  description: "FanPitch privacy policy page for App Store and Google Play compliance.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="FanPitch"
      title="Privacy Policy"
      updatedAt="Effective date: March 30, 2026 · Last updated: March 30, 2026"
      intro={
        <>
          <p>
            FanPitch is a football prediction and social app operated and built by ittalab. We are committed to protecting your privacy. This policy explains what personal data we collect, why we collect it, and how we use it.
          </p>
          <p>
            Bottom line: we do not sell your data, we do not show you ads, and we do not use your information for anything other than running FanPitch.
          </p>
        </>
      }
      backHref="/apps/info/fanpitch"
      backLabel="Back to FanPitch"
      secondaryHref="/apps/info/fanpitch/tos"
      secondaryLabel="Read Terms of Service"
    >
      <LegalSection title="1. Who We Are">
        <p>
          FanPitch is operated and built by <strong>ittalab</strong>. If you have any questions about this policy or how we handle your data, you can contact us at{" "}
          <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="mailto:support@ittalab.com">
            support@ittalab.com
          </a>.
        </p>
        <p>This policy applies to the FanPitch mobile application available on iOS and Android.</p>
      </LegalSection>

      <LegalSection title="2. Data We Collect">
        <p>We collect only what we need to run the app. Here is exactly what we store:</p>
        <div className="divide-y divide-border/70">
          {dataCollectionRows.map((row) => (
            <div
              key={row.data}
              className="grid gap-2 py-4 sm:grid-cols-[220px_minmax(0,1fr)_auto] sm:gap-6 sm:py-5"
            >
              <div className="font-medium text-cream">{row.data}</div>
              <div className="text-cream/80">{row.reason}</div>
              <div className="text-muted sm:text-right">{row.required}</div>
            </div>
          ))}
        </div>
        <p>
          We do <strong>not</strong> collect location data, contacts, browsing history, or any data not listed above.
        </p>
      </LegalSection>

      <LegalSection title="3. How We Use Your Data">
        <p>We use your data solely to provide and improve FanPitch:</p>
        <LegalList>
          <li>Create and manage your account.</li>
          <li>Calculate your prediction accuracy and league points.</li>
          <li>Display your profile, predictions, and rankings to you and your league mates.</li>
          <li>Show your hot takes and comments in the Arena.</li>
          <li>Send you push notifications about upcoming matches and results.</li>
          <li>Improve app performance, stability, and features.</li>
          <li>Diagnose and fix bugs.</li>
          <li>Enforce our Terms of Service and detect violations.</li>
        </LegalList>
        <p>
          We do <strong>not</strong> use your data for advertising, behavioural profiling, selling to third parties, or any commercial purpose beyond operating FanPitch.
        </p>
      </LegalSection>

      <LegalSection title="4. Third-Party Services">
        <p>FanPitch uses the following trusted third-party services. Each has its own privacy policy linked below.</p>
        <LegalList>
          <li>
            Supabase (Database and Authentication):{" "}
            <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </li>
          <li>
            Expo (Push Notifications):{" "}
            <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </li>
          <li>
            Google (Sign in with Google):{" "}
            <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </li>
          <li>
            API-Football (Club Logos CDN):{" "}
            <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="https://www.api-football.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="5. Data Storage and Security">
        <p>
          Your data is encrypted in transit (HTTPS) and at rest. We use Supabase&apos;s infrastructure with automatic backups and row-level security policies. These policies ensure you can only access your own data, and league admins can only see their league&apos;s information.
        </p>
        <p>
          Profile pictures are stored with access controls in Supabase Storage. Push notification tokens are stored only in your account and never shared with other users or services. Passwords are hashed and salted by Supabase&apos;s authentication service.
        </p>
        <p>
          We retain your data while your account is active. If you delete your account, we remove all personal data within 30 days. Match predictions and league histories tied to your account remain anonymized in archives for historical accuracy.
        </p>
      </LegalSection>

      <LegalSection title="6. Age Requirements and Parental Consent">
        <p>FanPitch is not targeted at children under 13. If you are under 13, please do not use FanPitch. We do not knowingly collect data from children under 13.</p>
        <p>
          If you are between 13 and 18, your parent or guardian must have read and agreed to these policies and our Terms of Service on your behalf. If you are a parent or guardian allowing a young person to use FanPitch, you are responsible for their use of the app.
        </p>
        <p>
          If you believe we have collected data from a child under 13, please contact us at{" "}
          <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="mailto:support@ittalab.com">
            support@ittalab.com
          </a>{" "}
          and we will delete that data immediately.
        </p>
      </LegalSection>

      <LegalSection
        title="7. Your Rights and Account Deletion"
        id="your-rights-and-account-deletion"
      >
        <LegalList>
          <li>Access the personal data we hold about you.</li>
          <li>Correct inaccurate data.</li>
          <li>Delete your account and all associated data.</li>
          <li>Withdraw consent for push notifications.</li>
          <li>Export your data.</li>
        </LegalList>
        <p>
          To delete your account: open FanPitch, go to the Me tab, open Settings, then choose Delete Account. This permanently removes your profile, predictions, hot takes, comments, and all associated data within 30 days.
        </p>
        <p>
          To exercise any other right, email us at{" "}
          <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="mailto:support@ittalab.com">
            support@ittalab.com
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="8. US Privacy Laws and Your Rights">
        <p>
          <strong>California Residents (CCPA):</strong> You have the right to know what personal information we collect, delete your data, and opt out of any sale of your information. We do not sell personal information. To submit a request, email us at{" "}
          <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="mailto:support@ittalab.com">
            support@ittalab.com
          </a>.
        </p>
        <p>
          <strong>Children (COPPA):</strong> FanPitch is not targeted at children under 13 and we comply with the Children&apos;s Online Privacy Protection Act. If we learn we&apos;ve collected data from a child under 13, we delete it immediately.
        </p>
        <p>
          <strong>Other Residents:</strong> Various US states have privacy laws including Virginia, Colorado, Connecticut, and Utah. If you live in one of these states, you may have similar rights to access, delete, and understand your data. Contact us to exercise these rights.
        </p>
        <p>
          <strong>International Users (GDPR):</strong> If you are in the EU or EEA, GDPR protections apply to your data. You have all rights under GDPR including access, correction, and deletion. We respect these rights globally.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will update the Last updated date at the top and notify you of material changes via push notification or in-app message.
        </p>
        <p>Your continued use of FanPitch after changes take effect means you accept the updated policy.</p>
      </LegalSection>

      <LegalSection title="10. Governing Law">
        <p>
          This Privacy Policy is governed by the laws of the State of <strong>Delaware</strong>, USA. We are committed to complying with applicable privacy laws including COPPA (US), CCPA/CPRA (California), and GDPR (EU).
        </p>
        <p>
          If you have any questions or concerns, contact us at{" "}
          <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="mailto:support@ittalab.com">
            support@ittalab.com
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about your privacy? We take privacy seriously. Reach out and we will respond within 48 hours at{" "}
          <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="mailto:support@ittalab.com">
            support@ittalab.com
          </a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}