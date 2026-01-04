import React, { useState } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardDescription,
  Modal,
  Input,
  TextArea,
  Select,
  Checkbox,
  Radio,
  FormGroup,
  Badge,
  Alert,
} from '@/components'

/**
 * Component Showcase Page
 * Demonstrates all reusable UI components from the component library
 */
export function ComponentShowcase() {
  const [modalOpen, setModalOpen] = useState(false)
  const [alerts, setAlerts] = useState({
    info: true,
    success: true,
    warning: true,
    danger: true,
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: '',
    agree: false,
    preference: 'option1',
  })

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.currentTarget
    setFormData({
      ...formData,
      [name]:
        type === 'checkbox'
          ? (e.currentTarget as HTMLInputElement).checked
          : value,
    })
  }

  const closeAlert = (key: keyof typeof alerts) => {
    setAlerts({
      ...alerts,
      [key]: false,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
            Component Library Showcase
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Reusable UI components built with React, TypeScript, and Tailwind CSS
          </p>
        </div>

        {/* Alerts Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
            Alerts
          </h2>
          <div className="space-y-3">
            {alerts.info && (
              <Alert
                variant="info"
                title="Information"
                onClose={() => closeAlert('info')}
              >
                This is an informational alert message.
              </Alert>
            )}
            {alerts.success && (
              <Alert
                variant="success"
                title="Success"
                onClose={() => closeAlert('success')}
              >
                Your action completed successfully!
              </Alert>
            )}
            {alerts.warning && (
              <Alert
                variant="warning"
                title="Warning"
                onClose={() => closeAlert('warning')}
              >
                Please be careful with this action.
              </Alert>
            )}
            {alerts.danger && (
              <Alert
                variant="danger"
                title="Error"
                onClose={() => closeAlert('danger')}
              >
                An error occurred while processing your request.
              </Alert>
            )}
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
            Buttons
          </h2>
          <Card>
            <CardBody>
              <div className="space-y-6">
                {/* Primary Buttons */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Primary Variant
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm">Small Button</Button>
                    <Button size="md">Medium Button</Button>
                    <Button size="lg">Large Button</Button>
                    <Button disabled>Disabled</Button>
                    <Button isLoading>Loading...</Button>
                  </div>
                </div>

                {/* Secondary Buttons */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Secondary Variant
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="secondary" size="sm">
                      Small
                    </Button>
                    <Button variant="secondary" size="md">
                      Medium
                    </Button>
                    <Button variant="secondary" size="lg">
                      Large
                    </Button>
                  </div>
                </div>

                {/* Other Variants */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Other Variants
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="danger">Danger</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="outline">Outline</Button>
                  </div>
                </div>

                {/* Modal Button */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Modal
                  </h3>
                  <Button onClick={() => setModalOpen(true)}>
                    Open Modal
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
            Cards
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>This is a card description</CardDescription>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400">
                  Card body content goes here. Cards are versatile containers
                  for organizing content.
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardBody className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                    Feature Card
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    This card demonstrates a simpler layout without header and
                    footer sections.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="primary">Feature</Badge>
                  <Badge variant="success">Active</Badge>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Badge Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
            Badges
          </h2>
          <Card>
            <CardBody>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Variants
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="info">Info</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Sizes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" size="sm">
                      Small
                    </Badge>
                    <Badge variant="primary" size="md">
                      Medium
                    </Badge>
                    <Badge variant="primary" size="lg">
                      Large
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Closeable
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="primary"
                      onClose={() => alert('Badge closed')}
                    >
                      Closeable Badge
                    </Badge>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Forms Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
            Form Components
          </h2>
          <Card>
            <CardBody>
              <form className="space-y-6">
                {/* Input */}
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleFormChange}
                  helperText="Enter your full name"
                />

                {/* Input with error */}
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="user@example.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  error={
                    formData.email && !formData.email.includes('@')
                      ? 'Please enter a valid email'
                      : ''
                  }
                />

                {/* TextArea */}
                <TextArea
                  label="Message"
                  name="message"
                  placeholder="Type your message here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleFormChange}
                  helperText="Max 500 characters"
                />

                {/* Select */}
                <Select
                  label="Category"
                  name="category"
                  placeholder="Choose a category"
                  value={formData.category}
                  onChange={handleFormChange}
                  options={[
                    { value: 'general', label: 'General Inquiry' },
                    { value: 'support', label: 'Support' },
                    { value: 'feedback', label: 'Feedback' },
                    { value: 'other', label: 'Other' },
                  ]}
                />

                {/* Checkbox */}
                <Checkbox
                  label="I agree to the terms and conditions"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleFormChange}
                  helperText="Please read our terms before proceeding"
                />

                {/* Radio Group */}
                <FormGroup label="Preference">
                  <Radio
                    label="Option 1"
                    name="preference"
                    value="option1"
                    checked={formData.preference === 'option1'}
                    onChange={handleFormChange}
                  />
                  <Radio
                    label="Option 2"
                    name="preference"
                    value="option2"
                    checked={formData.preference === 'option2'}
                    onChange={handleFormChange}
                  />
                  <Radio
                    label="Option 3"
                    name="preference"
                    value="option3"
                    checked={formData.preference === 'option3'}
                    onChange={handleFormChange}
                  />
                </FormGroup>

                {/* Submit Button */}
                <Button>Submit Form</Button>
              </form>
            </CardBody>
          </Card>
        </section>

        {/* Modal Component */}
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Example Modal"
          footer={
            <div className="flex justify-end gap-2">
              <Button
                variant="ghost"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={() => setModalOpen(false)}>
                Confirm
              </Button>
            </div>
          }
        >
          <p className="text-gray-600 dark:text-gray-400">
            This is a modal dialog. It overlays the main content and requires
            user interaction to close. You can press Escape or click the close
            button to dismiss it.
          </p>
        </Modal>
      </div>
    </div>
  )
}

export default ComponentShowcase
