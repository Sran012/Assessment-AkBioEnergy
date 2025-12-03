import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { toast } from "sonner" 
import { cn } from "@/lib/utils"

export function Contact({
  className,
  title = "Get in touch",
  description = "Fill out the form and I'll get back to you.",
}: {
  className?: string
  title?: string
  description?: string
  onSubmitSuccess?: () => void
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  function handleChange(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((err) => ({ ...err, [name]: "" }))
  }

  function validate() {
    const nextErrors = {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
    
    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = "Please enter your full name."
    }

    const email = values.email.trim()
    if (!email) {
      nextErrors.email = "Please enter your email."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email."
    }

    if(!values.phone.trim() || values.phone.trim().length < 10) {
      nextErrors.phone = "Please enter a valid phone number."
    }

    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message = "Please enter at least 10 characters."
    }

    setErrors(nextErrors)
    return !nextErrors.name && !nextErrors.email && !nextErrors.phone && !nextErrors.message
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return

    try {
      setIsSubmitting(true)
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', values)
      
      toast.success("Message sent", {
        description: "Thanks! We'll reply to you soon.",
      })

      setValues({ name: "", email: "", phone: "", message: "" })
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again in a moment.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={cn("w-full", className)} aria-labelledby="contact-title">
      <div className="mx-auto max-w-xl">
        <header className="mb-6">
          <h2 id="contact-title" className="text-pretty text-2xl font-semibold">
            {title}
          </h2>
          {description && <p className="mt-1 text-muted-foreground">{description}</p>}
        </header>

        <form onSubmit={handleSubmit} className="rounded-lg border bg-card p-4 md:p-6" noValidate>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">
                Name <span className="sr-only">(required)</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={values.name}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">
                Email <span className="sr-only">(required)</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">
                Phone <span className="sr-only">(required)</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="9711753499"
                value={values.phone}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm text-destructive">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">
                Message <span className="sr-only">(required)</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your biomass pallet requirement"
                value={values.message}
                onChange={handleChange}
                required
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="pt-2">
              <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                {isSubmitting ? "Sending…" : "Send Message"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
