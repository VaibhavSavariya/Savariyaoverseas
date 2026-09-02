import { useMemo, useState } from 'react';
import Icon from './Icon';
import { company, inquiryTypes } from '../lib/content';

function Field({ label, name, required, children, hint, error }) {
  return (
    <div>
      <label htmlFor={name} className="field-label">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {children}
      {error ? (
        <p data-testid={`error-${name}`} className="mt-1.5 text-[12.5px] font-medium text-red-600">
          {error}
        </p>
      ) : (
        hint && <p className="mt-1.5 text-[12.5px] text-slate-400">{hint}</p>
      )}
    </div>
  );
}

const initial = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: '',
  inquiryType: '',
  productService: '',
  quantity: '',
  message: '',
  human: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState('');

  const [seed, setSeed] = useState(0);
  const spamAnswer = useMemo(() => {
    const a = 3 + Math.floor(Math.random() * 5);
    const b = 2 + Math.floor(Math.random() * 5);
    return { a, b, sum: a + b };
  }, [seed]);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Please enter a valid business email address.';
    if (!form.inquiryType) e.inquiryType = 'Please select an inquiry type.';
    if (!form.message.trim()) e.message = 'Please describe your requirement.';
    if (Number(form.human) !== spamAnswer.sum) e.human = 'Please answer the verification question.';
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const lines = [
      '*New Business Inquiry — Savariya Overseas*',
      '',
      `*Full Name:* ${form.fullName}`,
      `*Company Name:* ${form.companyName || '-'}`,
      `*Business Email:* ${form.email}`,
      `*Phone Number:* ${form.phone || '-'}`,
      `*Country:* ${form.country || '-'}`,
      `*Inquiry Type:* ${form.inquiryType}`,
      `*Product / Service Required:* ${form.productService || '-'}`,
      `*Quantity / Project Details:* ${form.quantity || '-'}`,
      '',
      `*Message:*`,
      form.message,
    ].join('\n');

    const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(lines)}`;
    setWaUrl(url);
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    setSent(true);
    requestAnimationFrame(() =>
      document
        .getElementById('inquiry-form-top')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
  };

  if (sent) {
    return (
      <div
        id="inquiry-form-top"
        data-testid="contact-form-success"
        className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-9 shadow-card"
      >
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold-400">
          <Icon name="CheckCircle2" className="h-6 w-6" />
        </span>
        <h3 className="mt-6 h3">Thank you — your inquiry is ready on WhatsApp</h3>
        <p className="mt-4 body">
          We have opened WhatsApp in a new tab with your inquiry details pre-filled for{' '}
          <span className="font-semibold text-navy">{company.phone}</span>. Please press send so it
          reaches our trade desk.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-form-whatsapp-link"
            className="btn-primary"
          >
            Open WhatsApp again
            <Icon name="ArrowUpRight" className="h-4 w-4" />
          </a>
          <a href={company.emailHref} data-testid="contact-form-email-fallback" className="btn-outline">
            Email us instead
          </a>
        </div>
        <p className="mt-5 text-[13px] text-slate-500">
          Prefer to talk? Call{' '}
          <a href={company.phoneHref} className="font-semibold text-royal underline">
            {company.phone}
          </a>{' '}
          or write to{' '}
          <a href={company.emailHref} className="font-semibold text-royal underline">
            {company.email}
          </a>
          .
        </p>
        <button
          type="button"
          data-testid="contact-form-reset-btn"
          onClick={() => {
            setForm(initial);
            setSeed((s) => s + 1);
            setSent(false);
          }}
          className="btn-outline mt-8"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      data-testid="contact-form"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-9"
    >
      <h3 className="h3">Send us your requirement</h3>
      <p className="mt-2 text-[14px] text-slate-500">
        Share a few details and our team will respond with the next steps.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" error={errors.fullName} required>
          <input
            id="fullName"
            data-testid="input-full-name"
            className="field"
            value={form.fullName}
            onChange={set('fullName')}
            placeholder="Your name"
            autoComplete="name"
          />
        </Field>
        <Field label="Company Name" name="companyName" error={errors.companyName}>
          <input
            id="companyName"
            data-testid="input-company-name"
            className="field"
            value={form.companyName}
            onChange={set('companyName')}
            placeholder="Company / organisation"
            autoComplete="organization"
          />
        </Field>
        <Field label="Business Email" name="email" error={errors.email} required>
          <input
            id="email"
            type="email"
            data-testid="input-email"
            className="field"
            value={form.email}
            onChange={set('email')}
            placeholder="name@company.com"
            autoComplete="email"
          />
        </Field>
        <Field label="Phone Number" name="phone" error={errors.phone}>
          <input
            id="phone"
            data-testid="input-phone"
            className="field"
            value={form.phone}
            onChange={set('phone')}
            placeholder="With country code"
            autoComplete="tel"
          />
        </Field>
        <Field label="Country" name="country" error={errors.country}>
          <input
            id="country"
            data-testid="input-country"
            className="field"
            value={form.country}
            onChange={set('country')}
            placeholder="Country / region"
            autoComplete="country-name"
          />
        </Field>
        <Field label="Inquiry Type" name="inquiryType" error={errors.inquiryType} required>
          <select
            id="inquiryType"
            data-testid="select-inquiry-type"
            className="field"
            value={form.inquiryType}
            onChange={set('inquiryType')}
          >
            <option value="">Select an option</option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Product / Service Required" name="productService" error={errors.productService}>
          <input
            id="productService"
            data-testid="input-product-service"
            className="field"
            value={form.productService}
            onChange={set('productService')}
            placeholder="e.g. CNC machined components"
          />
        </Field>
        <Field label="Quantity / Project Details" name="quantity" error={errors.quantity}>
          <input
            id="quantity"
            data-testid="input-quantity"
            className="field"
            value={form.quantity}
            onChange={set('quantity')}
            placeholder="e.g. 2 x 40ft containers per month"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message" name="message" error={errors.message} required>
            <textarea
              id="message"
              rows={5}
              data-testid="input-message"
              className="field resize-y"
              value={form.message}
              onChange={set('message')}
              placeholder="Specifications, destination country, timelines and any other details."
            />
          </Field>
        </div>
        <Field
          label={`Verification: ${spamAnswer.a} + ${spamAnswer.b} = ?`}
          name="human"
          error={errors.human}
          required
          hint="A simple check to prevent automated spam."
        >
          <input
            id="human"
            inputMode="numeric"
            data-testid="input-human-check"
            className="field"
            value={form.human}
            onChange={set('human')}
            placeholder="Enter the sum"
          />
        </Field>
      </div>

      <button type="submit" data-testid="submit-inquiry-btn" className="btn-primary mt-8 w-full sm:w-auto">
        Submit Inquiry
        <Icon name="Send" className="h-4 w-4" />
      </button>
      <p className="mt-4 text-[12.5px] leading-relaxed text-slate-500">
        Submitting opens WhatsApp with your inquiry details pre-filled for {company.phone}.
      </p>
    </form>
  );
}
