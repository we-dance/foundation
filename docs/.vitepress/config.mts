import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WeDance HQ",
  description: "Organization documentation",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Handbook", link: "/handbook/" },
      { text: "User Docs", link: "/user-docs/" },
    ],

    sidebar: {
      "/handbook/": [
        {
          text: "Foundation",
          items: [
            { text: "Organization Canvas", link: "/handbook/organization" },
            { text: "Brand Guidelines", link: "/handbook/brand" },
            { text: "Mission & Values", link: "/handbook/mission-values" },
            { text: "Code of Conduct", link: "/handbook/code-of-conduct" },
          ],
        },
        {
          text: "Team",
          items: [
            { text: "Onboarding", link: "/handbook/onboarding" },
            { text: "Roles & Responsibilities", link: "/handbook/roles" },
            { text: "Communication", link: "/handbook/communication" },
            { text: "Decision Making", link: "/handbook/decision-making" },
            { text: "Performance & Growth", link: "/handbook/performance" },
          ],
        },
        {
          text: "Operations",
          items: [
            { text: "OKRs & Goals", link: "/handbook/okrs" },
            {
              text: "Development Workflow",
              link: "/handbook/development-workflow",
            },
            { text: "Product Roadmap", link: "/handbook/roadmap" },
            { text: "Release Process", link: "/handbook/releases" },
            { text: "Quality Assurance", link: "/handbook/qa" },
            { text: "Security Guidelines", link: "/handbook/security" },
          ],
        },
        {
          text: "Business",
          items: [
            { text: "Legal & Compliance", link: "/handbook/legal" },
            { text: "Financial Planning", link: "/handbook/finances" },
            { text: "Marketing Strategy", link: "/handbook/marketing" },
            { text: "Partnerships", link: "/handbook/partnerships" },
            { text: "Growth Metrics", link: "/handbook/metrics" },
          ],
        },
        {
          text: "Community",
          items: [
            {
              text: "Community Management",
              link: "/handbook/community-management",
            },
            { text: "Ambassador Program", link: "/handbook/ambassadors" },
            { text: "Events & Meetups", link: "/handbook/events" },
            { text: "Content Strategy", link: "/handbook/content" },
            { text: "Moderation Guidelines", link: "/handbook/moderation" },
          ],
        },
        {
          text: "Technical",
          items: [
            { text: "Architecture Overview", link: "/handbook/architecture" },
            { text: "API Documentation", link: "/handbook/api" },
            { text: "Database Schema", link: "/handbook/database" },
            { text: "Infrastructure", link: "/handbook/infrastructure" },
            { text: "Monitoring & Analytics", link: "/handbook/monitoring" },
          ],
        },
      ],
      "/user-docs/": [
        {
          text: "Getting Started",
          items: [
            { text: "Welcome to WeDance", link: "/user-docs/" },
            {
              text: "Creating Your Account",
              link: "/user-docs/getting-started/account",
            },
            {
              text: "Profile Setup",
              link: "/user-docs/getting-started/profile",
            },
            {
              text: "Finding Your First Event",
              link: "/user-docs/getting-started/first-event",
            },
          ],
        },
        {
          text: "For Event Organizers",
          items: [
            { text: "Organizer Overview", link: "/user-docs/organizers/" },
            {
              text: "Creating Events",
              link: "/user-docs/organizers/creating-events",
            },
            {
              text: "Event Configuration",
              link: "/user-docs/organizers/configuration",
            },
            {
              text: "Ticketing & Payments",
              link: "/user-docs/organizers/ticketing",
            },
            {
              text: "Promotion & Marketing",
              link: "/user-docs/organizers/promotion",
            },
            {
              text: "Managing Attendees",
              link: "/user-docs/organizers/attendees",
            },
            {
              text: "Analytics & Insights",
              link: "/user-docs/organizers/analytics",
            },
            {
              text: "Best Practices",
              link: "/user-docs/organizers/best-practices",
            },
          ],
        },
        {
          text: "For Dancers",
          items: [
            { text: "Dancer Guide", link: "/user-docs/dancers/" },
            {
              text: "Finding Events",
              link: "/user-docs/dancers/finding-events",
            },
            {
              text: "Partner Finding",
              link: "/user-docs/dancers/partner-finding",
            },
            { text: "Booking Classes", link: "/user-docs/dancers/classes" },
            {
              text: "Community Features",
              link: "/user-docs/dancers/community",
            },
            { text: "Safety & Trust", link: "/user-docs/dancers/safety" },
          ],
        },
        {
          text: "For Artists & Teachers",
          items: [
            { text: "Artist Guide", link: "/user-docs/artists/" },
            {
              text: "Creating Your Profile",
              link: "/user-docs/artists/profile",
            },
            { text: "Offering Classes", link: "/user-docs/artists/classes" },
            { text: "Booking Management", link: "/user-docs/artists/bookings" },
            { text: "Content Creation", link: "/user-docs/artists/content" },
            { text: "Monetization", link: "/user-docs/artists/monetization" },
          ],
        },
        {
          text: "For Venues",
          items: [
            { text: "Venue Guide", link: "/user-docs/venues/" },
            { text: "Listing Your Space", link: "/user-docs/venues/listing" },
            { text: "Managing Bookings", link: "/user-docs/venues/bookings" },
            { text: "Venue Promotion", link: "/user-docs/venues/promotion" },
            {
              text: "Partnership Opportunities",
              link: "/user-docs/venues/partnerships",
            },
          ],
        },
        {
          text: "Advanced Features",
          items: [
            {
              text: "White-label Solutions",
              link: "/user-docs/advanced/white-label",
            },
            { text: "API Integration", link: "/user-docs/advanced/api" },
            {
              text: "Custom Communities",
              link: "/user-docs/advanced/communities",
            },
            {
              text: "Advanced Analytics",
              link: "/user-docs/advanced/analytics",
            },
          ],
        },
        {
          text: "Support",
          items: [
            { text: "FAQ", link: "/user-docs/support/faq" },
            {
              text: "Troubleshooting",
              link: "/user-docs/support/troubleshooting",
            },
            { text: "Contact Us", link: "/user-docs/support/contact" },
            {
              text: "Feature Requests",
              link: "/user-docs/support/feature-requests",
            },
          ],
        },
      ],
      "/": [
        {
          text: "Strategy",
          items: [
            { text: "Organization", link: "/organization" },
            { text: "Brand", link: "/brand" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
