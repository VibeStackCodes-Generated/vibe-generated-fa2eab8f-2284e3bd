import React from 'react'

/**
 * Card component for displaying content in a container
 * Provides header, body, footer, and other flexible sections
 */

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom class names */
  className?: string
  /** Children content */
  children: React.ReactNode
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string
  children: React.ReactNode
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string
  children: React.ReactNode
}

/**
 * Card - Main container component
 *
 * @example
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Title</CardTitle>
 *   </CardHeader>
 *   <CardBody>Content here</CardBody>
 * </Card>
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

/**
 * CardHeader - Header section of a card
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`border-b border-gray-200 px-6 py-4 dark:border-gray-800 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

/**
 * CardBody - Main content area of a card
 */
export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`px-6 py-4 ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

CardBody.displayName = 'CardBody'

/**
 * CardFooter - Footer section of a card
 */
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`border-t border-gray-200 px-6 py-4 dark:border-gray-800 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'

/**
 * CardTitle - Title within a card header
 */
export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={`text-lg font-semibold text-gray-900 dark:text-gray-50 ${className}`}
        {...props}
      >
        {children}
      </h2>
    )
  }
)

CardTitle.displayName = 'CardTitle'

/**
 * CardDescription - Description text within a card
 */
export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className = '', children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={`text-sm text-gray-600 dark:text-gray-400 ${className}`}
      {...props}
    >
      {children}
    </p>
  )
})

CardDescription.displayName = 'CardDescription'
