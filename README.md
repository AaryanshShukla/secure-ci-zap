# 🔐 Secure CI/CD Pipeline with OWASP ZAP

This project showcases an automated security testing pipeline integrated into a Node.js web app using OWASP ZAP. It demonstrates a DevSecOps workflow that detects web vulnerabilities dynamically (DAST) during development.

---

## 🧰 Tech Stack

- **Node.js + Express** — Sample vulnerable web app  
- **OWASP ZAP** — Dynamic Application Security Testing (DAST)  
- **GitHub Actions** — CI/CD pipeline integration  
- **Docker** — Containerized ZAP execution  
- **ZAP CLI (zap-baseline.py)** — Scripted scans  

---

## 🚀 Objectives

- Run automated ZAP scans during development and pull requests  
- Identify critical issues like:  
  - ❌ Reflected/DOM XSS  
  - 🔓 Missing HTTP security headers  
  - 🏷️ Info leakage via server responses  
- Generate and archive reports (`HTML` + `PDF`) for audit trail  

---

## ⚙️ Setup & Usage

### 📦 Install & Run App Locally

```bash
git clone https://github.com/AaryanshShukla/secure-ci-zap.git
cd secure-ci-zap
npm install
npm start
```

This launches the Node.js app locally at [http://localhost:3000](http://localhost:3000)

---

### 🔍 Run OWASP ZAP Locally via Docker

Make sure [Docker](https://docs.docker.com/get-docker/) is installed.

Run a **baseline scan** of your local app:

```bash
docker run --rm -v "${PWD}:/zap/wrk" --network="host" ghcr.io/zaproxy/zaproxy:stable \
  zap-baseline.py -t http://host.docker.internal:3000 -r zap_report.html
```

The scan report (`zap_report.html`) will be saved in your project root.

---

## 🧪 CI/CD Pipeline

The GitHub Actions workflow:

- Installs & launches the Node.js app  
- Executes a headless OWASP ZAP scan  
- Archives the scan report as a build artifact  
- ✅ Triggered on `pull_request` to `main`  

🧾 See workflow file: `.github/workflows/zap-scan.yml`

---

## 🛡️ Key Findings

| Risk Category                  | Description                                        |
|-------------------------------|----------------------------------------------------|
| ❌ Missing Headers             | X-Content-Type, CSP, Permissions Policy            |
| 🧪 XSS (Reflected + DOM)      | Triggered via special payloads in URL fragments    |
| 🧾 Server Info Leak            | X-Powered-By header and missing CSP fallback       |
| ⚠️ Spectre Isolation           | Weak site isolation mechanisms reported            |

---

## 📄 Report

📊 View the full ZAP Scan Report here:  
➡️ `ZAP Scanning Report.pdf`

---

## ✍️ Author

**Aaryansh Shukla**  
📫 [@AaryanshShukla](https://github.com/AaryanshShukla)  
🛡️ DevSecOps & Security Automation Enthusiast

---

## 🧠 Learnings

- Hands-on with OWASP ZAP CLI and Docker integration  
- How CI tools like GitHub Actions support security gates  
- Reading, filtering, and prioritizing real vulnerability alerts  
- Structuring artifacts and outputs for transparency  

---

## ✅ To-Do / Future Work

- [ ] Integrate authenticated scans with context files  
- [ ] Expand to include SAST (e.g., ESLint security rules)  
- [ ] Hook alerts to Slack or security dashboards  
<!-- Triggering workflow -->
