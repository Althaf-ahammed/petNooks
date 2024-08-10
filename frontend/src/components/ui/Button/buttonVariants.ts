import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center group justify-center rounded-full text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-20',
  {
    variants: {
      variant: {
        primary:
          'bg-primary transition-all duration-400 text-white hover:bg-foreground active:bg-primary active:text-primary-foreground disabled:bg-muted-foreground disabled:border-muted-foreground outline-primary',
        secondary:
          'bg-white transition-all duration-400 text-text hover:bg-foreground hover:text-white active:bg-transparent active:text-primary disabled:border-muted-foreground disabled:text-muted-foreground',
        rounded: 'bg-primary text-white transition-all duration-400 hover:bg-foreground active:bg-primary active:text-primary-foreground disabled:bg-muted-foreground disabled:border-muted-foreground outline-primary',
        pill: 'rounded-full bg-pill disabled:border',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-10 px-5 py-3',
        lg: 'h-11 px-9 py-3',
        xl: 'h-12 px-11 py-8',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
