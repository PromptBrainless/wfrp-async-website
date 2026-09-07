import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-display text-sm font-medium tracking-wide transition-[transform,background-color,color,box-shadow] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] min-h-11 px-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-fg rounded-sm",
        outline: "border border-border bg-raised text-fg rounded-sm",
        ghost: "text-fg rounded-sm hover:bg-raised",
        wax: "bg-primary text-primary-fg rounded-sm px-5 shadow-[0_1px_0_color-mix(in_oklab,white_16%,transparent)_inset]",
        ink: "border border-ink/30 bg-ink/5 text-ink rounded-sm hover:bg-ink/10",
        quiet: "text-ink-muted rounded-sm hover:bg-ink/5 hover:text-ink",
      },
      size: {
        default: "h-11",
        sm: "h-9 min-h-9 px-3 text-xs",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
