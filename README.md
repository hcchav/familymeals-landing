# FamilyMeals Landing Page

Simple validation landing page for the FamilyMeals app. Collects email signups for the waitlist.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Resend** - Email collection
- **Lucide React** - Icons

## Setup

### 1. Install Dependencies

```bash
cd familymeals-landing
pnpm install
```

### 2. Set Up Resend

1. Go to [resend.com](https://resend.com) and create an account
2. Create an API key
3. Create an audience (for collecting emails)
4. Copy the audience ID

### 3. Environment Variables

Create a `.env.local` file:

```bash
RESEND_API_KEY=re_your_api_key_here
RESEND_AUDIENCE_ID=your_audience_id_here
```

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Validation Goals (Week 1)

- [ ] Run $100 Facebook ads targeting budget-conscious parents
- [ ] Target: 5% signup rate (100 visitors → 5 signups)
- [ ] Success metric: 50+ email signups in first week

## Features

- **Hero Section** - Clear value prop: "Feed Your Family for $100/Week"
- **Email Signup** - Dual CTAs (top and bottom)
- **Feature List** - 12 key features from validation plan
- **Pricing** - Simple $3.99/month pricing
- **Social Proof** - Budget-first, family profiles, time-saving benefits

## Next Steps

After collecting 50-100 emails:
1. Post in r/EatCheapAndHealthy for feedback
2. Manually create meal plans for 10 families
3. Build MVP based on feedback
