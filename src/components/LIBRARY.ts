/**
 * ============================================================================
 * UI COMPONENT LIBRARY - USAGE GUIDE
 * ============================================================================
 *
 * This file documents the reusable UI component library. For code examples,
 * see src/pages/ComponentShowcase.tsx
 *
 * PROJECT STRUCTURE:
 * ─────────────────
 * src/components/
 * ├── Button.tsx              # Button component with variants
 * ├── Card.tsx                # Card container with header/body/footer
 * ├── Modal.tsx               # Dialog/modal overlay component
 * ├── Form.tsx                # Form inputs (Input, TextArea, Select, Checkbox, Radio)
 * ├── Badge.tsx               # Badge/label component
 * ├── Alert.tsx               # Alert/notification component
 * ├── index.ts                # Central export file
 * └── error-boundary.tsx      # Error boundary wrapper
 *
 * src/pages/
 * └── ComponentShowcase.tsx    # Full component showcase/demo page
 *
 * ============================================================================
 * COMPONENT OVERVIEW
 * ============================================================================
 *
 * 1. BUTTON COMPONENT
 *    ─────────────────
 *    Versatile button with multiple variants and sizes
 *
 *    Props:
 *    • variant: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline'
 *    • size: 'sm' | 'md' | 'lg'
 *    • isLoading: boolean (shows spinner)
 *    • All standard HTML button attributes
 *
 *    Usage:
 *    import { Button } from '@/components'
 *    <Button variant="primary" size="lg">Click Me</Button>
 *    <Button variant="danger" disabled>Delete</Button>
 *    <Button isLoading>Processing...</Button>
 *
 *    Features:
 *    ✓ Loading state with spinner animation
 *    ✓ Disabled state styling
 *    ✓ 5 distinct visual variants
 *    ✓ 3 size options
 *    ✓ Full keyboard accessibility
 *
 * 2. CARD COMPONENT
 *    ─────────────
 *    Flexible container for grouping content
 *
 *    Sub-components:
 *    • Card - Main container
 *    • CardHeader - Header section
 *    • CardBody - Main content area
 *    • CardFooter - Footer section
 *    • CardTitle - Title text
 *    • CardDescription - Subtitle/description text
 *
 *    Usage:
 *    import { Card, CardHeader, CardBody, CardTitle } from '@/components'
 *    <Card>
 *      <CardHeader>
 *        <CardTitle>Title</CardTitle>
 *      </CardHeader>
 *      <CardBody>Content here</CardBody>
 *    </Card>
 *
 *    Features:
 *    ✓ Composed sub-components for flexibility
 *    ✓ Hover shadow effects
 *    ✓ Dark mode support
 *    ✓ Border styling
 *    ✓ Responsive padding
 *
 * 3. MODAL/DIALOG COMPONENT
 *    ──────────────────────
 *    Overlay dialog for important content
 *
 *    Props:
 *    • isOpen: boolean
 *    • onClose: () => void
 *    • title?: React.ReactNode
 *    • children: React.ReactNode
 *    • footer?: React.ReactNode
 *    • closeOnBackdropClick?: boolean
 *    • showCloseButton?: boolean
 *
 *    Usage:
 *    import { Modal } from '@/components'
 *    const [open, setOpen] = useState(false)
 *    <Modal
 *      isOpen={open}
 *      onClose={() => setOpen(false)}
 *      title="Confirm Action"
 *    >
 *      Are you sure?
 *    </Modal>
 *
 *    Features:
 *    ✓ Focus management and restoration
 *    ✓ Escape key handling
 *    ✓ Backdrop click to close
 *    ✓ Header with close button
 *    ✓ Optional footer section
 *    ✓ Full keyboard accessibility
 *    ✓ Prevents body scrolling
 *
 * 4. FORM COMPONENTS
 *    ────────────────
 *    Complete set of form inputs with validation support
 *
 *    Sub-components:
 *    • Input - Text input field
 *    • TextArea - Multi-line text input
 *    • Select - Dropdown select
 *    • Checkbox - Single checkbox
 *    • Radio - Single radio button
 *    • FormGroup - Radio group wrapper
 *
 *    Common Props:
 *    • label?: string
 *    • error?: string
 *    • helperText?: string
 *    • All standard HTML input attributes
 *
 *    Usage:
 *    import { Input, TextArea, Select, Checkbox, Radio } from '@/components'
 *
 *    <Input
 *      label="Email"
 *      type="email"
 *      placeholder="user@example.com"
 *      error={email && !email.includes('@') ? 'Invalid email' : ''}
 *    />
 *
 *    <Select
 *      label="Category"
 *      options={[
 *        { value: 'option1', label: 'Option 1' },
 *        { value: 'option2', label: 'Option 2' }
 *      ]}
 *    />
 *
 *    <FormGroup label="Preferences">
 *      <Radio label="Option A" name="pref" value="a" />
 *      <Radio label="Option B" name="pref" value="b" />
 *    </FormGroup>
 *
 *    Features:
 *    ✓ Error state styling and messaging
 *    ✓ Helper text support
 *    ✓ Full accessibility
 *    ✓ Focus ring styling
 *    ✓ Dark mode support
 *    ✓ Automatic label generation for IDs
 *
 * 5. BADGE COMPONENT
 *    ────────────────
 *    Versatile labels and tags
 *
 *    Props:
 *    • variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
 *    • size: 'sm' | 'md' | 'lg'
 *    • onClose?: () => void (optional close button)
 *
 *    Usage:
 *    import { Badge } from '@/components'
 *    <Badge variant="primary">New Feature</Badge>
 *    <Badge variant="success" size="lg">Active</Badge>
 *    <Badge variant="danger" onClose={() => console.log('removed')}>
 *      Closeable
 *    </Badge>
 *
 *    Features:
 *    ✓ 6 semantic color variants
 *    ✓ 3 size options
 *    ✓ Optional close button
 *    ✓ Dark mode support
 *
 * 6. ALERT COMPONENT
 *    ────────────────
 *    Messages and notifications
 *
 *    Props:
 *    • variant: 'info' | 'success' | 'warning' | 'danger'
 *    • title?: string
 *    • children: React.ReactNode
 *    • onClose?: () => void
 *    • showIcon?: boolean
 *
 *    Usage:
 *    import { Alert } from '@/components'
 *    <Alert variant="success" title="Success!">
 *      Operation completed successfully
 *    </Alert>
 *    <Alert variant="danger" onClose={() => setShowAlert(false)}>
 *      Something went wrong
 *    </Alert>
 *
 *    Features:
 *    ✓ 4 semantic variants with icons
 *    ✓ Icon customization
 *    ✓ Optional close button
 *    ✓ Title and content sections
 *    ✓ Dark mode support
 *    ✓ Proper ARIA roles
 *
 * ============================================================================
 * DESIGN SYSTEM / THEMING
 * ============================================================================
 *
 * Brand Colors:
 *   Primary: #5200ff (Purple)
 *   Accent:  #f5e942 (Yellow)
 *
 * Components use a neutral gray palette for flexibility:
 *   - Gray: #9ca3af, #6b7280, #4b5563
 *   - Dark mode: Tailwind dark: classes
 *
 * All components support:
 *   ✓ Light and dark modes
 *   ✓ Responsive design
 *   ✓ Smooth transitions
 *   ✓ Tailwind CSS utility classes
 *
 * ============================================================================
 * IMPORTING COMPONENTS
 * ============================================================================
 *
 * Option 1: Import from components index (recommended)
 * import {
 *   Button,
 *   Card,
 *   Modal,
 *   Input,
 *   Badge,
 *   Alert,
 * } from '@/components'
 *
 * Option 2: Import directly from specific files
 * import { Button } from '@/components/Button'
 * import { Card, CardHeader } from '@/components/Card'
 *
 * ============================================================================
 * CODE QUALITY
 * ============================================================================
 *
 * All components follow these standards:
 *   ✓ TypeScript strict mode (no 'any' types)
 *   ✓ React functional components with forwardRef
 *   ✓ JSDoc comments with examples
 *   ✓ Comprehensive prop interfaces
 *   ✓ Accessibility (ARIA attributes, keyboard handling)
 *   ✓ Dark mode support
 *   ✓ Responsive design
 *   ✓ CSS transitions and animations
 *
 * ============================================================================
 * DEMO PAGE
 * ============================================================================
 *
 * View the component showcase at:
 *   • Development: http://localhost:5173/
 *   • Component route: http://localhost:5173/components
 *
 * The showcase page (src/pages/ComponentShowcase.tsx) demonstrates:
 *   • All component variants
 *   • Size variations
 *   • State handling (loading, disabled, error)
 *   • Interactive examples
 *   • Form submission patterns
 *   • Modal interactions
 *
 * ============================================================================
 * EXTENDING COMPONENTS
 * ============================================================================
 *
 * All components accept className prop for additional customization:
 *
 * <Button className="custom-class">Custom Button</Button>
 *
 * You can also use ref forwarding for advanced use cases:
 *
 * const buttonRef = useRef<HTMLButtonElement>(null)
 * <Button ref={buttonRef}>Reference Button</Button>
 *
 * ============================================================================
 * TYPESCRIPT SUPPORT
 * ============================================================================
 *
 * All components are fully typed with TypeScript interfaces:
 *
 * interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 *   variant?: ButtonVariant
 *   size?: ButtonSize
 *   isLoading?: boolean
 * }
 *
 * This provides excellent IDE support and type safety.
 *
 * ============================================================================
 */

// This file is for documentation only
// All actual components are in their respective .tsx files
export {}
