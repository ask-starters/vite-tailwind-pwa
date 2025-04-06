## What is this?
Starter code for project vite-tailwind-pwa

## How to deploy in cloudflare pages

### Build Configuration
- Build command: `bun install && bun run build`
- Build output: `dist`
- Root directory:
- Build comments: `Enabled`

### Environment Variables
| Name                    | Value  | Comments                                |
| ----------------------- | ------ | --------------------------------------- |
| NODE_VERSION            | 22     | Latest Stable Version                   |
| SKIP_DEPENDENCY_INSTALL | true   | To enable Bun installing instead of npm |
| BUN_VERSION             | 1.1.33 | Latest Release                          |