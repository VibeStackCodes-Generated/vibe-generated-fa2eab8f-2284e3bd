import React, { useEffect, useRef } from 'react'

/**
 * Modal component for displaying dialogs and overlays
 * Includes backdrop, close button, and focus management
 */

interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean
  /** Callback when modal should close */
  onClose: () => void
  /** Modal title */
  title?: React.ReactNode
  /** Modal content */
  children: React.ReactNode
  /** Custom class names for modal content */
  contentClassName?: string
  /** Whether to close on backdrop click */
  closeOnBackdropClick?: boolean
  /** Footer content */
  footer?: React.ReactNode
  /** Whether to show close button */
  showCloseButton?: boolean
}

/**
 * Modal - Dialog/modal component with backdrop and focus management
 *
 * @example
 * <Modal isOpen={isOpen} onClose={handleClose} title="Confirm Action">
 *   <p>Are you sure?</p>
 * </Modal>
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      title,
      children,
      contentClassName = '',
      closeOnBackdropClick = true,
      footer,
      showCloseButton = true,
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null)
    const previousActiveElement = useRef<HTMLElement | null>(null)

    // Handle escape key
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
          onClose()
        }
      }

      if (isOpen) {
        previousActiveElement.current = document.activeElement as HTMLElement
        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'
        // Focus the modal
        setTimeout(() => {
          dialogRef.current?.focus()
        }, 0)
      }

      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
        // Restore focus
        previousActiveElement.current?.focus()
      }
    }, [isOpen, onClose])

    // Handle backdrop click
    const handleBackdropClick = (
      event: React.MouseEvent<HTMLDivElement>
    ) => {
      if (
        closeOnBackdropClick &&
        event.target === event.currentTarget
      ) {
        onClose()
      }
    }

    if (!isOpen) {
      return null
    }

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity dark:bg-opacity-70"
        onClick={handleBackdropClick}
      >
        <div
          ref={dialogRef || ref}
          role="dialog"
          aria-modal="true"
          className={`relative w-full max-w-md rounded-lg border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900 ${contentClassName}`}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
              {title && (
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="ml-auto inline-flex items-center justify-center rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  aria-label="Close modal"
                >
                  <svg
                    className="h-6 w-6"
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
          )}

          {/* Content */}
          <div className="px-6 py-4">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
              {footer}
            </div>
          )}
        </div>
      </div>
    )
  }
)

Modal.displayName = 'Modal'
