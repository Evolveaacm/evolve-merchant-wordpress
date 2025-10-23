# Google Sheets Contact Form Setup (100% Free)

Your contact form will now save all submissions directly to Google Sheets! Here's how to set it up in just a few minutes.

## Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it "Contact Form Submissions" (or whatever you prefer)

## Step 2: Set Up Column Headers

In the first row of your sheet, add these headers:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Timestamp | Name | Email | Phone | Company | Message |

## Step 3: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Create a new row with the data
    var row = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.message || ''
    ];

    // Append the row to the sheet
    sheet.appendRow(row);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **💾 Save** icon (or press Ctrl+S / Cmd+S)
5. Name your project "Contact Form Handler" (or whatever you like)

## Step 4: Deploy the Web App

1. Click **Deploy** → **New deployment**
2. Click the **⚙️ gear icon** next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description:** Contact Form Handler
   - **Execute as:** Me
   - **Who has access:** Anyone
5. Click **Deploy**
6. Click **Authorize access** when prompted
7. Choose your Google account
8. Click **Advanced** → **Go to [Your Project Name] (unsafe)**
9. Click **Allow**
10. **COPY THE WEB APP URL** - it will look like:
    ```
    https://script.google.com/macros/s/AKfycby.../exec
    ```

## Step 5: Add the URL to Your Project

1. Open the `.env.local` file in your project
2. Replace the placeholder with your actual Web App URL:
   ```
   NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycby.../exec
   ```
3. Save the file

## Step 6: Restart Your Dev Server

```bash
cd evolve-merchant-services && bun run dev
```

## Step 7: Test It!

1. Fill out your contact form on the website
2. Click "Send Message"
3. Check your Google Sheet - you should see the new submission!

## 📧 Get Email Notifications (Optional)

To receive an email when someone submits the form:

1. In your Google Sheet, click **Tools** → **Notification rules**
2. Select "Any changes are made"
3. Choose how often you want to be notified
4. Click **Save**

Now you'll get an email every time someone fills out your contact form!

## 🔒 Privacy & Security

- ✅ All data is stored in your personal Google Drive
- ✅ Only you have access to the submissions
- ✅ 100% free, no limits
- ✅ Can export data anytime

## 🛠️ Troubleshooting

**Form shows an error after submission:**
- Make sure you copied the ENTIRE Web App URL (including `/exec` at the end)
- Check that you selected "Anyone" for "Who has access" in the deployment settings
- Verify the URL is in `.env.local` and you restarted the dev server

**No data appearing in the sheet:**
- Check that your column headers exactly match: Timestamp, Name, Email, Phone, Company, Message
- Make sure the Apps Script code was saved
- Try redeploying the web app (Deploy → Manage Deployments → Edit → New Version)

**Need help?**
The Google Apps Script is completely free and unlimited. If you have issues, double-check each step above!
