"use client";

import Link from "next/link";
import { startTransition, useActionState, type FormEvent } from "react";
import { submitLead } from "@/app/actions";
import type { FormKind } from "@/lib/content";

/** A text input whose label is read by screen readers; sighted visitors see the placeholder. */
function Field({ label, ...input }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label>
      <span className="sr-only">{label}</span>
      <input {...input} />
    </label>
  );
}

function TextArea({ label, ...input }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label>
      <span className="sr-only">{label}</span>
      <textarea {...input} />
    </label>
  );
}

export function LeadForm({ kind = "quote" }: { kind?: FormKind }) {
  const [state, submit, pending] = useActionState(submitLead, {});

  // Submitting through onSubmit (rather than `action`) keeps what the visitor
  // typed when the server sends back a validation error.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    startTransition(() => submit(data));
  };

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <input type="hidden" name="kind" value={kind} />
      <input className="lead-form__trap" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="lead-form__row">
        <Field label="Full name" name="name" placeholder="Full Name*" required maxLength={120} autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" placeholder="Phone*" required maxLength={40} autoComplete="tel" />
      </div>
      {kind === "hiring" ? (
        <>
          <div className="lead-form__row">
            <Field label="Email" name="email" type="email" placeholder="Your Email" maxLength={255} autoComplete="email" />
            <Field label="Position you're applying for" name="position" placeholder="Desired Position" maxLength={200} />
          </div>
          <TextArea label="Experience" name="experience" placeholder="Your Experience" rows={3} maxLength={1500} />
          <TextArea label="Anything else?" name="message" placeholder="Anything else?" rows={3} maxLength={3000} />
        </>
      ) : (
        <>
          <div className="lead-form__row">
            <Field label="Email" name="email" type="email" placeholder="Your Email" maxLength={255} autoComplete="email" />
            <Field label="Address" name="address" placeholder="Your Full Address" maxLength={200} autoComplete="street-address" />
          </div>
          <TextArea
            label="How can we help?"
            name="message"
            placeholder="What can we help you with? (Brief description of the job)"
            rows={4}
            maxLength={3000}
          />
        </>
      )}
      <label className="lead-form__consent">
        <input type="checkbox" name="consent" required />
        <span>
          I agree to <Link href="/terms-conditions">terms &amp; conditions</Link>. By providing my phone number, I
          agree to receive text messages from the company.
        </span>
      </label>
      <button className="btn btn--block" type="submit" disabled={pending}>
        {kind === "hiring" ? "Submit Application" : "Get Free Quote"}
      </button>
      {state.error && (
        <p className="form-error" role="alert">
          {state.error}
        </p>
      )}
    </form>
  );
}
