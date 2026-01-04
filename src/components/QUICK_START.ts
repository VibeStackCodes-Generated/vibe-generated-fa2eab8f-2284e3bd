/**
 * QUICK START GUIDE - Component Library
 *
 * Copy and paste these examples into your components to get started!
 */

// ============================================================================
// BUTTON EXAMPLES
// ============================================================================

// Example 1: Basic button
// <Button>Click me</Button>

// Example 2: Button with variant and size
// <Button variant="primary" size="lg">Large Primary Button</Button>

// Example 3: Danger button
// <Button variant="danger">Delete Account</Button>

// Example 4: Loading button
// <Button isLoading>Processing...</Button>

// Example 5: Disabled button
// <Button disabled>Not available</Button>

// Example 6: Outline button
// <Button variant="outline">Outline Button</Button>

// ============================================================================
// CARD EXAMPLES
// ============================================================================

// Example 1: Complete card with header and footer
// <Card>
//   <CardHeader>
//     <CardTitle>Card Title</CardTitle>
//     <CardDescription>Optional description</CardDescription>
//   </CardHeader>
//   <CardBody>Main content goes here</CardBody>
//   <CardFooter>
//     <Button variant="ghost">Close</Button>
//   </CardFooter>
// </Card>

// Example 2: Simple card
// <Card>
//   <CardBody>
//     <h3>Title</h3>
//     <p>Content</p>
//   </CardBody>
// </Card>

// ============================================================================
// MODAL EXAMPLES
// ============================================================================

// Example: Modal with state management
// const [isOpen, setIsOpen] = useState(false)
// <Modal
//   isOpen={isOpen}
//   onClose={() => setIsOpen(false)}
//   title="Confirm Action"
//   footer={
//     <div className="flex justify-end gap-2">
//       <Button variant="ghost" onClick={() => setIsOpen(false)}>
//         Cancel
//       </Button>
//       <Button variant="danger">Delete</Button>
//     </div>
//   }
// >
//   Are you sure you want to delete this item?
// </Modal>

// ============================================================================
// INPUT EXAMPLES
// ============================================================================

// Example 1: Basic input
// <Input type="text" placeholder="Enter name" />

// Example 2: Input with label and error
// <Input
//   label="Email"
//   type="email"
//   placeholder="user@example.com"
//   error={error}
// />

// Example 3: Input with helper text
// <Input
//   label="Password"
//   type="password"
//   helperText="Must be at least 8 characters"
// />

// ============================================================================
// TEXTAREA EXAMPLES
// ============================================================================

// Example: Textarea with label
// <TextArea
//   label="Comments"
//   placeholder="Enter your comments here..."
//   rows={4}
// />

// ============================================================================
// SELECT EXAMPLES
// ============================================================================

// Example: Select with options
// <Select
//   label="Choose category"
//   options={[
//     { value: 'tech', label: 'Technology' },
//     { value: 'health', label: 'Health' },
//     { value: 'other', label: 'Other' }
//   ]}
//   placeholder="Select category"
// />

// ============================================================================
// CHECKBOX EXAMPLES
// ============================================================================

// Example 1: Single checkbox
// <Checkbox label="I agree to terms" />

// Example 2: Controlled checkbox
// const [agreed, setAgreed] = useState(false)
// <Checkbox
//   label="I agree to terms"
//   checked={agreed}
//   onChange={(e) => setAgreed(e.target.checked)}
// />

// ============================================================================
// RADIO EXAMPLES
// ============================================================================

// Example: Radio group
// const [option, setOption] = useState('option1')
// <FormGroup label="Choose one">
//   <Radio
//     label="Option 1"
//     name="choice"
//     value="option1"
//     checked={option === 'option1'}
//     onChange={(e) => setOption(e.target.value)}
//   />
//   <Radio
//     label="Option 2"
//     name="choice"
//     value="option2"
//     checked={option === 'option2'}
//     onChange={(e) => setOption(e.target.value)}
//   />
// </FormGroup>

// ============================================================================
// BADGE EXAMPLES
// ============================================================================

// Example 1: Basic badge
// <Badge variant="primary">New</Badge>

// Example 2: Success badge
// <Badge variant="success" size="lg">Active</Badge>

// Example 3: Closeable badge
// <Badge variant="danger" onClose={() => console.log('removed')}>
//   Delete me
// </Badge>

// ============================================================================
// ALERT EXAMPLES
// ============================================================================

// Example 1: Success alert
// <Alert variant="success" title="Success!">
//   Operation completed successfully
// </Alert>

// Example 2: Error alert with close
// const [showError, setShowError] = useState(true)
// {showError && (
//   <Alert
//     variant="danger"
//     title="Error"
//     onClose={() => setShowError(false)}
//   >
//     Something went wrong
//   </Alert>
// )}

// Example 3: Warning alert
// <Alert variant="warning" title="Warning">
//   This action cannot be undone
// </Alert>

// ============================================================================
// FORM EXAMPLE - Complete Form
// ============================================================================

// const [formData, setFormData] = useState({
//   name: '',
//   email: '',
//   message: '',
//   category: '',
//   agree: false
// })
//
// const handleChange = (e) => {
//   const { name, value, type, checked } = e.target
//   setFormData({
//     ...formData,
//     [name]: type === 'checkbox' ? checked : value
//   })
// }
//
// const handleSubmit = (e) => {
//   e.preventDefault()
//   console.log('Form data:', formData)
// }
//
// <Card>
//   <CardHeader>
//     <CardTitle>Contact Form</CardTitle>
//   </CardHeader>
//   <CardBody>
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <Input
//         label="Name"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <Input
//         label="Email"
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <TextArea
//         label="Message"
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         rows={4}
//       />
//       <Select
//         label="Category"
//         name="category"
//         value={formData.category}
//         onChange={handleChange}
//         options={[
//           { value: 'general', label: 'General' },
//           { value: 'support', label: 'Support' }
//         ]}
//       />
//       <Checkbox
//         label="I agree to terms"
//         name="agree"
//         checked={formData.agree}
//         onChange={handleChange}
//       />
//       <Button type="submit">Submit</Button>
//     </form>
//   </CardBody>
// </Card>

// ============================================================================
// IMPORTING ALL COMPONENTS
// ============================================================================

// import {
//   // Button
//   Button,
//
//   // Card
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   CardTitle,
//   CardDescription,
//
//   // Modal
//   Modal,
//
//   // Form
//   Input,
//   TextArea,
//   Select,
//   Checkbox,
//   Radio,
//   FormGroup,
//
//   // Badge
//   Badge,
//
//   // Alert
//   Alert,
// } from '@/components'

// ============================================================================
// STYLING COMPONENTS
// ============================================================================

// All components accept className prop:
// <Button className="custom-class">Custom Button</Button>

// Use Tailwind CSS classes:
// <Button className="w-full">Full Width Button</Button>
// <Card className="shadow-lg">Custom Card</Card>

// ============================================================================
// DARK MODE
// ============================================================================

// All components automatically support dark mode!
// They use Tailwind's dark: classes.
// Just add dark mode to your root element:
// <html class="dark">

// ============================================================================
// FOR MORE INFORMATION
// ============================================================================

// Read the full documentation:
// → src/components/LIBRARY.ts

// View live examples:
// → src/pages/ComponentShowcase.tsx

// TypeScript types are available in each component file

export {}
