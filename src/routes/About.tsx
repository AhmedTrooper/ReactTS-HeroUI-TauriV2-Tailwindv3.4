import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

export default function About() {
  return (
    <div className="p-8">
      <Card className="max-w-xl mx-auto shadow-lg">
        <CardHeader>
          <h2 className="text-2xl font-semibold">About This App</h2>
        </CardHeader>
        <CardBody>
          <p className="text-base leading-relaxed">
            This desktop application is built using Tauri v2, React 18 with TypeScript, Tailwind CSS 3.4, Zustand for state management, and HeroUI for modern UI components. It supports light/dark mode and is optimized for performance and cross-platform compatibility.
          </p>
        </CardBody>
        <CardFooter>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Your Company. All rights reserved.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
