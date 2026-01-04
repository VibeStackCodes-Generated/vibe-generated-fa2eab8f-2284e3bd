import React from 'react'

/**
 * Alert component for displaying messages and notifications
 * Supports multiple severity levels
 */

type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alert severity level */
  variant?: AlertVariant
  /** Alert title */
  title?: string
  /** Alert message/content */
  children: React.ReactNode
  /** Custom class names */
  className?: string
  /** Optional close button callback */
  onClose?: () => void
  /** Whether to show icon */
  showIcon?: boolean
}

/**
 * Get styles and icon for alert variant
 */
function getAlertConfig(variant: AlertVariant = 'info'): {
  containerStyles: string
  titleStyles: string
  icon: React.ReactNode
} {
  const configs = {
    info: {
      containerStyles:
        'bg-blue-50 border border-blue-200 dark:bg-blue-900 dark:border-blue-700',
      titleStyles: 'text-blue-900 dark:text-blue-100',
      icon: (
        <svg
          className="h-5 w-5 text-blue-600 dark:text-blue-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    success: {
      containerStyles:
        'bg-green-50 border border-green-200 dark:bg-green-900 dark:border-green-700',
      titleStyles: 'text-green-900 dark:text-green-100',
      icon: (
        <svg
          className="h-5 w-5 text-green-600 dark:text-green-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    warning: {
      containerStyles:
        'bg-yellow-50 border border-yellow-200 dark:bg-yellow-900 dark:border-yellow-700',
      titleStyles: 'text-yellow-900 dark:text-yellow-100',
      icon: (
        <svg
          className="h-5 w-5 text-yellow-600 dark:text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    danger: {
      containerStyles:
        'bg-red-50 border border-red-200 dark:bg-red-900 dark:border-red-700',
      titleStyles: 'text-red-900 dark:text-red-100',
      icon: (
        <svg
          className="h-5 w-5 text-red-600 dark:text-red-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  }

  return configs[variant]
}

/**
 * Alert - Notification/message component
 *
 * @example
 * <Alert variant="success" title="Success">
 *   Operation completed successfully
 * </Alert>
 * <Alert variant="danger" title="Error" onClose={() => {}}>
 *   Something went wrong
 * </Alert>
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      title,
      children,
      className = '',
      onClose,
      showIcon = true,
      ...props
    },
    ref
  ) => {
    const config = getAlertConfig(variant)
    const textColorMap = {
      info: 'text-blue-800 dark:text-blue-200',
      success: 'text-green-800 dark:text-green-200',
      warning: 'text-yellow-800 dark:text-yellow-200',
      danger: 'text-red-800 dark:text-red-200',
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={`rounded-lg p-4 ${config.containerStyles} ${className}`}
        {...props}
      >
        <div className="flex items-start">
          {showIcon && <div className="mr-3 flex-shrink-0">{config.icon}</div>}
          <div className="flex-1">
            {title && (
              <h3 className={`font-medium ${config.titleStyles}`}>{title}</h3>
            )}
            <div className={`text-sm ${textColorMap[variant]}`}>
              {children}
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className={`ml-3 inline-flex flex-shrink-0 rounded-md p-1.5 transition-colors ${
                variant === 'info'
                  ? 'hover:bg-blue-100 dark:hover:bg-blue-800 text-blue-600 dark:text-blue-300'
                  : variant === 'success'
                    ? 'hover:bg-green-100 dark:hover:bg-green-800 text-green-600 dark:text-green-300'
                    : variant === 'warning'
                      ? 'hover:bg-yellow-100 dark:hover:bg-yellow-800 text-yellow-600 dark:text-yellow-300'
                      : 'hover:bg-red-100 dark:hover:bg-red-800 text-red-600 dark:text-red-300'
              }`}
              aria-label="Close alert"
            >
              <svg
                className="h-5 w-5"
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
        </div>
      </div>
    )
  }
)

Alert.displayName = 'Alert'
