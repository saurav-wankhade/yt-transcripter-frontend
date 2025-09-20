# 🎬 YouTube Transcriber & Summarizer

A simple Next.js frontend that allows you to transcribe and summarize YouTube videos by providing their URL.  
It interacts with a backend API (`/transcribe_and_summarize`) which handles transcription and summarization.

---

## 🚀 Features
- Enter any YouTube video URL.
- Get full **transcription** of the video.
- Get a concise **summary** of the content.
- Built with **Next.js (React)** frontend.
- Connects to a custom **FastAPI backend** for processing.

---

## 🛠️ Tech Stack
- **Frontend**: Next.js (React, useState hooks)
- **Backend (expected)**: FastAPI (or any API serving `/transcribe_and_summarize` endpoint)
- **Language**: JavaScript (frontend), Python (backend)

---

## 📂 Project Structure
```
frontend/
│── app/
│   └── page.js   # Main Next.js component for UI
│── package.json
│── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/saurav-wankhade/yt-transcripter-frontend.git
cd youtube-transcriber-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

The app will be available at: **http://localhost:3000**

---

## 🔗 API Requirement

This frontend expects a backend API running at:

**Endpoint:** `http://localhost:8000/transcribe_and_summarize`  
**Method:** `POST`  
**Body (JSON):**
```json
{
  "url": "https://www.youtube.com/watch?v=example"
}
```

**Response (JSON):**
```json
{
  "transcription": "Full transcription text...",
  "summary": "Summarized text..."
}
```

---

## 📸 UI Preview

- Input field for YouTube video URL
- Button to trigger transcription
- Shows **loading state**
- Displays **transcription** and **summary** results

---

## 📌 Future Improvements
- Add support for different languages
- Option to download transcription as `.txt` or `.pdf`
- Dark mode UI

---

## 🤝 Contributing
Contributions are welcome! Feel free to open issues and pull requests.

---


<img width="1064" height="505" alt="Screenshot 2025-09-20 at 11 40 32 AM" src="https://github.com/user-attachments/assets/462bd7fe-f1af-4263-a3d1-7f8c2dc3d317" />
<img width="732" height="235" alt="Screenshot 2025-09-20 at 12 48 14 PM" src="https://github.com/user-attachments/assets/20811c89-a969-4141-a0bb-b6fedab392b9" />
<img width="1150" height="920" alt="Screenshot 2025-09-20 at 12 49 43 PM" src="https://github.com/user-attachments/assets/94ac14db-9b9a-4733-862a-28d23f345767" />
