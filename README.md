# My Portfolio

Welcome to my personal portfolio project, built with [_Next.js_](https://nextjs.org/), a powerful React framework for building modern web applications. This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). I created this inspired from [Lama Dev's Portfolio Video](https://www.youtube.com/watch?v=DJaZUFK8Kv4&t=5303s&ab_channel=LamaDev) and [accompanying code](https://github.com/safak/next-animated-portfolio/).

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/avishek-15/avishek-portfolio.git
   cd avishek-portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   This will start the development server and you can view your portfolio by navigating to [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:

   ```bash
   npm run build
   ```

   This command will create an optimized production build of your portfolio.

5. **Start the production server**:

   ```bash
   npm start
   ```

   After building, you can start the production server to serve your optimized portfolio.

## Project Structure

The project structure is organized as follows:

```
avishek-portfolio/
├── public/
├── components/
├── app/
│   ├── favicon.ico
│   ├── about/
│   ├── contact/
│   ├── portfolio/
│   └── page.js
├── .gitignore
├── next.config.mjs
├── package.json
└── README.md
```

- **public/**: Contains static assets like images and favicon.
- **components/**: Houses reusable React components.
- **app/**: Contains the main pages of your portfolio.
- **app/globals.css**: Includes global and component-specific styles.

## Customization

To customize your portfolio, you can modify the following files:

- **app/page.js**: The main landing page of your portfolio.
- **components/**: Customize or add new components as needed.
- **app/globals.css**: Global styles for your portfolio.
- **public/**: Replace with your own images.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Contributions are always welcome!

## License

This project is licensed under the MIT License.

---

Thank you for checking out my portfolio! If you have any questions or need further assistance, please don't hesitate to reach out.
