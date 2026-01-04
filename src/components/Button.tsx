import React from 'react'

/**
 * Button component with multiple variants and sizes
 * Follows brand guidelines with primary color #5200ff and accent #f5e942
 */

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: ButtonVariant
  /** Size of the button */
  size?: ButtonSize
  /** Whether the button is in a loading state */
  isLoading?: boolean
  /** Custom class names to extend styling */
  className?: string
  /** Children content */
  children: React.ReactNode
}

/**
 * Get the base and variant styles for a button
 */
function getButtonStyles(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  isLoading: boolean = false
): string {
  // Base styles
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  // Variant styles (using brand colors: primary #5200ff, accent #f5e942)
  const variantStyles = {
    primary:
      'bg-[#5200ff] text-white hover:bg-[#4100dd] active:bg-[#3a00cc] dark:hover:bg-[#6b1fff]',
    secondary:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-600',
    danger:
      'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 dark:hover:bg-red-500',
    ghost:
      'bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800',
    outline:
      'border-2 border-[#5200ff] text-[#5200ff] hover:bg-[#5200ff] hover:text-white active:bg-[#4100dd] dark:border-[#7d3fff] dark:text-[#9966ff]',
  }

  const loadingOpacity = isLoading ? 'opacity-70' : ''

  return `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${loadingOpacity}`
}

/**
 * Button component - reusable button with multiple variants and sizes
 *
 * @example
 * <Button variant="primary" size="lg">Click me</Button>
 * <Button variant="danger" disabled>Delete</Button>
 * <Button variant="outline">Outline Button</Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      className = '',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${getButtonStyles(variant, size, isLoading)} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
