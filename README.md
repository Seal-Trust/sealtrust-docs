<p align="center">
  <img src="https://raw.githubusercontent.com/Seal-Trust/seal-media/main/logo.svg" alt="SealTrust Logo" width="80"/>
</p>

# SealTrust Documentation

Official documentation site for SealTrust - Cryptographic Verification and Encrypted Storage for AI Training Datasets.

<p align="center">
  <img src="https://raw.githubusercontent.com/Seal-Trust/seal-media/main/sui-logo.svg" alt="Sui" height="24"/>
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/Seal-Trust/seal-media/main/walrus-logo.svg" alt="Walrus" height="24"/>
  &nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/Seal-Trust/seal-media/main/seal-logo.svg" alt="Seal" height="24"/>
</p>

---

## Overview

This repository contains the documentation website for SealTrust, built with [Nextra](https://nextra.site/).

**Live Site:** [docs.sealtrust.app](https://docs.sealtrust.app)

---

## Local Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build
```

---

## Documentation Structure

```
content/
├── index.mdx                 # Home page
├── getting-started/
│   ├── index.mdx            # Quick start guide
│   └── installation.mdx     # Installation instructions
├── guides/
│   ├── register-dataset.mdx # Upload & register datasets
│   ├── download-decrypt.mdx # Download & decrypt datasets
│   ├── manage-access.mdx    # Access control management
│   └── verify-dataset.mdx   # Verify dataset integrity
├── architecture/
│   └── index.mdx            # System architecture
├── contracts/
│   └── index.mdx            # Smart contract reference
└── api-reference/
    └── index.mdx            # API documentation
```

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Documentation:** [Nextra](https://nextra.site/)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## Related Repositories

| Repository | Description |
|------------|-------------|
| [sealtrust-frontend](https://github.com/Seal-Trust/sealtrust-frontend) | Next.js web application |
| [sealtrust-contracts](https://github.com/Seal-Trust/sealtrust-contracts) | Sui Move smart contracts |
| [sealtrust-enclave](https://github.com/Seal-Trust/sealtrust-enclave) | Nautilus TEE verification service |

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes in `content/`
4. Submit a pull request

---

## License

MIT
