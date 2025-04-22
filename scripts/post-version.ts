import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const changedDirs = ["packages/shared-lib", "apps/service-a", "apps/service-b"];

for (const dir of changedDirs) {
  const pkg = JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf-8"));
  const target = pkg.publishTarget;

  if (target === "npm") {
    console.log(`→ Would publish ${pkg.name} to npm`);
    spawn(`echo " registry/${pkg.name}:${pkg.version}"`);
  }

  if (target === "docker") {
    console.log(`→ Would build Docker image for ${pkg.name}`);
    spawn(`echo " registry/${pkg.name}:${pkg.version}"`);
  }
}
