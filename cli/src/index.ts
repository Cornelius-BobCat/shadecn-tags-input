#!/usr/bin/env node

import { Command } from "commander";
import { join } from "path";
import { copyFile, mkdir, access } from "fs/promises";
import chalk from "chalk";

// Get the package root directory
const getPackageRoot = () => {
  try {
    const packagePath = require.resolve(
      "@vincentcornelius/shadecn-tags-input/package.json"
    );
    console.log(chalk.blue("Package path:"), packagePath);
    return join(packagePath, "..");
  } catch (error) {
    console.error(chalk.red("Error finding package:"), error.message);
    throw error;
  }
};

const program = new Command();

const checkShadcnComponent = async (componentName: string) => {
  try {
    await access(
      join(process.cwd(), "components", "ui", `${componentName}.tsx`)
    );
    return true;
  } catch {
    return false;
  }
};

const checkDependency = (packageName: string): boolean => {
  try {
    require.resolve(packageName, { paths: [process.cwd()] });
    return true;
  } catch {
    return false;
  }
};

program
  .name("shadecn-tags-input")
  .description("CLI to add tags input component to your project")
  .version("1.2.0");

program
  .command("add")
  .description("Add tags input component to your project")
  .action(async () => {
    try {
      // Check for required shadcn components
      const hasBadge = await checkShadcnComponent("badge");
      const hasInput = await checkShadcnComponent("input");
      const hasLucide = checkDependency("lucide-react");

      const missingDeps: string[] = [];
      if (!hasBadge) missingDeps.push("badge component");
      if (!hasInput) missingDeps.push("input component");
      if (!hasLucide) missingDeps.push("lucide-react");

      if (missingDeps.length > 0) {
        console.log(chalk.yellow("⚠️  Missing requirements:"));
        missingDeps.forEach((dep) => console.log(chalk.yellow(`- ${dep}`)));
        console.log();

        if (!hasLucide) {
          console.log(chalk.blue("Install lucide-react:"));
          console.log(chalk.gray("pnpm add lucide-react"));
          console.log(chalk.gray("# or"));
          console.log(chalk.gray("npm install lucide-react"));
          console.log();
        }

        if (!hasBadge || !hasInput) {
          console.log(chalk.blue("First, make sure shadcn is initialized:"));
          console.log(chalk.gray("pnpm dlx shadcn@latest init"));
          console.log(chalk.gray("# or with defaults"));
          console.log(chalk.gray("pnpm dlx shadcn@latest init -d"));
          console.log();
          console.log(chalk.blue("Then install the missing components:"));
          if (!hasBadge)
            console.log(chalk.gray("pnpm dlx shadcn@latest add badge"));
          if (!hasInput)
            console.log(chalk.gray("pnpm dlx shadcn@latest add input"));
        }
        console.log();
        process.exit(1);
      }

      // Create components/ui directory if it doesn't exist
      const targetDir = join(process.cwd(), "components", "ui");
      await mkdir(targetDir, { recursive: true });
      console.log(chalk.blue("Created directory:"), targetDir);

      const packageRoot = getPackageRoot();
      const sourcePath = join(
        packageRoot,
        "components",
        "ui",
        "tags-input.tsx"
      );
      const targetPath = join(
        process.cwd(),
        "components",
        "ui",
        "tags-input.tsx"
      );

      console.log(chalk.blue("Source path:"), sourcePath);
      console.log(chalk.blue("Target path:"), targetPath);

      // Copy the component
      await copyFile(sourcePath, targetPath);

      console.log();
      console.log(
        chalk.green("✓"),
        "Added:",
        chalk.cyan("components/ui/tags-input.tsx")
      );
      console.log();
      console.log(chalk.blue("Import the component in your code:"));
      console.log(
        chalk.gray(`import { TagsInput } from "@/components/ui/tags-input"`)
      );
      console.log();
      console.log(chalk.blue("Example usage:"));
      console.log(
        chalk.gray(`
const [tags, setTags] = useState([]);

<TagsInput
  value={tags}
  onChange={setTags}
  suggestions={[
    { id: "1", name: "React" },
    { id: "2", name: "TypeScript" }
  ]}
/>`)
      );
    } catch (error) {
      console.error(chalk.red("Error:"), error.message);
      console.error(chalk.red("Stack:"), error.stack);
      process.exit(1);
    }
  });

program.parse(process.argv);
