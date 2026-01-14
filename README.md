# Job Finder


A modern, full-stack job board application built with **Next.js 16**, **Drizzle ORM**, and **Clerk Authentication**. This platform allows users to post job opportunities, browse listings, and manage job applications with a focus on speed and type safety.


<img width="100%" height="auto" alt="Screenshot (320)" src="https://github.com/user-attachments/assets/4893635e-8caf-49c8-8806-6f7114143cc0" />

  <img width="49.7%" height="auto" alt="Screenshot (321)" src="https://github.com/user-attachments/assets/db0db9fa-abb2-444d-846e-d9cd22a09576" />
  <img width="49.7%" height="auto" alt="Screenshot (322)" src="https://github.com/user-attachments/assets/02acf194-f0c1-4503-839b-a70e298af24b" />


## ⚙️ Tech stack

- **Framework:** ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
- **Authentication:** ![Clerk](https://img.shields.io/badge/Clerk-3D3DFF?logo=clerk&logoColor=white)
- **Database ORM:** ![Drizzle ORM](https://img.shields.io/badge/Drizzle%20ORM-FFDA44?logo=drizzle&logoColor=black)
- **Database Provider:** ![Neon](https://img.shields.io/badge/Neon-00E599?logo=postgresql&logoColor=white)
- **Styling:** ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white) ![Lucide](https://img.shields.io/badge/Lucide-000000?logo=react&logoColor=61DAFB)
- **Forms:** ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white) ![Zod](https://img.shields.io/badge/Zod-3066BE?logo=zod&logoColor=white)
- **UI Components:** ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-111111?logo=radixui&logoColor=white) ![Sonner](https://img.shields.io/badge/Sonner-FF6B6B?logo=react&logoColor=white)


## ✨ Features

* **User Authentication:** Secure sign-in and sign-up flows via Clerk.
* **Job Posting:** Create detailed job listings including:
* Job Type (Full-time, Part-time, Contract, Internship).
* Experience Level (Entry Level to Manager).
* Salary ranges and application URLs.


* **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
* **Type Safety:** End-to-end type safety using TypeScript and Drizzle's schema inference.

## 🛠️ Getting Started

### Prerequisites

* Node.js 18+
* A PostgreSQL database (Neon recommended)
* Clerk API Keys

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/thilinajayamal/job-finder.git
cd job-finder

```


2. **Install dependencies:**
```bash
npm install

```


3. **Environment Variables:**
Create a `.env.local` file in the root directory and add the following:
```env
DATABASE_URL=your_postgresql_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

```


4. **Database Setup:**
Push your schema to the database:
```bash
npx drizzle-kit push

```


5. **Run Development Server:**
```bash
npm run dev

```


Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the app.

## 🗄️ Database Schema

The application uses a PostgreSQL database with the following primary table:

* **Jobs Table:** Stores `title`, `company`, `location`, `jobType`, `experienceLevel`, `salary`, `description`, and `applicationUrl`.
* **Enums:** Specifically handles `job_type` and `experience_level` to ensure data integrity.

## 🤝 How to Contribute

We welcome contributions! Please follow these steps:

1. **Fork the Project:** Create your own fork of the repository.
2. **Create a Branch:** Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. **Commit Changes:** Ensure your code follows the project's linting rules (`git commit -m 'Add some AmazingFeature'`).
4. **Push to Branch:** Push to your fork (`git push origin feature/AmazingFeature`).
5. **Open a Pull Request:** Describe your changes and submit for review.


## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
