# Portfolio Static Web App - Chat Mode

A modern, responsive portfolio website built with React and optimized for Azure Static Web Apps.

## 🚀 Features

- **Modern Design**: Clean, professional portfolio layout
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Components**: Smooth animations and hover effects
- **Contact Form**: Functional contact form for inquiries
- **Azure Ready**: Optimized for Azure Static Web Apps deployment

## 🛠️ Tech Stack

- **Frontend**: React 18, CSS3, HTML5
- **Build Tool**: Create React App
- **Deployment**: Azure Static Web Apps
- **CLI**: Azure Static Web Apps CLI

## 📁 Project Structure

```
chatMode/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Contact.js & Contact.css
│   │   └── Footer.js & Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── swa-cli.config.json
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Azure Static Web Apps CLI

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```
   This will start the React development server at `http://localhost:3000`

3. **Start with Static Web Apps emulator**:
   ```bash
   npx swa start
   ```
   This will start the SWA emulator at `http://localhost:4280`

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🌐 Deployment to Azure

### Prerequisites

- Azure account
- Azure CLI installed and configured
- Azure Static Web Apps CLI

### Deploy to Azure

1. **Build the application**:
   ```bash
   npx swa build
   ```

2. **Deploy to Azure**:
   ```bash
   npx swa deploy --env production
   ```

3. **Follow the prompts** to configure your Azure resources.

### Configuration

The project includes a `swa-cli.config.json` file with the following configuration:

```json
{
  "configurations": {
    "chat-mode": {
      "appLocation": ".",
      "outputLocation": "build",
      "appBuildCommand": "npm run build",
      "appDevserverCommand": "npm start",
      "appDevserverUrl": "http://localhost:3000"
    }
  }
}
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`):
   - Change "Your Name" to your actual name
   - Update the title and description

2. **About Section** (`src/components/About.js`):
   - Update the about text
   - Modify the statistics
   - Add your photo

3. **Skills Section** (`src/components/Skills.js`):
   - Update the skills and proficiency levels
   - Modify the skill categories

4. **Projects Section** (`src/components/Projects.js`):
   - Replace with your actual projects
   - Update GitHub and demo links
   - Add project screenshots

5. **Contact Section** (`src/components/Contact.js`):
   - Update contact information
   - Modify social media links

6. **Footer** (`src/components/Footer.js`):
   - Update social media links
   - Change copyright information

### Styling

The project uses CSS modules and custom CSS. Main styling files:

- `src/App.css` - Global styles and utilities
- `src/index.css` - Base styles and resets
- Component-specific CSS files in `src/components/`

### Color Scheme

The default color scheme uses:
- Primary: `#667eea` to `#764ba2` (gradient)
- Secondary: `#ffd700` (gold)
- Background: `#f8f9fa` (light gray)
- Text: `#333` (dark gray)

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App
- `npx swa start` - Start Static Web Apps emulator
- `npx swa build` - Build with SWA CLI
- `npx swa deploy` - Deploy to Azure

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with Create React App
- Deployed on Azure Static Web Apps
- Icons and emojis from Unicode standards
- Design inspiration from modern portfolio trends

---

**Note**: Remember to update all placeholder content with your actual information before deploying to production!