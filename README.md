# Personal Profile

A personal profile website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

The deployment workflow (`.github/workflows/deploy.yml`) will automatically:

1. Build the project when you push to `main` or `master` branch
2. Deploy the built files to GitHub Pages
3. Make your site available at: `https://[your-username].github.io/personal-profile/`

### Manual Deployment

To manually trigger a deployment:

1. Go to your repository on GitHub
2. Navigate to **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow**

### Setup Requirements

Before the first deployment, make sure to:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"

2. **Grant permissions** to the workflow:
   - Go to Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"

## 🛠️ Development

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## 📁 Project Structure

```
personal-profile/
├── .github/workflows/    # GitHub Actions workflows
├── public/              # Static assets
├── src/                 # Source code
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Ant Design** - UI components
- **React Icons** - Icon library

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
