import React from 'react'

/**
 * Badge component for displaying labels and tags
 * Supports multiple variants and sizes
 */

type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual variant of the badge */
  variant?: BadgeVariant
  /** Size of the badge */
  size?: BadgeSize
  /** Custom class names */
  className?: string
  /** Children content */
  children: React.ReactNode
  /** Optional close button callback */
  onClose?: () => void
}

/**
 * Get styles for badge variant
 */
function getBadgeStyles(
  variant: BadgeVariant = 'default',
  size: BadgeSize = 'md'
): string {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-colors'

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }

  const variantStyles = {
    default:
      'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50',
    primary:
      'bg-[#5200ff] text-white dark:bg-[#7d3fff]',
    success:
      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning:
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    danger:
      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  }

  return `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`
}

/**
 * Badge - Reusable badge component for labels and tags
 *
 * @example
 * <Badge variant="primary">New</Badge>
 * <Badge variant="success" size="lg">Active</Badge>
 * <Badge variant="danger" onClose={() => {}}>Delete me</Badge>
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'md',
      className = '',
      children,
      onClose,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={`${getBadgeStyles(variant, size)} ${className}`}
        {...props}
      >
        <span className="flex items-center gap-2">
          {children}
          {onClose && (
            <button
              onClick={onClose}
              className="ml-1 inline-flex items-center justify-center rounded-full p-0.5 transition-colors hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-0"
              aria-label="Remove"
            >
              <svg
                className="h-3 w-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </span>
      </span>
    )
  }
)

Badge.displayName = 'Badge'
