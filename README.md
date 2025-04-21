# Bike Store

Welcome to the **Bike Store Challenge**! This project involves recreating a bike store application using **React.js** and **TypeScript**. It is divided into three levels of complexity, each adding more features and functionality. The goal is to create a fully functional, component-based React app that consumes data from an API and displays it dynamically.

---

## Table of Contents

- [Description](#description)
- [API Endpoint](#api-endpoint)
- [Components](#components)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)

---

## Description

This project recreates the bike store challenge using **React** and **TypeScript**. It consists of:

- A **navbar** to navigate the page.
- A **grid of bike cards** displaying unique data fetched from an API.
- **Filters** to dynamically filter the displayed bikes.
- A **footer** to complete the layout.

---

## API Endpoint

The data for the bikes is provided through the following API:  
**[https://challenges.brainster.tech/ajax_data/data.json](https://challenges.brainster.tech/ajax_data/data.json)**

Each bike card includes:

- **Title**: The name of the bike.
- **Image**: URL for the bike image.
- **Price**: Cost of the bike.

---

## Components

The app uses a **component-based design** with the following components:

### 1. **Header**

- Contains the entire **navbar**.

### 2. **CardsContainer**

- Represents the container of all **bike cards** with its title, image, and price.

### 2. **Card**

- Represents a single **bike card** with its title, image, and price.

### 3. **Filters**

- Contains all the **filters**.
- (Optional) Create a sub-component `EachFilter` for individual filters.

### 4. **Footer**

- Contains the **footer area** of the app.

---

## Project Structure

```
bike-store/
├── node_modules/
│   ├── public/
│   │   ├── images/
│   │       ├── 1.png
│   │       ├── .....
│   │       ├── 20.png
│   │
├── src/
│   ├── components/
│   │   ├── card/
│   │   |   ├── Card.css
│   │   |   ├── Card.tsx
│   │   |
│   │   ├── cards/
│   │   |   ├── CardsContainer.css
│   │   |   ├── CardsContainer.tsx
│   │   |
│   │   ├── filters/
│   │   |   ├── Filters.css
│   │   |   ├── Filter.tsx
│   │   |
│   │   ├── footer/
│   │   |   ├── Footer.css
│   │   |   ├── Footer.tsx
│   │   |
│   │   ├── header/
│   │       ├── Header.css
│   │       ├── Header.tsx
│   │
│   ├── interfaces/
│   │   ├── BikerCard.ts
│   │   ├── Filters.ts
│   │
│   ├── api.ts
│   ├── App.css
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
│
├── .esclintrc.cjs
├── .gitignore
├──  index.html
├──  package-lock.json
├──  package.json
├──  README.md
├──  tsconfig.json
├──  tsconfig.node.json
└──  vite.config.ts
```

---

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone [https://git.brainster.co/Lutmira.Peci-3/brainsterchallenges_lutmirapecife3]
   git fetch
   git checkout Challenge-02-ReactJS
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

---
