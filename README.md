### Flux UI Kit README

# Flux UI Kit

Welcome to the **Flux UI Kit** repository! Flux is a collection of highly customizable, zero-dependency UI components for React, designed for seamless integration into your projects. Each component is crafted with attention to detail, ensuring ease of use, flexibility, and visual appeal.

## 📚 Documentation

Explore our comprehensive documentation to learn how to get started, discover available components, and find code examples:

- 📖 [Flux UI Kit Documentation](https://flux.rickhuijser.com)

## 🚀 Getting Started

### Introduction

Flux UI Kit provides a suite of reusable, copy-paste-ready UI components that can be directly integrated into your React applications. No need for additional dependencies or complex setups. Just copy the code and start building!

### Current Components

- **Alert:** Displays contextual feedback messages.
- **Avatar:** A UI element to represent a user.
- **Badge:** Small count and labeling component.
- **Button:** Customizable buttons with various styles and variants.
- **Card:** Versatile card components for displaying content.
- **Checkbox:** A checkbox input element for binary choices.
- **Choicebox:** Group of selectable options for forms.
- **Context Menu:** Menu triggered by right-click or similar actions.
- **Dialog:** Modal dialog components for user interactions.
- **Input:** Styled input fields for user input.
- **Separator:** Dividers for visual separation of content.

### Planned Components

- **Collapsible:** Expandable and collapsible content sections.
- **Drawer:** Side panel for navigation or additional content.
- **Empty State:** Placeholder for empty data sets.
- **Error:** Display error messages or states.
- **Grid:** Grid layout components.
- **Gauge:** A circular gauge to represent values.
- **Loading Dots:** Animated dots indicating loading state.
- **Modal:** Pop-up modal for various use cases.
- **Note:** Highlighted notes or tips.
- **Skeleton:** Placeholder skeleton for loading content.
- **Snippet:** Code snippet component.
- **Status Dot:** Indicators for statuses or conditions.
- **Table:** Data table with sorting and pagination.
- **Tabs:** Tabbed navigation component.
- **Textarea:** Multi-line text input field.
- **Theme Switcher:** Toggle between light and dark themes.
- **Toast:** Notification toasts for alerts.
- **Toggle:** Toggle switch for binary choices.
- **Tooltip:** Tooltip for additional information on hover.
- **Window:** Simulated window-like containers.
- **Radio Button:** Radio button input for selecting one of several options.
- **Listbox:** List of selectable items.
- **Dropdown:** Dropdown menu for selections.
- **Data Table:** Advanced table with data manipulation features.
- **Select:** Drop-down select input for forms.

### Quick Start

1. **Copy the Component Code:** Navigate to the [documentation site](https://flux.rickhuijser.com) and choose the component you need.
2. **Paste into Your Project:** Add the copied component code directly into your React project.
3. **Customize as Needed:** Adjust the component’s styles and behavior as per your requirements.

### Example

```tsx
import Button from "./components/button/button";

function App() {
    return (
        <div>
            <Button variant="default" color="indigo">Click Me!</Button>
        </div>
    );
}
```

## 📦 Installation

Although you can copy-paste the components directly, you’ll need to install **Tailwind CSS** and **classnames** to ensure proper styling and functionality.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Step-by-Step Installation

1. **Install Tailwind CSS:**

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

2. **Install classnames:**

    ```bash
    npm install classnames
    ```

3. **Configure Tailwind CSS:**

    In `tailwind.config.js`, add your content directories:

    ```js
    module.exports = {
        content: ["./src/**/*.{js,ts,jsx,tsx}"],
        darkMode: 'class', // or 'media'
        theme: {
            extend: {
                colors: {
                    background: 'var(--color-background)',
                    text: 'var(--color-text)',
                    primary: 'var(--color-primary)',
                    secondary: 'var(--color-secondary)',
                    accent: 'var(--color-accent)',
                    border: 'var(--color-border)',
                    link: 'var(--color-link)',
                },
            },
        },
        plugins: [],
    }
    ```

4. **Include Tailwind CSS in Your Styles:**

    Create or update your main CSS file with the following:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :root {
      --color-background: var(--color-background-light);
      --color-text: var(--color-text-light);
      --color-primary: var(--color-primary-light);
      --color-secondary: var(--color-secondary-light);
      --color-accent: var(--color-accent-light);
      --color-border: var(--color-border-light);
      --color-link: var(--color-link-light);

      --color-background-light: #ffffff;
      --color-text-light: #212529;
      --color-primary-light: #007bff;
      --color-secondary-light: #f4f4f6;
      --color-accent-light: #ffc107;
      --color-border-light: #e9ecef;
      --color-link-light: #007bff;

      --color-background-dark: #1a1a1a;
      --color-text-dark: #f8f9fa;
      --color-primary-dark: #0d6efd;
      --color-secondary-dark: #262628;
      --color-accent-dark: #ffc107;
      --color-border-dark: #495057;
      --color-link-dark: #66b2ff;
    }

    [data-theme="dark"],
    .dark {
      --color-background: var(--color-background-dark);
      --color-text: var(--color-text-dark);
      --color-primary: var(--color-primary-dark);
      --color-secondary: var(--color-secondary-dark);
      --color-accent: var(--color-accent-dark);
      --color-border: var(--color-border-dark);
      --color-link: var(--color-link-dark);
    }
    ```

## 🛠️ Development

### Setting Up the Repository

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/R1ck404/flux-uikit.git
    cd flux-uikit
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the Development Server:**

    ```bash
    npm run dev
    ```

### Contribution Guidelines

We welcome contributions! Please refer to our [contribution guidelines](CONTRIBUTING.md) for more details.

- Fork the repository.
- Create a new branch (`git checkout -b feature-branch`).
- Make your changes.
- Commit your changes (`git commit -m 'Add new feature'`).
- Push to the branch (`git push origin feature-branch`).
- Open a pull request.

## ⚠️ Caveats

The UI components are designed with high quality and usability in mind. However, the documentation code behind the site might not be up to the same standard. While using or contributing to the documentation, you may encounter areas needing improvements or fixes. We appreciate any feedback and contributions to enhance the overall quality.

## 📞 Support

If you encounter any issues or have questions, feel free to open an issue on GitHub or contact us directly via the [My portfolio](https://rickhuijser.com/contact).

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Happy coding! 🚀

---

### [Flux UI Kit Documentation](https://flux.rickhuijser.com)

---

Feel free to customize this README as per your project specifics and preferences. This template aims to provide a comprehensive overview while highlighting key features and steps to get started with the Flux UI Kit.
