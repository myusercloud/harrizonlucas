import prisma from "../src/utils/prismaClient.js";

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "Portfolio Website",
        slug: "portfolio-website",
        description: "A sleek developer portfolio built with React, Node.js, and PostgreSQL.",
        link: "https://example.com/portfolio",
        image: "/uploads/1762307410403.png",
      },
      {
        title: "E-commerce Dashboard",
        slug: "ecommerce-dashboard",
        description: "Admin dashboard for managing products and orders.",
        link: "https://example.com/dashboard",
        image: "/uploads/sample2.png",
      },
      {
        title: "hackathon Website",
        slug: "hackathon-website",
        description: "A sleek developer portfolio built with React, Node.js, and PostgreSQL.",
        link: "https://example.com/portfolio",
        image: "/uploads/1762307410403.png",
      },
      {
        title: "data Dashboard",
        slug: "data-dashboard",
        description: "Admin dashboard for managing products and orders.",
        link: "https://example.com/dashboard",
        image: "/uploads/sample2.png",
      },
    ],
  });
  console.log("✅ Seeded projects successfully");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
