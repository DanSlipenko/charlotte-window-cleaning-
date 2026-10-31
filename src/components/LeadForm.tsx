"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useActionState, useId, useRef, type FormEvent } from "react";
import type { FormKind } from "@/lib/content";
import { formatPhoneAsTyped, sendLead, type LeadState } from "@/lib/leads";

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
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);
  const errorId = useId();
  const [state, submit, pending] = useActionState(async (_prev: LeadState, data: FormData) => {
    const result = await sendLead(data);
    if (!result.error) router.push("/thank-you");
    else if (result.field) form.current?.querySelector<HTMLElement>(`[name="${result.field}"]`)?.focus();
    return result;
  }, {});

  /** Marks the input the error message is about. */
  const check = (name: string) =>
    state.field === name ? { "aria-invalid": true, "aria-describedby": errorId } : {};

  // Submitting through onSubmit (rather than `action`) keeps what the visitor
  // typed when sending fails or a field needs fixing.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    startTransition(() => submit(data));
  };

  return (
    // noValidate: sendLead checks every field, so all messages look the same.
    <form ref={form} className="lead-form" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="kind" value={kind} />
      <input className="lead-form__trap" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="lead-form__row">
        <Field
          label="Full name"
          name="name"
          placeholder="Full Name*"
          required
          maxLength={120}
          autoComplete="name"
          {...check("name")}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Phone*"
          required
          autoComplete="tel"
          onChange={(event) => {
            const formatted = formatPhoneAsTyped(event.currentTarget.value);
            if (formatted !== event.currentTarget.value) event.currentTarget.value = formatted;
          }}
          {...check("phone")}
        />
      </div>
      {kind === "hiring" ? (
        <>
          <div className="lead-form__row">
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="Your Email*"
              required
              maxLength={255}
              autoComplete="email"
              {...check("email")}
            />
            <Field label="Position you're applying for" name="position" placeholder="Desired Position" maxLength={200} />
          </div>
          <TextArea label="Experience" name="experience" placeholder="Your Experience" rows={3} maxLength={1500} />
          <TextArea label="Anything else?" name="message" placeholder="Anything else?" rows={3} maxLength={3000} />
        </>
      ) : (
        <>
          <div className="lead-form__row">
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="Your Email*"
              required
              maxLength={255}
              autoComplete="email"
              {...check("email")}
            />
            <Field
              label="Address"
              name="address"
              placeholder="Your Full Address*"
              required
              maxLength={200}
              autoComplete="street-address"
              {...check("address")}
            />
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
        <input type="checkbox" name="consent" required {...check("consent")} />
        <span>
          I agree to <Link href="/terms-conditions">terms &amp; conditions</Link>. By providing my phone number, I
          agree to receive text messages from the company.
        </span>
      </label>
      <button className="btn btn--block" type="submit" disabled={pending}>
        {kind === "hiring" ? "Submit Application" : "Get Free Quote"}
      </button>
      {state.error && (
        <p id={errorId} className="form-error" role="alert">
          {state.error}
        </p>
      )}
    </form>
  );
}
