import React from 'react'

/**
 * Form components library - Input, TextArea, Select, Checkbox, Radio
 * All components follow accessible patterns and brand styling
 */

// ============= INPUT =============

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label for the input */
  label?: string
  /** Error message to display */
  error?: string
  /** Helper text below input */
  helperText?: string
  /** Custom class names */
  className?: string
}

/**
 * Input - Text input component with optional label and error handling
 *
 * @example
 * <Input label="Email" type="email" placeholder="user@example.com" />
 * <Input label="Password" type="password" error="Password is too short" />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      className = '',
      id,
      required,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-50"
          >
            {label}
            {required && <span className="ml-1 text-red-600">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full rounded-md border px-3 py-2 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-[#5200ff] focus:ring-offset-0 disabled:bg-gray-100 disabled:text-gray-500 dark:focus:ring-[#9966ff] ${
            error
              ? 'border-red-500 bg-red-50 dark:border-red-500 dark:bg-red-950'
              : 'border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800'
          } ${className}`}
          required={required}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

// ============= TEXTAREA =============

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label for the textarea */
  label?: string
  /** Error message to display */
  error?: string
  /** Helper text below textarea */
  helperText?: string
  /** Custom class names */
  className?: string
}

/**
 * TextArea - Multi-line text input component
 *
 * @example
 * <TextArea label="Message" placeholder="Type your message..." rows={4} />
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      helperText,
      className = '',
      id,
      required,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-50"
          >
            {label}
            {required && <span className="ml-1 text-red-600">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`w-full rounded-md border px-3 py-2 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-[#5200ff] focus:ring-offset-0 disabled:bg-gray-100 disabled:text-gray-500 dark:focus:ring-[#9966ff] ${
            error
              ? 'border-red-500 bg-red-50 dark:border-red-500 dark:bg-red-950'
              : 'border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800'
          } ${className}`}
          required={required}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'

// ============= SELECT =============

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Label for the select */
  label?: string
  /** Error message to display */
  error?: string
  /** Helper text below select */
  helperText?: string
  /** Select options */
  options: Array<{ value: string; label: string }>
  /** Placeholder option */
  placeholder?: string
  /** Custom class names */
  className?: string
}

/**
 * Select - Dropdown select component
 *
 * @example
 * <Select
 *   label="Choose color"
 *   options={[{ value: 'red', label: 'Red' }]}
 *   placeholder="Select a color"
 * />
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      options,
      placeholder,
      className = '',
      id,
      required,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-50"
          >
            {label}
            {required && <span className="ml-1 text-red-600">*</span>}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={`w-full rounded-md border px-3 py-2 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-[#5200ff] focus:ring-offset-0 disabled:bg-gray-100 disabled:text-gray-500 dark:focus:ring-[#9966ff] ${
            error
              ? 'border-red-500 bg-red-50 dark:border-red-500 dark:bg-red-950'
              : 'border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800'
          } ${className}`}
          required={required}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

// ============= CHECKBOX =============

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label for the checkbox */
  label?: string
  /** Helper text below checkbox */
  helperText?: string
  /** Custom class names */
  className?: string
}

/**
 * Checkbox - Checkbox input component
 *
 * @example
 * <Checkbox label="I agree to the terms" />
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      helperText,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="flex flex-col">
        <div className="flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={`h-4 w-4 rounded border-gray-300 text-[#5200ff] transition-colors focus:ring-2 focus:ring-[#5200ff] focus:ring-offset-0 dark:border-gray-600 dark:focus:ring-[#9966ff] ${className}`}
            {...props}
          />
          {label && (
            <label
              htmlFor={checkboxId}
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-50"
            >
              {label}
            </label>
          )}
        </div>
        {helperText && (
          <p className="mt-1 ml-6 text-sm text-gray-600 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

// ============= RADIO =============

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label for the radio */
  label?: string
  /** Custom class names */
  className?: string
}

/**
 * Radio - Radio input component
 *
 * @example
 * <Radio label="Option 1" name="choice" value="option1" />
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="flex items-center">
        <input
          ref={ref}
          type="radio"
          id={radioId}
          className={`h-4 w-4 border-gray-300 text-[#5200ff] transition-colors focus:ring-2 focus:ring-[#5200ff] focus:ring-offset-0 dark:border-gray-600 dark:focus:ring-[#9966ff] ${className}`}
          {...props}
        />
        {label && (
          <label
            htmlFor={radioId}
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-50"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Radio.displayName = 'Radio'

// ============= FORM GROUP =============

interface FormGroupProps {
  /** Group label */
  label?: string
  /** Group children */
  children: React.ReactNode
  /** Custom class names */
  className?: string
}

/**
 * FormGroup - Wrapper for grouping form elements (like radio buttons)
 *
 * @example
 * <FormGroup label="Choose one">
 *   <Radio label="Option 1" name="choice" value="1" />
 *   <Radio label="Option 2" name="choice" value="2" />
 * </FormGroup>
 */
export const FormGroup = ({
  label,
  children,
  className = '',
}: FormGroupProps) => {
  return (
    <fieldset className={`space-y-2 ${className}`}>
      {label && (
        <legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
          {label}
        </legend>
      )}
      {children}
    </fieldset>
  )
}

FormGroup.displayName = 'FormGroup'
