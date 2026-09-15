# Deloitte Interview

Dedicated interview preparation build for **Deloitte — Technology & Transformation | ET&P: Finance Transformation | GBS (Analyst)**.

## Core features
- Built-in Deloitte role/JD/interview context
- Recruiter-ready **SAY THIS** answer first
- Deloitte context + detailed explanation + follow-up readiness
- Ultra Session with rolling in-memory transcript context
- Local high-frequency interview answer engine
- Optional Gemini fallback for arbitrary questions via `GEMINI_API_KEY`
- No Supabase, no localStorage, no user profile database

## Privacy
Ultra session data exists only in browser memory and is cleared on refresh/close. Do not commit secrets or private documents to the public repository.

## Optional AI fallback
Add `GEMINI_API_KEY` as a Vercel environment variable. Without it, the built-in answer engine still handles curated Deloitte and technical questions and uses a safe fallback for unknown questions.

## Source-of-truth rules
The app intentionally does not invent CGPA, project architecture/metrics, ERP/client experience, stakeholder stories or behavioral examples that have not been verified.