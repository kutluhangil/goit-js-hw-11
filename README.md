<h1>📘 JavaScript Homework 11 — HTTP Requests & Backend Interaction</h1>

<p>
Learning is not always easy, but it is always rewarding 💪  
This repository contains a complete implementation of <b>Homework 11</b>, focused on
working with HTTP requests, backend APIs, and dynamic UI updates.
</p>

<hr />

<h2>🚀 Overview</h2>

<p>
In Module 11, the focus shifts to understanding how frontend applications communicate
with backend services using HTTP.
</p>

<p>This homework helps reinforce your knowledge of:</p>

<ul>
  <li>The difference between <b>HTTP</b> and <b>HTTPS</b></li>
  <li>Basic HTTP methods (<code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code>)</li>
  <li>The concept of <b>CRUD</b> operations</li>
  <li>How frontend applications interact with backend APIs</li>
  <li>Handling asynchronous HTTP requests with JavaScript</li>
</ul>

<p>
It’s time to put this knowledge into practice by building an image search application
that communicates with a real backend service.
</p>

<hr />

<h2>📂 Project Structure</h2>

<pre>
goit-js-hw-11/
├─ src/
│  ├─ js/
│  │  └─ gallery.js
│  ├─ styles/
│  │  └─ loader.css
│  ├─ index.html
│  └─ main.js
├─ public/
├─ dist/
├─ package.json
├─ vite.config.js
└─ README.md
</pre>

<p>
The project is bundled using <b>Vite</b> and follows a clean, scalable structure.
</p>

<hr />

<h2>🧩 Main Task — Image Search Application</h2>

<p>
The goal of this task is to create an application that allows users to search for images
by keyword and display the results in a gallery.
</p>

<hr />

<h2>🔍 Search Form</h2>

<p>
The application includes a search form where the user enters a keyword.
When the form is submitted, an HTTP request is sent to the backend using the entered term.
</p>

<ul>
  <li>User enters a search query</li>
  <li>Form submission triggers an HTTP request</li>
  <li>Previous search results are cleared before a new request</li>
</ul>

<hr />

<h2>🌐 HTTP Requests</h2>

<p>
The backend service used in this project is the public <b>Pixabay API</b>.
Each request includes required query parameters to ensure correct results.
</p>

<h3>Required Query Parameters</h3>

<ul>
  <li><code>key</code> — personal API access key</li>
  <li><code>q</code> — search keyword entered by the user</li>
  <li><code>image_type=photo</code></li>
  <li><code>orientation=horizontal</code></li>
  <li><code>safesearch=true</code></li>
</ul>

<p>
If the backend returns an empty array, a notification is shown informing the user
that no matching images were found.
</p>

<hr />

<h2>🖼️ Gallery & Image Cards</h2>

<p>
Search results are rendered inside a gallery container.
Each image card is created dynamically based on the backend response.
</p>

<h3>Image Object Properties Used</h3>

<ul>
  <li><code>webformatURL</code> — small image for gallery view</li>
  <li><code>largeImageURL</code> — large image for modal view</li>
  <li><code>tags</code> — image description (used as <code>alt</code> text)</li>
  <li><code>likes</code></li>
  <li><code>views</code></li>
  <li><code>comments</code></li>
  <li><code>downloads</code></li>
</ul>

<p>
Before starting a new search, the gallery is completely cleared to avoid mixing results.
</p>

<hr />

<h2>🔍 SimpleLightbox Integration</h2>

<p>
To display large versions of images in a modal window, the
<b>SimpleLightbox</b> library is used.
</p>

<pre>
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
</pre>

<ul>
  <li>Each image card is wrapped in a link element</li>
  <li>Clicking an image opens it in a modal</li>
  <li>After adding new images to the DOM, <code>refresh()</code> is called</li>
</ul>

<hr />

<h2>⏳ Loading Indicator</h2>

<p>
A loading indicator is displayed while images are being fetched from the backend.
</p>

<ul>
  <li>Loader appears before the HTTP request starts</li>
  <li>Loader disappears after the response is received</li>
  <li>A CSS loader library is used for better UX</li>
</ul>

<hr />

<h2>🔔 Notifications</h2>

<p>
User notifications are displayed using the <b>iziToast</b> library instead of alerts.
</p>

<pre>
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
</pre>

<p>
Notifications are shown when:
</p>

<ul>
  <li>No images are found for the search query</li>
  <li>An error occurs during the HTTP request</li>
</ul>

<hr />

<h2>🛡️ Error Handling</h2>

<p>
All HTTP requests are handled using Promise chains with
<code>then()</code> and <code>catch()</code> to prevent application crashes.
</p>

<ul>
  <li>Errors are caught and handled gracefully</li>
  <li>The UI remains stable even if the request fails</li>
</ul>

<hr />

<h2>✅ Mentor Checklist</h2>

<ul>
  <li>The homework submission includes GitHub repository and live page links</li>
  <li>The project is built using Vite</li>
  <li>No console errors, warnings, or logs are present</li>
  <li>iziToast, SimpleLightbox, and css-loader libraries are installed</li>
  <li>The UI matches the provided layout or custom styling</li>
  <li>A search form is available on the page</li>
  <li>Loader appears before the request and disappears after response</li>
  <li>Previous results are cleared before a new search</li>
  <li>HTTP requests include required query parameters</li>
  <li>Images are rendered based on backend response</li>
  <li>DOM updates are performed in a single operation</li>
  <li>SimpleLightbox <code>refresh()</code> is called after rendering</li>
  <li>Clicking an image opens it in a modal window</li>
  <li>Errors are handled using <code>then()</code> and <code>catch()</code></li>
</ul>

<hr />

<h2>📌 Final Notes</h2>

<p>
This project demonstrates practical skills in working with HTTP requests,
backend APIs, and dynamic user interfaces.
</p>

<p>
It reflects a real-world frontend workflow using:
</p>

<ul>
  <li>Asynchronous JavaScript</li>
  <li>REST APIs</li>
  <li>Third-party libraries</li>
  <li>Modern build tools</li>
</ul>

<hr />

<h2>🔗 Links</h2>

<ul>
  <li>
    <b>GitHub Repository:</b>
    <a href="https://github.com/USERNAME/goit-js-hw-11" target="_blank">
      https://github.com/USERNAME/goit-js-hw-11
    </a>
  </li>
  <li>
    <b>Live Demo (GitHub Pages):</b>
    <a href="https://USERNAME.github.io/goit-js-hw-11/" target="_blank">
      https://USERNAME.github.io/goit-js-hw-11/
    </a>
  </li>
</ul>
