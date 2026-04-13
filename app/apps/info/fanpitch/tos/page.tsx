import type { Metadata } from "next";

import { LegalList, LegalPage, LegalSection } from "@/components/apps/legal";

export const metadata: Metadata = {
  title: "FanPitch Terms of Service",
  description: "FanPitch terms of service page for App Store and Google Play compliance.",
};

export default function TermsOfService() {
  return (
    <LegalPage
      eyebrow="FanPitch"
      title="Terms of Service"
      updatedAt="Effective date: March 30, 2026 · Last updated: March 30, 2026"
      intro={
        <>
          <p>
            These Terms of Service govern your use of FanPitch, a football prediction and social app operated and built by ittalab. By creating an account or using the app, you agree to these terms.
          </p>
          <p>We have written them in plain language. Please read them and reach out with questions.</p>
        </>
      }
      backHref="/apps/info/fanpitch"
      backLabel="Back to FanPitch"
      secondaryHref="/apps/info/fanpitch/privacypolicy"
      secondaryLabel="Read Privacy Policy"
    >
      <LegalSection title="1. Who Can Use FanPitch">
        <p>
          You must be at least <strong>13 years old</strong> to use FanPitch. If you are between 13 and 18, you confirm that a parent or guardian has reviewed and agreed to these terms on your behalf.
        </p>
        <p>By using FanPitch, you confirm that the information you provide, including email and username, is accurate and belongs to you.</p>
      </LegalSection>

      <LegalSection title="2. What FanPitch Is">
        <p>FanPitch is a free football prediction and social app. It lets you:</p>
        <LegalList>
          <li>Predict scores for upcoming football matches and earn points.</li>
          <li>Compete in private leagues with friends, colleagues, or anyone you invite.</li>
          <li>Post hot takes and comment on others in the Arena social feed.</li>
          <li>Track your prediction history and accuracy over time.</li>
        </LegalList>
        <div className="space-y-3 text-sm leading-8 text-cream/80 sm:text-base">
          <p>
            FanPitch is purely for entertainment. There is no gambling, no wagering, and no exchange of money. Points have zero monetary value and cannot be traded, sold, or converted to cash or rewards.
          </p>
          <p>
            FanPitch is not a gambling or betting platform. We are not licensed by any gambling authority. Predictions are for fun, bragging, and social competition only.
          </p>
        </div>
      </LegalSection>

      <LegalSection title="3. Your Account">
        <p>You are responsible for keeping your account credentials secure. Do not share your password. If you believe your account has been compromised, change your password immediately and contact us.</p>
        <p>You may only have one account per person. Creating multiple accounts to gain an unfair advantage in leagues is not allowed and may result in account suspension or a permanent ban.</p>
        <p>You can delete your account at any time from Settings, then Account, then Delete Account. Deletion is permanent and removes your profile, predictions, hot takes, and personal data within 30 days. Your anonymized prediction history may remain in league records for historical accuracy.</p>
        <p>We reserve the right to suspend or delete accounts that violate these terms, engage in fraud, or compromise the integrity of leagues.</p>
      </LegalSection>

      <LegalSection title="4. Community Rules">
        <p>FanPitch is built around passion, competition, and good-natured banter. Bold predictions and friendly rivalry are encouraged. Harassment, abuse, and hate speech are not.</p>
        <LegalList>
          <li>Allowed - confident predictions: back your team strongly, call upsets, and disagree with other fans.</li>
          <li>Allowed - league competition: compete hard in your leagues and enjoy the rivalry.</li>
          <li>Allowed - hot takes: post strong opinions in the Arena and challenge other users&apos; analysis.</li>
          <li>Not allowed - harassment: no threatening, bullying, or targeted abuse of other users. No doxing.</li>
          <li>Not allowed - hate speech: no content based on race, religion, gender, nationality, sexuality, or disability.</li>
          <li>Not allowed - spam or manipulation: no automated tools, fake accounts, or attempts to rig rankings or voting.</li>
          <li>Not allowed - impersonation: do not pretend to be someone else, a real person, club, or organization.</li>
          <li>Not allowed - illegal activity: no content that breaks laws or violates others&apos; intellectual property rights.</li>
          <li>Not allowed - explicit content: no sexually explicit, graphic violence, or otherwise adult content.</li>
        </LegalList>
        <p>We may remove content or suspend accounts without warning if violations are serious. Repeat offenders may be permanently banned. We decide enforcement in our sole discretion.</p>
      </LegalSection>

      <LegalSection title="5. Your Content and User-Generated Material">
        <p>You own the hot takes, comments, predictions, and other content you create in FanPitch. By posting content, you grant ittalab a non-exclusive, royalty-free, worldwide licence to store, display, and use that content within the app and in related services like promotional materials or analytics.</p>
        <p>You are entirely responsible for everything you post. You confirm that you have the right to share it and that it does not violate anyone&apos;s rights or any laws.</p>
        <p>We may remove any content that violates these terms or that users report as abusive. We do not pre-screen content but reserve the right to enforce these rules at our discretion. We may also publicly share information about violations to maintain community standards.</p>
        <p>
          If you believe content violates your rights, contact us at{" "}
          <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="mailto:support@ittalab.com">
            support@ittalab.com
          </a>{" "}
          with the details and we will investigate.
        </p>
      </LegalSection>

      <LegalSection title="6. Intellectual Property">
        <p>The FanPitch app, name, logo, and all design elements are owned by ittalab. You may not copy, reproduce, or distribute any part of FanPitch without our written permission.</p>
        <p>Football club names, badges, and trademarks belong to their respective owners. Their use within FanPitch is for identification purposes only.</p>
      </LegalSection>

      <LegalSection title="7. Availability and Service Changes">
        <p>We aim to keep FanPitch running reliably. However, we do not guarantee uninterrupted access. FanPitch may be unavailable due to maintenance, infrastructure issues, provider outages, or events beyond our control.</p>
        <p>We may update, modify, discontinue, or restrict features at any time with or without notice. Major changes will be announced in-app or via email where possible. Your use of FanPitch despite feature changes indicates acceptance.</p>
        <p>We are not liable for any financial loss, competitive disadvantage, or missed predictions due to service unavailability or changes.</p>
      </LegalSection>

      <LegalSection title="8. Disclaimer of Warranties">
        <LegalList>
          <li>FanPitch is provided as is without warranties of any kind, express or implied.</li>
          <li>We do not warrant that the app will be error-free, uninterrupted, or meet your specific requirements.</li>
          <li>Match data, scores, and results displayed in FanPitch may be delayed, typically by around 3 minutes, and can occasionally contain errors.</li>
          <li>These details are for entertainment purposes only and should not be relied upon for any purpose outside the app.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="9. Limitation of Liability">
        <p>To the maximum extent permitted by law, ittalab is not liable for any indirect, incidental, special, consequential, or punitive damages. This includes loss of profits, data loss, or business interruption, even if we have been told such damages might occur.</p>
        <p>Our total liability to you for any claim shall not exceed the amount you have paid us in the 12 months before the claim, which for FanPitch is zero because the app is free.</p>
        <p>Some jurisdictions do not allow limitation of liability, so these limits may not apply to you.</p>
      </LegalSection>

      <LegalSection title="10. Changes to These Terms">
        <p>We may update these Terms of Service at any time. Material changes will be announced via in-app notification or email at least 14 days before they take effect, giving you time to review and object.</p>
        <p>If you do not agree to updated terms, you should stop using FanPitch and delete your account. Continuing to use the app after the effective date means you accept the new terms.</p>
      </LegalSection>

      <LegalSection title="11. Governing Law and Dispute Resolution">
        <p>
          These Terms of Service are governed by the laws of the State of <strong>Delaware</strong>, USA, without regard to its conflicts of law principles. You agree that any legal action or proceeding will be exclusively within the state and federal courts of Delaware.
        </p>
        <p>Before pursuing legal action, you agree to attempt to resolve disputes informally by contacting us at <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="mailto:support@ittalab.com">support@ittalab.com</a>. We will attempt to resolve your concern within 30 days.</p>
        <p>By using FanPitch, you agree that any claims must be brought within one year of the date the cause of action arises, or it will be forever barred.</p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms? We are happy to clarify anything. If you have a concern, we want to help resolve it at{" "}
          <a className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary-hover" href="mailto:support@ittalab.com">
            support@ittalab.com
          </a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
