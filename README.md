# OOPS CodeVault

A standalone, searchable C++ Object-Oriented Programming (OOPS) practical library and student resource, faithfully designed as the sibling website to [DSA CodeVault](https://dsa-codevault.vercel.app/).

**Live Reference:** [https://dsa-codevault.vercel.app/](https://dsa-codevault.vercel.app/)  
**GitHub Repository:** `prathamesh-lang/oops-codevault`  
**Deployment Target:** Vercel  

---

## 1. Project Overview

OOPS CodeVault provides an educational repository and interactive reference for all 10 core C++ Object-Oriented Programming practical assignments from the university syllabus (`OOP- Practical Problem Statement(1).pdf`).

Each practical has:
- Authentic, un-abbreviated problem statements.
- Verified, standalone C++ source code adhering to C++11.
- Step-by-step sequential algorithms formatted for student practical records (journal).
- Real, verified terminal outputs (including normal and exception execution paths).
- Interactive syntax-highlighted code viewers with working **Copy Code** and **Download `.cpp`** features.
- High-yield viva questions with technically rigorous answers.
- Breakdown of key classes, member functions, and common practical exam pitfalls.

---

## 2. Practical Syllabus Index

| # | Practical Title | Topic Category | Source File (`public/codes/`) | Verified |
| :---: | :--- | :--- | :--- | :---: |
| **Q1** | Complex Number using Operator Overloading | Operator Overloading | `Q1_Complex_Number.cpp` | Yes |
| **Q2** | Staff Management and Salary Slip | Class Design & Records | `Q2_Staff_Salary_Slip.cpp` | Yes |
| **Q3** | Publication, Book and Tape | Inheritance & Exceptions | `Q3_Publication_Book_Tape.cpp` | Yes |
| **Q4** | Matrix Abstract Data Type (ADT) | Class Design & ADT | `Q4_Matrix_ADT.cpp` | Yes |
| **Q5** | Constructors, Destructors & Multiple Inheritance | Constructors & Destructors | `Q5_Constructors_Multiple_Inheritance.cpp` | Yes |
| **Q6** | File Handling with Streams (`ofstream`/`ifstream`) | File Handling | `Q6_File_Handling.cpp` | Yes |
| **Q7** | Four Types of Inheritance | Inheritance | `Q7_Types_of_Inheritance.cpp` | Yes |
| **Q8** | Generic Library System using Class Templates | Templates & Generics | `Q8_Library_Class_Template.cpp` | Yes |
| **Q9** | State Population Lookup using Map Container | STL Containers | `Q9_Map_State_Population.cpp` | Yes |
| **Q10** | ATM Application Simulation & Exceptions | Exception Handling | `Q10_ATM_Exception_Handling.cpp` | Yes |

---

## 3. Technology Stack

- **Framework**: React 18, TypeScript, Vite 5
- **Styling**: Tailwind CSS (with complete Dark and Light theme support)
- **Routing**: React Router v6 (SPA with full history and `/practicals/:id` deep-linking)
- **Syntax Highlighting**: Prism.js (with custom JetBrains Mono line-numbered code theme)
- **Icons**: Lucide React
- **Deployment**: Vercel Static Hosting (with `vercel.json` SPA rewrites)

---

## 4. Local Installation & Development

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- Optional: `g++` (GCC 11+) to compile the practical `.cpp` files locally

### Clone and Install
```bash
git clone https://github.com/prathamesh-lang/oops-codevault.git
cd oops-codevault
npm install
```

### Run Local Development Server
```bash
npm run dev
```
The server will start at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Build output is generated into the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

### Run Automated Practical Verification Audit
```bash
npm run verify
```
This runs `scripts/verify_practicals.cjs`, which compiles all 10 `.cpp` files with `g++ -std=c++11 -Wall -Wextra`, checks data completeness, and ensures downloadable files match the data model.

---

## 5. Content & Source Code Architecture

```text
oops-codevault/
├── public/
│   ├── codes/                                  # Downloadable standalone .cpp files
│   │   ├── Q1_Complex_Number.cpp
│   │   ├── Q2_Staff_Salary_Slip.cpp
│   │   ├── Q3_Publication_Book_Tape.cpp
│   │   ├── Q4_Matrix_ADT.cpp
│   │   ├── Q5_Constructors_Multiple_Inheritance.cpp
│   │   ├── Q6_File_Handling.cpp
│   │   ├── Q7_Types_of_Inheritance.cpp
│   │   ├── Q8_Library_Class_Template.cpp
│   │   ├── Q9_Map_State_Population.cpp
│   │   └── Q10_ATM_Exception_Handling.cpp
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── CodeViewer.tsx                      # 4-tab code/algo/output/viva viewer
│   │   ├── Footer.tsx                          # Sibling-matched footer
│   │   ├── HeroSearch.tsx                      # Interactive floating search dropdown
│   │   ├── Navbar.tsx                          # Header, quick search trigger, dark toggle
│   │   └── PracticalCard.tsx                   # Grid and list view practical card
│   ├── context/
│   │   └── ThemeContext.tsx                    # Light/dark mode with localStorage
│   ├── data/
│   │   ├── practicals_1_to_5.ts                # Structured content for Q1 - Q5
│   │   ├── practicals_6_to_10.ts               # Structured content for Q6 - Q10
│   │   ├── practicals_data.ts                  # Merged export, colors, categories
│   │   └── types.ts                            # TypeScript schemas and models
│   ├── pages/
│   │   ├── AboutPage.tsx                       # Audit stats, breakdown, features, tech
│   │   ├── HomePage.tsx                        # Hero, stats, category cards, featured
│   │   ├── LibraryPage.tsx                     # 10 practicals search, filter, sort
│   │   ├── NotFoundPage.tsx                    # 404 page with return action
│   │   └── PracticalDetailPage.tsx             # Detail view, problem box, tabs, nav
│   ├── utils/
│   │   └── algorithms.ts                       # Helper algorithms retrieval
│   ├── App.tsx                                 # Router shell and navigation guards
│   ├── index.css                               # Tailwind tokens, Prism themes, scrollbars
│   └── main.tsx                                # Entrypoint mounting ThemeProvider
├── docs/
│   └── PRACTICAL_MAPPING.md                    # Authoritative syllabus mapping
├── scripts/
│   └── verify_practicals.cjs                   # Automated compilation & audit script
├── vercel.json                                 # Vercel SPA routing configuration
├── vite.config.ts                              # Vite bundle & chunk splitting config
├── tailwind.config.js                          # Theme colors & font definitions
└── package.json
```

---

## 6. How Source Files are Mapped and Downloaded

- Every practical's source file is stored statically in `public/codes/{filename}`.
- In `src/data/practicals_1_to_5.ts` and `practicals_6_to_10.ts`, the exact file contents are synchronized with the TypeScript data model.
- Clicking **Download .cpp** creates a direct client-side UTF-8 Blob containing the exact on-screen code and triggers a browser file download with the correct canonical name (e.g., `Q1_Complex_Number.cpp`).
- The static files in `public/codes/` are also served directly by Vercel at `/codes/{filename}` for direct curl or wget retrieval:
  ```bash
  curl -O https://<your-deployment>.vercel.app/codes/Q1_Complex_Number.cpp
  ```

---

## 7. How to Add or Update a Practical

1. Place the verified standalone `.cpp` file in `public/codes/`.
2. Update the corresponding TypeScript record in `src/data/practicals_1_to_5.ts` or `src/data/practicals_6_to_10.ts`.
3. Provide the:
   - `id`, `title`, `shortTitle`, `category`
   - `originalProblem`, `aim`, `concepts`, `operations`
   - `filename`, `sourceCode`, `lineCount`
   - `algorithm` (steps array and explanation)
   - `sampleOutput` (input description, raw terminal output, notes)
   - `vivaQuestions` (array of questions and answers)
   - `importantNotes` (common pitfalls)
   - `keyClassesAndFunctions` (identifiers and roles)
4. Run `npm run verify` to confirm compilation and data integrity.

---

## 8. Vercel Deployment Instructions

The project is pre-configured for instant zero-configuration deployment to Vercel.

### Vercel CLI Deployment
```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy to preview
vercel

# 4. Deploy to production
vercel --prod
```

### Vercel Dashboard Deployment
1. Push the repository to GitHub: `https://github.com/prathamesh-lang/oops-codevault.git`.
2. Open [vercel.com/new](https://vercel.com/new) and select `oops-codevault`.
3. Configure project settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

The included `vercel.json` ensures all client-side routes (e.g., `/practicals/3`) are redirected to `index.html` without returning 404 on page refresh.

---

## 9. Verification & Audit Results

- **Compiler**: MinGW GCC 16.2.0 (`g++ -std=c++11 -Wall -Wextra`)
- **Compilation Results**: 10 of 10 programs compile with 0 errors and 0 warnings.
- **Verification Script**: `npm run verify` passed (100%).
- **TypeScript**: `npx tsc --noEmit` passed (0 errors).
- **Vite Build**: `npm run build` succeeded in 8.1s.

---

## 10. License

Educational Open Source — MIT License.
