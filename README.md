# Development Goals for ACM Chapter Website

## Website Structure

### Landing Page
- **Header**:
  - Links: About, Team, Events, Leaderboard
  - Button: Visit(/), Join Us (/)
- **Hero Section**:
  - Introduction to ACM Chapter
- **Marquee**:
  - Scrolling news updates or announcements
- **Showcase**:
  - Sections for:
    - Workshops
    - Competitions & Hackathons
    - Guest Lectures
    - Collaborations & Opportunities
- **Upcoming Events**: Display cards for future events.
- **Testimonials**: Member and participant reviews.
- **Join Membership**: List benefits and provide a form link.
- **FAQ**: Answer common queries.
- **Footer**:
  - Social Links
  - Quick Links

### About Us Page
- **Header**:
  - Links: About, Team, Events, Leaderboard
  - Buttons: Visit ACM (/), Join Membership (/)
- **About Us Section**:
  - Mission, Vision, Values, and History of the ACM Chapter.
- **How to Get Involved**:
  - Join Membership details
  - Benefits of joining
  - Form link
- **Footer**: Standard footer with social links and quick links.

### Meet the Team Page
- **Header**:
  - Links: About, Team, Events, Leaderboard
  - Buttons: Visit ACM (/), Join Membership (/)
- **Team Section**:
  - Categories: Mentors, Board, Volunteers
  - Individual cards with name, position, and social links (LinkedIn, Twitter, GitHub).
- **Footer**: Standard footer with social links and quick links.

### Events Page
- **Header**:
  - Links: About, Team, Events, Leaderboard
  - Buttons: Visit ACM (/), Join Membership (/)
- **Upcoming Events**: List and cards for future events.
- **Past Events**: Archive of past events.
- **Footer**: Standard footer with social links and quick links.

### Leaderboard Page
- **Header**:
  - Links: About, Team, Events, Leaderboard
- **Ranks**: Display leaderboard rankings.
- **Footer**: Standard footer with social links and quick links.

## Editing Guide for GitHub Repository

### Project Overview
This is a Next.js project designed for the ACM Chapter website. The site structure supports scalability and dynamic updates.

### Getting Started

#### Local Development
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Editing the Content

- To edit or add data, navigate to the respective Data file in the `data` directory.

#### Landing Page
- File: `app/page.tsx`
- Key sections:
  - Hero Section: Update text and images.
  - Marquee: Add news items.
  - Showcase: Edit workshops, hackathons, guest lectures, etc.
  - Upcoming Events: Add event details.
  - Recent Achievements: Update milestone content.
  - Testimonials: Add or modify testimonials.

#### About Us Page
- File: `app/about/page.tsx`
- Key sections:
  - Mission, Vision, Values: Update text content.
  - How to Get Involved: Edit membership benefits and form link.

#### Meet the Team Page
- File: `app/team/page.tsx`
- Key sections:
  - Team Categories: Update mentors, board, and volunteers.
  - Social Links: Ensure links to LinkedIn, Twitter, and GitHub are accurate.

#### Events Page
- File: `app/events/page.tsx`
- Key sections:
  - Upcoming Events: Add new event details. [Todo]
  - Past Events: Archive completed events. [Todo]

#### Leaderboard Page
- File: `app/leaderboard/page.tsx`
- Key sections:
  - Rankings: Update user rankings dynamically. [Todo]

### Deployment
The website is deployed using Vercel.
1. Push changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
2. Changes will automatically trigger a deployment on [Vercel](https://vercel.com).

### Resources
- **Next.js Documentation**: Learn more about [Next.js](https://nextjs.org/docs).
- **Tailwind CSS Documentation**: Reference for [Tailwind CSS](https://tailwindcss.com/docs).
- **Vercel Deployment Guide**: Details on [deploying with Vercel](https://vercel.com/docs).

### Contact
For issues or feature requests, contact the team at `acm@university.edu` or open an issue on GitHub.

