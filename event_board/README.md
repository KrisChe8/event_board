# Events Platform

## Overview

**Events Platform** is a dynamic single-page application that allows businesses to share their events with the community, and lets community members sign up for events, participate, and add those events to their Google Calendar. The platform provides two user roles: business owners, who can create and manage events, and participants, who can explore and join events. This application is built with **React.js + Vite**, JavaScript, AXIOS, HTML, and CSS, and uses **Supabase** as the backend. User authentication is handled via **Google Authentication**.

## Features

- **Authentication**: Users can sign in via Google Authentication.
- **Google Calendar Integration**: Participants can easily add events to their Google Calendar.
- **Stripe Payments**: Users can buy tickets.

### Business Users:

- Create and manage corporate events.
- View both corporate (internal) and foreign (external API) events.
- Create new events by filling out a form. All fields are required except the image URL, which defaults if not provided.
- Error handling for incomplete form submissions.
- Manage "My Events" by editing or deleting them.

### Community Members/Participants:

- Browse corporate and foreign events.
- View detailed event cards by clicking on the event title.
- Add events to their Google Calendar with a single click.
- **Purchase tickets** for paid events using credit/debit cards via Stripe integration.
- Sort events by last added, event date, or event name.
- Track events they've signed up for, with the option to hide past events or show attended ones.

## Prerequisites

To run the **Events Platform**, ensure you have the following prerequisites installed:

- **React.js**: Version 16+
- **Node.js**: Version 12+ (for npm)
- **Stripe Account**: To handle payments during local testing.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KrisChe8/event_board/tree/main/event_board

   ```

2. Navigate to the project directory:
   ```bash
   cd event_board
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a .env file and add the necessary environment variables:

- Supabase credentials
- Google Authentication credentials
- Stripe Publisher Key (for payment integration)

To run the Stripe payment system locally, you'll need to create an account on Stripe and add your Stripe Publisher Key to the .env file.
You also would need to clone backend folder for stripe payments.

## Stripe Payment Integration

The platform allows participants to purchase tickets for paid events using their credit/debit card via Stripe. The backend implementation for handling Stripe payments can be found here: [Stripe Payment Backend](https://github.com/KrisChe8/stripe_backend).

To test payments locally, you'll need to:

1. Create an account on Stripe.
2. Add your Stripe Publisher Key in the .env file as described above.
3. Clone backend repo and follow the instructions there.

## Usage

To start the frontend server, run:

```bash
npm run dev
```

The server will start running at the specified port, typically localhost:3000.

## Deployed Version

You can check out the deployed version of the platform here: [Event Board](https://event-board-psi.vercel.app/)

### <u>To log in, please use the following email:</u>

Test user email: "eventboard.test.user@gmail.com"
<br/>
Password: "test1234!"

## Responsiveness

This app is fully responsive and can be used on different devices. The layout adjusts dynamically according to the screen width, offering a tailored experience on mobile, tablet, and desktop devices.

## Authentication & Google Calendar Integration

The platform uses Google Authentication for login. Due to the site being hosted on a free tier, only test users are authorized to log in using their Google accounts.
Once authenticated, users can easily integrate events into their Google Calendar.

## Tech Stack

Frontend: React.js + Vite, JavaScript, Axios, HTML, CSS.
Backend: Supabase.
Payment Integration: Stripe.
Authentication: GoogleAuth.
Calendar Integration: Google Calendar API.

## Known Limitations

Currently, only test users can authenticate via Google, as the app has not yet been submitted for OAuth verification. Additionally, to test payments locally, developers need to configure their own Stripe account and API keys.
