# L'Étoile - Premium Restaurant & Café Website Template

A modern, high-performance, responsive template engineered for upscale restaurants, cafes, and hospitality businesses. Built using zero external dependencies (Pure HTML5, CSS3, Vanilla JavaScript).

---

## 🛠️ How to Customize This Template For Clients

All client modifications are centralized in **`js/data.js`**. You do not need to hunt through individual HTML pages to change texts, colors, or phone numbers.

### 1. Changing Brand Name, Colors & Typography
Open `js/data.js` and edit the `SITE_CONFIG.theme` block:
```javascript
theme: {
  primaryColor: "#c5a059",     // Primary Accent / Gold
  secondaryColor: "#1a1e21",   // Background Dark Surface
  fontHeading: "'Playfair Display', Georgia, serif",
  fontBody: "'Plus Jakarta Sans', system-ui, sans-serif"
}