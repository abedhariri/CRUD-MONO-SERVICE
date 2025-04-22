import fs from "fs";
import path from "path";

const changedDirs = ["packages", "services"];

const releasePackages = (dirs: string[]) => {
  for (const dir of dirs) {
    const pkg = JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf-8"));
    const target = pkg.publishTarget;

    if (target === "npm") {
      console.log(`→ Would publish ${pkg.name} to npm`);
    }

    if (target === "docker") {
      console.log(`→ Would build Docker image for ${pkg.name}`);
    }
  }
};

for (const element of changedDirs) {
  const dirs = fs.readdirSync(element).map((entry) => {
    return path.join(element, entry);
  });
  releasePackages(dirs);
}
