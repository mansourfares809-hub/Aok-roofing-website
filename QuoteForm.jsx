import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const SERVICE_OPTIONS = [
  { value: 'replacement', label: 'Roof Replacement' },
  { value: 'repair', label: 'Roof Repair or Leak' },
  { value: 'eavestrough', label: 'Eavestrough, Soffit or Fascia' },
  { value: 'insulation', label: 'Attic Insulation / Ventilation' },
  { value: 'windows', label: 'Windows & Doors' },
  { value: 'other', label: 'Something Else' },
];

const INITIAL = { name: '', phone: '', email: '', service: '', message: '' };

const QuoteForm = () => {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      setError('Please enter your name, phone number, and service needed.');
      setStatus('error');
      return;
    }

    const serviceLabel = SERVICE_OPTIONS.find((x) => x.value === form.service)?.label || form.service;
    const subject = encodeURIComponent(`Free Quote Request - ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nEmail: ${form.email.trim() || 'Not provided'}\nService: ${serviceLabel}\n\nMessage:\n${form.message.trim() || 'No additional message.'}`
    );

    window.location.href = `mailto:jeff@aokroofinginc.com?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm(INITIAL);
  };

  if (status === 'success') {
    return (
      <div className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-accent" />
        <h3 className="mt-4 font-display text-3xl font-semibold uppercase text-primary">Request Ready</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">Your email app should open with your quote request. If it doesn't, call us directly.</p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>Send Another Request</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2"><Label htmlFor="quote-name">Full Name *</Label><Input id="quote-name" required value={form.name} onChange={update('name')} placeholder="Your name" autoComplete="name" /></div>
        <div className="grid gap-2"><Label htmlFor="quote-phone">Phone *</Label><Input id="quote-phone" required type="tel" value={form.phone} onChange={update('phone')} placeholder="(519) 555-0123" autoComplete="tel" /></div>
        <div className="grid gap-2"><Label htmlFor="quote-email">Email</Label><Input id="quote-email" type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" autoComplete="email" /></div>
        <div className="grid gap-2">
          <Label htmlFor="quote-service">Service Needed *</Label>
          <select id="quote-service" required value={form.service} onChange={update('service')} className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring">
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
        <div className="grid gap-2 sm:col-span-2"><Label htmlFor="quote-message">Tell Us About Your Roof</Label><Textarea id="quote-message" rows={4} value={form.message} onChange={update('message')} placeholder="Approximate age of the roof, any leaks or damage, property type..." /></div>
      </div>
      {status === 'error' && <p className="mt-4 text-sm font-medium text-destructive">{error}</p>}
      <Button type="submit" className="mt-6 h-12 w-full bg-accent text-base font-bold text-accent-foreground hover:brightness-110 active:scale-[0.99]">
        <Send className="mr-2 h-5 w-5" /> Request My Free Quote
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">No obligation. We respond within one business day.</p>
    </form>
  );
};

export default QuoteForm;