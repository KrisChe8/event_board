# Events Platform

## Overview

**Events Platform** is a dynamic single-page application that allows businesses to share their events with the community, and lets community members sign up for events, participate, and add those events to their Google Calendar. The platform provides two user roles: business owners, who can create and manage events, and participants, who can explore and join events. This application is built with **React.js + Vite**, JavaScript, AXIOS, HTML, and CSS, and uses **Supabase** as the backend. User authentication is handled via **Google Authentication**.

## Features

- **Authentication**: Users can sign in via Google Authentication.
- **Google Calendar Integration**: Participants can easily add events to their Google Calendar.
- **Business Users**:
  - Add and manage corporate events.
  - View both corporate (internal) and foreign (external API) events.
  - Create new events by filling out a form. All fields are required except the image URL, which defaults if not provided.
  - Error handling for incomplete form submissions.
  - Manage "My Events" by editing or deleting them.
- **Community Members/Participants**:
  - Browse corporate and foreign events.
  - View detailed event cards by clicking on the event title.
  - Add events to their Google Calendar with a single click.
  - Sort events by last added, event date, or event name.
  - Track events they've signed up for, with the option to hide past events or show attended ones.

## Prerequisites

To run the **Events Platform**, ensure you have the following prerequisites installed:

- **React.js**: Version 16+
- **Node.js**: Version 12+ (for npm)

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

4. Create a .env file and add the necessary environment variables, including Supabase and GoogleAuth credentials.

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
Authentication: GoogleAuth.
Calendar Integration: Google Calendar API.

## Known Limitations

Only test users can authenticate via Google due to the app is not being submited for OAuth verification yet.
