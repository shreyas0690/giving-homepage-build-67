# Varak Fundraising Platform - API Documentation

## Table of Contents

1. [Overview](#overview)
2. [Contexts](#contexts)
3. [Hooks](#hooks)
4. [Utility Functions](#utility-functions)
5. [UI Components](#ui-components)
6. [Business Components](#business-components)
7. [Pages](#pages)
8. [Form Components](#form-components)

## Overview

Varak is a React-based fundraising platform built with TypeScript, Vite, and Tailwind CSS. The application uses shadcn/ui components, React Hook Form for form management, and React Query for data fetching.

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context API
- **Forms**: React Hook Form with Zod validation
- **Data Fetching**: TanStack React Query
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Contexts

### AuthContext

Provides authentication state management throughout the application.

**Location**: `src/contexts/AuthContext.tsx`

#### Interface

```typescript
interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (userData: User) => void;
  signOut: () => void;
}
```

#### Usage

```tsx
import { useAuth } from "@/contexts/AuthContext";

function MyComponent() {
  const { user, isAuthenticated, signIn, signOut } = useAuth();
  
  const handleLogin = () => {
    signIn({
      name: "John Doe",
      email: "john@example.com"
    });
  };
  
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
    </div>
  );
}
```

#### Methods

- **`signIn(userData: User)`**: Signs in a user and stores data in localStorage
- **`signOut()`**: Signs out the user and clears localStorage
- **`user`**: Current user object or null
- **`isAuthenticated`**: Boolean indicating if user is logged in

## Hooks

### useIsMobile

Custom hook to detect mobile screen size.

**Location**: `src/hooks/use-mobile.tsx`

#### Usage

```tsx
import { useIsMobile } from "@/hooks/use-mobile";

function ResponsiveComponent() {
  const isMobile = useIsMobile();
  
  return (
    <div>
      {isMobile ? (
        <MobileLayout />
      ) : (
        <DesktopLayout />
      )}
    </div>
  );
}
```

#### Returns
- **`boolean`**: True if screen width is less than 768px

### useToast

Custom hook for managing toast notifications.

**Location**: `src/hooks/use-toast.ts`

#### Usage

```tsx
import { useToast } from "@/hooks/use-toast";

function MyComponent() {
  const { toast } = useToast();
  
  const showSuccess = () => {
    toast({
      title: "Success",
      description: "Operation completed successfully",
    });
  };
  
  const showError = () => {
    toast({
      title: "Error",
      description: "Something went wrong",
      variant: "destructive",
    });
  };
  
  return (
    <div>
      <button onClick={showSuccess}>Show Success</button>
      <button onClick={showError}>Show Error</button>
    </div>
  );
}
```

#### Toast Options

```typescript
interface ToastOptions {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: "default" | "destructive";
}
```

## Utility Functions

### cn

Utility function for combining CSS classes with Tailwind CSS.

**Location**: `src/lib/utils.ts`

#### Usage

```tsx
import { cn } from "@/lib/utils";

function MyComponent({ className, ...props }) {
  return (
    <div 
      className={cn(
        "base-classes",
        className,
        "conditional-classes"
      )}
      {...props}
    />
  );
}
```

#### Parameters
- **`...inputs: ClassValue[]`**: CSS classes to combine

#### Returns
- **`string`**: Combined CSS class string

## UI Components

### Button

Versatile button component with multiple variants and sizes.

**Location**: `src/components/ui/button.tsx`

#### Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}
```

#### Usage

```tsx
import { Button } from "@/components/ui/button";

function MyComponent() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline" size="sm">Small Outline</Button>
      <Button variant="ghost" size="lg">Large Ghost</Button>
    </div>
  );
}
```

#### Variants
- **`default`**: Primary button with solid background
- **`destructive`**: Red button for destructive actions
- **`outline`**: Button with border and transparent background
- **`secondary`**: Secondary button with muted background
- **`ghost`**: Transparent button with hover effects
- **`link`**: Button styled as a link

#### Sizes
- **`default`**: Standard size (h-10 px-4 py-2)
- **`sm`**: Small size (h-9 px-3)
- **`lg`**: Large size (h-11 px-8)
- **`icon`**: Square button for icons (h-10 w-10)

### Dialog

Modal dialog component for overlays and popups.

**Location**: `src/components/ui/dialog.tsx`

#### Components

- `Dialog`: Root dialog component
- `DialogTrigger`: Element that triggers the dialog
- `DialogContent`: Main dialog content
- `DialogHeader`: Dialog header section
- `DialogFooter`: Dialog footer section
- `DialogTitle`: Dialog title
- `DialogDescription`: Dialog description
- `DialogClose`: Close button

#### Usage

```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

function MyModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            Dialog description goes here.
          </DialogDescription>
        </DialogHeader>
        <div>Dialog content</div>
      </DialogContent>
    </Dialog>
  );
}
```

#### DialogContent Props

```typescript
interface DialogContentProps {
  hideCloseButton?: boolean; // Hide the default close button
}
```

### Card

Container component for displaying content in cards.

**Location**: `src/components/ui/card.tsx`

#### Components

- `Card`: Main card container
- `CardHeader`: Card header section
- `CardTitle`: Card title
- `CardDescription`: Card description
- `CardContent`: Card content area
- `CardFooter`: Card footer section

#### Usage

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```

### Form

Form components built with React Hook Form integration.

**Location**: `src/components/ui/form.tsx`

#### Components

- `Form`: Form provider component
- `FormField`: Form field wrapper
- `FormItem`: Form item container
- `FormLabel`: Form label
- `FormControl`: Form control wrapper
- `FormDescription`: Form field description
- `FormMessage`: Form validation message

#### Usage

```tsx
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

function MyForm() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
```

### Input

Basic input component.

**Location**: `src/components/ui/input.tsx`

#### Usage

```tsx
import { Input } from "@/components/ui/input";

function MyInput() {
  return (
    <Input 
      type="email" 
      placeholder="Enter your email"
      className="w-full"
    />
  );
}
```

### Select

Dropdown select component.

**Location**: `src/components/ui/select.tsx`

#### Components

- `Select`: Root select component
- `SelectTrigger`: Select trigger button
- `SelectValue`: Display selected value
- `SelectContent`: Dropdown content
- `SelectItem`: Individual select option
- `SelectGroup`: Group of select items
- `SelectLabel`: Group label
- `SelectSeparator`: Visual separator

#### Usage

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function MySelect() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  );
}
```

## Business Components

### Header

Main navigation header component.

**Location**: `src/components/Header.tsx`

#### Features
- Responsive navigation menu
- Authentication state management
- Fundraiser creation triggers
- Mobile menu support

#### Usage

```tsx
import Header from "@/components/Header";

function App() {
  return (
    <div>
      <Header />
      {/* Other content */}
    </div>
  );
}
```

### SignInModal

Authentication modal for user sign-in.

**Location**: `src/components/SignInModal.tsx`

#### Props

```typescript
interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenStartFundraiser?: () => void;
}
```

#### Usage

```tsx
import SignInModal from "@/components/SignInModal";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <SignInModal 
      open={isOpen}
      onOpenChange={setIsOpen}
      onOpenStartFundraiser={() => console.log("Start fundraiser")}
    />
  );
}
```

#### Features
- Email/mobile number detection
- OTP-based authentication
- Password-based authentication
- Google sign-in integration
- Forgot password flow
- Mobile verification modal
- Email verification modal

### FundraiserCreationModal

Modal for creating new fundraisers.

**Location**: `src/components/FundraiserCreationModal.tsx`

#### Props

```typescript
interface FundraiserCreationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
```

#### Usage

```tsx
import FundraiserCreationModal from "@/components/FundraiserCreationModal";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <FundraiserCreationModal 
      open={isOpen}
      onOpenChange={setIsOpen}
    />
  );
}
```

#### Features
- Multi-step form wizard
- Basic information collection
- Document upload
- Story creation
- Progress tracking

### TrendingFundraisers

Component displaying trending fundraising campaigns.

**Location**: `src/components/TrendingFundraisers.tsx`

#### Usage

```tsx
import TrendingFundraisers from "@/components/TrendingFundraisers";

function HomePage() {
  return (
    <div>
      <TrendingFundraisers />
    </div>
  );
}
```

#### Features
- Carousel display of fundraisers
- Progress indicators
- Donation amounts
- Campaign categories
- Responsive design

### SuccessStories

Component displaying successful fundraising stories.

**Location**: `src/components/SuccessStories.tsx`

#### Usage

```tsx
import SuccessStories from "@/components/SuccessStories";

function HomePage() {
  return (
    <div>
      <SuccessStories />
    </div>
  );
}
```

#### Features
- Grid layout of success stories
- Story cards with images
- Fundraising amounts
- Category badges
- Hover effects

## Pages

### Index

Main landing page component.

**Location**: `src/pages/Index.tsx`

#### Usage

```tsx
import Index from "@/pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}
```

#### Components Used
- Header
- HeroSection
- TrendingFundraisers
- StartFundraiser
- Causes
- WhySection
- SuccessStories
- FeaturedIn
- Footer

### FundraiserDetailsPage

Detailed view of a fundraising campaign.

**Location**: `src/pages/FundraiserDetailsPage.tsx`

#### Features
- Campaign information display
- Donation form
- Progress tracking
- Social sharing
- Comments section
- Related fundraisers

### FundraiserSuccess

Success page after fundraiser creation.

**Location**: `src/pages/FundraiserSuccess.tsx`

#### Features
- Success confirmation
- Next steps guidance
- Social sharing options
- Dashboard access

### NotFound

404 error page.

**Location**: `src/pages/NotFound.tsx`

#### Features
- Error message
- Navigation back to home
- Search functionality

## Form Components

### FundraiserBasicForm

Form for collecting basic fundraiser information.

**Location**: `src/components/fundraiser/FundraiserBasicForm.tsx`

#### Props

```typescript
interface FundraiserBasicFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}
```

#### Usage

```tsx
import FundraiserBasicForm from "@/components/fundraiser/FundraiserBasicForm";

function FundraiserWizard() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <FundraiserBasicForm
      formData={formData}
      onInputChange={handleInputChange}
      errors={errors}
    />
  );
}
```

#### Fields
- Patient name
- Patient relation
- Age
- Gender
- Education level
- Employment status
- Medical condition
- Hospital name
- Doctor name
- Required amount
- Patient image upload

### FundraiserDocumentForm

Form for uploading fundraiser documents.

**Location**: `src/components/fundraiser/FundraiserDocumentForm.tsx`

#### Props

```typescript
interface FundraiserDocumentFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}
```

#### Usage

```tsx
import FundraiserDocumentForm from "@/components/fundraiser/FundraiserDocumentForm";

function FundraiserWizard() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <FundraiserDocumentForm
      formData={formData}
      onInputChange={handleInputChange}
      errors={errors}
    />
  );
}
```

#### Features
- Document upload interface
- File type validation
- Multiple file support
- Progress indicators
- Error handling

### FundraiserStoryForm

Form for creating fundraiser story content.

**Location**: `src/components/fundraiser/FundraiserStoryForm.tsx`

#### Props

```typescript
interface FundraiserStoryFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}
```

#### Usage

```tsx
import FundraiserStoryForm from "@/components/fundraiser/FundraiserStoryForm";

function FundraiserWizard() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <FundraiserStoryForm
      formData={formData}
      onInputChange={handleInputChange}
      errors={errors}
    />
  );
}
```

#### Features
- Rich text editor
- Story title
- Detailed description
- Image uploads
- Character limits
- Preview functionality

## Additional UI Components

The application includes many more UI components from shadcn/ui:

- **Accordion**: Collapsible content sections
- **Alert**: Notification messages
- **Avatar**: User profile images
- **Badge**: Status indicators
- **Breadcrumb**: Navigation breadcrumbs
- **Calendar**: Date picker
- **Carousel**: Image/content sliders
- **Chart**: Data visualization
- **Checkbox**: Form checkboxes
- **Collapsible**: Expandable content
- **Command**: Command palette
- **Context Menu**: Right-click menus
- **Drawer**: Slide-out panels
- **Dropdown Menu**: Dropdown options
- **Hover Card**: Hover tooltips
- **Input OTP**: One-time password input
- **Label**: Form labels
- **Menubar**: Application menu
- **Navigation Menu**: Site navigation
- **Pagination**: Page navigation
- **Popover**: Floating content
- **Progress**: Progress indicators
- **Radio Group**: Radio button groups
- **Resizable**: Resizable panels
- **Scroll Area**: Custom scrollbars
- **Separator**: Visual dividers
- **Sheet**: Side panels
- **Sidebar**: Application sidebar
- **Skeleton**: Loading placeholders
- **Slider**: Range sliders
- **Sonner**: Toast notifications
- **Switch**: Toggle switches
- **Table**: Data tables
- **Tabs**: Tabbed content
- **Textarea**: Multi-line text input
- **Toast**: Notification toasts
- **Toaster**: Toast container
- **Toggle**: Toggle buttons
- **Toggle Group**: Grouped toggles
- **Tooltip**: Hover tooltips

Each component follows the same pattern with TypeScript interfaces, proper prop forwarding, and Tailwind CSS styling.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Contributing

When adding new components or modifying existing ones:

1. Follow the established patterns for component structure
2. Use TypeScript interfaces for all props
3. Include proper JSDoc comments
4. Test components across different screen sizes
5. Ensure accessibility compliance
6. Update this documentation for any new public APIs