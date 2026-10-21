# TEMIVANCE Website

A responsive, static, seven-page website for TEMIVANCE. Built with HTML, CSS and vanilla JavaScript, suitable for free hosting on GitHub Pages.

## Files
- `index.html` — Home
- `services.html` — Services
- `portfolio.html` — Portfolio / concept case studies
- `about.html` — About
- `pricing.html` — Pricing / package directions
- `contact.html` — Project enquiry form that opens a prepared WhatsApp message
- `faq.html` — Frequently asked questions
- `assets/` — Logo, stylesheet, JavaScript and WhatsApp QR code

## Before publishing
1. Check the WhatsApp number and QR code in `assets/whatsapp-qr.png` (currently links to https://wa.me/2349050780322).
2. Update the sample portfolio concepts with real work as you build it. They are labelled as concepts and do not claim client results.
3. Add your preferred business email and response-time promise if you want those displayed.
4. Review package wording and budget options to ensure they match your actual offering.

## Run locally
Open `index.html` in a browser. For a more realistic local preview, use VS Code with the Live Server extension.

## Publish free with GitHub Pages
1. Sign in or create an account at https://github.com.
2. Create a new **public** repository named `temivance-website` (or another name you prefer).
3. Extract this ZIP file on your computer.
4. Open the repository on GitHub and choose **Add file → Upload files**.
5. Upload the *contents* of this folder (the HTML pages and `assets` folder), not the ZIP file itself. Ensure `index.html` is at the repository root.
6. Commit the upload to the `main` branch.
7. Go to **Settings → Pages**.
8. Under **Build and deployment**, select **Deploy from a branch**. Choose branch `main`, folder `/(root)`, then click **Save**.
9. Wait a few minutes. The published URL will normally be `https://YOUR-USERNAME.github.io/temivance-website/`. Replace `YOUR-USERNAME` with your GitHub username. GitHub will show the actual URL in Settings → Pages.
10. Test the website on mobile and desktop. Test every navigation link, the WhatsApp buttons, QR code, and the contact form.

## Custom domain (optional)
You can connect a domain you own from Settings → Pages → Custom domain and update your domain provider's DNS records as GitHub instructs. Buying a domain is not free; the default `github.io` address is free.

## Important limitations
- This is a static website. The contact form prepares a WhatsApp message in the visitor's browser; it does not store form submissions or send email automatically.
- GitHub Pages does not run server-side code or databases.
- A free static site can be a strong starting point, but checkout, user accounts, databases or complex store functions need suitable third-party services or a different hosting architecture.
- No website can guarantee a specific conversion rate.


## Portfolio previews

The portfolio and homepage now show clickable image previews for these live samples, in featured order: VELTOR Footwear, PRYDE, VELORA Fashion, and CHOPLICIOUS. The URLs are stored in the image cards' `href` attributes and are not displayed as text.

The screenshots are requested from Thum.io's public website screenshot service at runtime, so no separate screenshot files need to be uploaded. This keeps the previews current, but their first load may take a moment and the free service may apply its own watermark or rate limits. If you prefer permanent screenshots without an external service dependency, download approved screenshots of the four sites and replace each `img src` in `portfolio.html` and `index.html` with a repository-relative image path.
