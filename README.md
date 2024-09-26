# Stress Tester

This project is a **simple stress testing tool** designed to simulate a large number of HTTP requests to a target URL. It is meant **for educational purposes only**, allowing developers and administrators to assess how their websites handle high traffic.

## Disclaimer

This tool is designed for educational purposes and stress testing **only**. I, the creator of this tool, am **not liable for any misuse or illegal activities** carried out with this script. The user takes full responsibility for their actions. **Do not** use this tool to attack or disrupt services you do not own or have permission to test. **Use this responsibly** on your own sites or with explicit permission from the site owner.

## Features

- Sends **1,000,000 requests** to the target URL in batches of **1,000** concurrent requests.
- Simulates traffic from different user agents (browsers and devices).
- Alternates between **GET** and **POST** requests with randomized delays for a more realistic traffic pattern.

## How to Use

1. Clone or download this repository.
2. Ensure you have **Node.js** installed on your machine.
3. Open the script and **replace the target URL** (`const targetUrl`) with the website you want to stress test (with permission).
4. Run the script using Node.js:
   ```bash
   npm start
   ```

## Configuration

- **Target URL**: Set the URL you want to test:

  ```js
  const targetUrl = "https://yoursite.com/";
  ```

- **Total Requests**: Specify how many requests you want to send in total:

  ```js
  const totalRequests = 1000000;
  ```

- **Batch Size**: Set the number of concurrent requests sent per batch:

  ```js
  const batchSize = 1000;
  ```

- **User Agents**: This tool simulates requests from various browsers and devices by randomly selecting from a list of user agent strings:
  ```js
  const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36",
  ];
  ```

## Important Notes

- This script sends a large number of requests to simulate heavy traffic. **Use responsibly** and avoid disrupting services that are not yours.
- Do not use this on production websites without permission, as it may cause performance degradation or downtime.
