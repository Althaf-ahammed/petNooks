import { OverridableComponent } from "@/types";
import React from "react";

import { cn } from "@/lib/utils";

import { ButtonProps, ButtonTypeMap } from "./ButtonProps";
import { buttonVariants } from "./buttonVariants";

export const Button = React.forwardRef(
  ({ as, className, variant, size, style, ...props }: ButtonProps, ref) => {
    const Component = as || "button";

    if (variant == "blur" || variant == "pill")
      return (
        <Component
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          style={{
            ...style,
          }}
          {...props}
        />
      );

    return (
      <div className={cn("bg-transparent rounded-full w-full p-0.5")}>
        <Component
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          style={{
            ...style,
          }}
          {...props}
        />
      </div>
    );
  }
) as OverridableComponent<ButtonTypeMap>;

Button.displayName = "Button";
