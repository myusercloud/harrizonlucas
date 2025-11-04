import { PrismaClient } from "@prisma/client";
import slugify from "slugify";

const prisma = new PrismaClient();

async function main() {
  const projects = [
    {
      title: "AI Portfolio Builder",
      description: "An AI-driven platform that generates developer portfolios automatically using prompts.",
      link: "https://github.com/harrizon/ai-portfolio",
    },
    {
      title: "DataVision Dashboard",
      description: "A React + Django dashboard for visualising KPIs and analytics in real-time.",
      link: "https://github.com/harrizon/datavision-dashboard",
    },
    {
      title: "SmartShop API",
      description: "A minimal Node.js API for managing products and categories in an e-commerce platform.",
      link: "https://github.com/harrizon/smartshop-api",
    },
    {
      title: "DevConnect Platform",
      description: "A social platform for developers to connect, share projects, and collaborate.",
      link: "https://github.com/harrizon/devconnect",
    },
    {
      title: "RoboLens Vision App",
      description: "An AI-based computer vision tool for object detection and image classification.",
      link: "https://github.com/harrizon/robolens",
    },
    {
      title: "Kotlin Expense Tracker",
      description: "An Android app built with Jetpack Compose for tracking personal expenses and budgets.",
      link: "https://github.com/harrizon/expense-tracker",
    },
    {
      title: "PyStream Recommender",
      description: "A Python-based music recommendation system powered by scikit-learn.",
      link: "https://github.com/harrizon/pystream",
    },
    {
      title: "LinearUI Kit",
      description: "A clean and modern UI component kit inspired by Linear and Vercel aesthetics.",
      link: "https://github.com/harrizon/linear-ui",
    },
  ];

  for (const p of projects) {
    const slug = slugify(p.title, { lower: true, strict: true });

    await prisma.project.upsert({
      where: { slug },
      update: {},
      create: { ...p, slug },
    });
  }

  console.log(`✅ Seeded successfully with ${projects.length} projects`);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
